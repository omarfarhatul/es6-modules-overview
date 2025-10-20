import './App.css'
import Watch from './watch'

function App() {
  
  const watches=[
    {id: 1, name: 'CASIO', price: 500},
    {id: 2, name: 'Apple', price: 3300},
    {id: 3, name: 'Royal', price: 60000},
  ]

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
