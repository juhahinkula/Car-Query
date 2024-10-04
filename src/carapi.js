export const fetchCars = async () => {
  const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars');
  const data = await response.json();
  return data;
}

export const  addCar = async (car) => {
  const response = await fetch('https://car-rest-service-carshop.2.rahtiapp.fi/cars', 
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(car)  
    }
  )
  const data =  await response.json();
  return data;
}
