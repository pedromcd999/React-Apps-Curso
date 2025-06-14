import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp valor = {123}/>
  </StrictMode>,
)
