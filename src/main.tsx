import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/tailwind.css'
import Navbar from './components/navbar/navbar.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
  </StrictMode>,
)
