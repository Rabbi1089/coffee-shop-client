import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffee = useLoaderData();
  const [coffees , setCoffees] = useState(loadedCoffee)


  return (
    <>
      <h1 className=' text-3xl text-sky-800 font-bold p-4 m-5 uppercase'>you have {coffees.length} coffee</h1>

<div className="grid md:grid-cols-2 gap-4">
{
  coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
</div>

    </>
  )
}

export default App
