//import React, { use } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/shared/Navbar'
import { Footer } from '../components/shared/Footer'
import { Banner } from '../components/home/Banner'
import { Newsletter } from '../components/home/Newsletter'

export const RootLayout = () => {
  const { pathname} = useLocation();

  return (
    <div className='h-screen flex flex-col font-montserrat'>
      <Navbar />

      {/* Insercion de Banner en ruta raiz */}
      {pathname === '/' && <Banner />}

      <main className="container my-8 flex-1">
        <Outlet />
      </main>

      {/* Insercion de Newsletter en ruta raiz */}
      {pathname === '/' && <Newsletter />}
      
      <Footer />
    </div>
  )
}
