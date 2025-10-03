import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Count from './cmponent/Count.jsx'
import Togle from './cmponent/Togle.jsx'
import Effect from './cmponent/Effect.jsx'
import './index.css'
import Counter from './cmponent/counter.jsx'
import Keyboardcounter from './cmponent/Keyboardcounter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Keyboardcounter></Keyboardcounter>
   
  </StrictMode>,
)
