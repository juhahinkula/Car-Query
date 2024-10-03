import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CarDialogContent from './CarDialogContent';
import Button from '@mui/material/Button';
import { Car } from '../types';

async function addCar(car) {
  const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars', 
    {
      headers: { 'Content-Type': 'application/json'},
      body: JSON.parse(car)  
    }
  )
  const data =  await response.json();
  return data;
}

function AddCar() {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0
  });

  const { mutate } = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cars']);
    },
    onError: (err) => {
      console.error(err);
    },
  });  

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };    
  
  const handleChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  const handleSave = () => {
    mutate(car);
    setCar({ brand: '', model: '', color: '', registrationNumber: '', modelYear: 0, price: 0 });
    handleClose();
  }  

  return(
    <>
      <Button onClick={handleClickOpen}>New Car</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New car</DialogTitle>
          <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar;