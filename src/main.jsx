import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SalePage from './SalePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SalePage />
  </StrictMode>
)
