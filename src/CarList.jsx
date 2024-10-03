import { useQuery } from '@tanstack/react-query';
import { DataGrid } from '@mui/x-data-grid';
import AddCar from './AddCar';

const fetchCars = async () => {
  const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars');
  const data = await response.json();
  return data;
};

function CarList() {
  const { data, error, isLoading } = useQuery({ queryKey: ['cars'], queryFn: fetchCars});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const columns = [
    { field: 'brand', headerName: 'Brand', width: 150 },
    { field: 'model', headerName: 'Model', width: 150 },
    { field: 'color', headerName: 'Color', width: 150 },
    { field: 'fuel', headerName: 'Fuel', width: 150 },
    { field: 'modelYear', headerName: 'Year', width: 110 },
    { field: 'price', headerName: 'Price', width: 150 },
  ];

  return (
    <>
      <AddCar />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={data._embedded.cars} 
          columns={columns} 
          getRowId={row => row._links.car.href}
        />
      </div>
    </>
  );
}

export default CarList;