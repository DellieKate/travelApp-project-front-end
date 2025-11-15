import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage.jsx'
import { Layout } from './components/Layout.jsx'
import { CitiesPage } from './pages/Cities.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />}/>
          <Route path="/cities" element={<CitiesPage />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
