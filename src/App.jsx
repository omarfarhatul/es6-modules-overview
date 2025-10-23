import './App.css'
import Watch from './watch'

function App() {
  
  // const watches=[
  //   {id: 1, name: 'CASIO watch', price: 500},
  //   {id: 2, name: 'Apple watch', price: 3300},
  //   {id: 3, name: 'Royal Watch', price: 60400},
  // ]

  const watches = [
  { id: 1, name: "Apple Watch Series 9", price: 399 },
  { id: 2, name: "Samsung Galaxy Watch 6", price: 349 },
  { id: 3, name: "Fitbit Versa 4", price: 229 },
  { id: 4, name: "Garmin Venu 3", price: 449 },
  { id: 5, name: "Amazfit GTR 4", price: 199 }
];


  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch=> <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
