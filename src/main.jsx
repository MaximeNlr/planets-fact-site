import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Navigate } from 'react-router'
import PlanetPage from './Pages/PlanetPage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/mercury" />
  },
  {
    path: "/:planetName",
    element: <PlanetPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
