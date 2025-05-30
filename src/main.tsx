import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home.tsx'
import './styles/tailwind.css'
import Navbar from './components/navbar/navbar.tsx'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
  </StrictMode>,
)
