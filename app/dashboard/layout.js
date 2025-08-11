
import React from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'

export default function dashboardlayout({children}) {
  return (

    <section>
    <div className='md:w-64 fixed md:block hidden'>
      <Sidebar/>
    </div>
    <div className='md:ml-64'>
      <Header/>
      {children}
    </div>
    </section>
  )
}
