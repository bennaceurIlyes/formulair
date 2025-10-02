import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Count from './cmponent/Count.jsx'
import Togle from './cmponent/Togle.jsx'
import Effect from './cmponent/Effect.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Effect></Effect>
   
  </StrictMode>,
)
