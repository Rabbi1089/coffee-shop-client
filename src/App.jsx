import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffee = useLoaderData();

  return (
    <>
      <h1 className=' text-3xl text-sky-800 font-bold p-4 m-5 uppercase'>you have {coffee.length} coffee</h1>

<div className="grid md:grid-cols-2 gap-4">
{
        coffee.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)
      }
</div>

    </>
  )
}

export default App
