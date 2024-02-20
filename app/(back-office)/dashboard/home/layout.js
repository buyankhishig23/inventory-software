import HomeNavbar from '@/components/dashboard/HomeNavbar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <HomeNavbar/>
        {children}
    </div>   
  )
}
