import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import Togle from './cmponent/Togle.jsx'
import Effect from './cmponent/Effect.jsx'
import './index.css'
import Counter from './cmponent/counter.jsx'
import Keyboardcounter from './cmponent/Keyboardcounter.jsx'
import Props from './cmponent/props.jsx'
import Parent from './cmponent/parent.jsx'
import Counterrrr from './cmponent/exercice 1/counterrrr.jsx'
import Display from './cmponent/exercice 1/Display.jsx'
import Visible from './cmponent/exercice 1/Visible.jsx'
import Showm from './cmponent/exercice 1/Showm.jsx'
import Countdown from './cmponent/exercice 1/Countdown.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <Countdown></Countdown>
  </StrictMode>,
)
