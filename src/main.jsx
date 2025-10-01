import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Text from './cmponent/text.jsx'
import Inp from './cmponent/inp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Text lastname={"ilyes"}/>
    <Inp></Inp>
  </StrictMode>,
)
