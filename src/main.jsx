import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './providers/AuthProvider'
import router from './Routes'

const queryClient = new QueryClient(); 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <AuthProvider> 
      <RouterProvider router={router} />
      </AuthProvider> 
      </QueryClientProvider>
  </React.StrictMode>,
)
