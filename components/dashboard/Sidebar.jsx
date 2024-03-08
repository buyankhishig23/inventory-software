"use client"
import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, HomeIcon, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingBasketIcon, ShoppingCart } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Home from '@/app/page'
import SubscriptionCard from './SubscriptionCard'
import SidebarDropdownLink from './SidebarDropdownLink'

  
export default function Sidebar() {
  const inventoryLinks =[
    {
        title:"Бараа",
        href:"/dashboard/inventory"
    },
    {
        title:"Барааны бүлэг",
        href:"/dashboard/inventory"
    },
    {
        title:"Брэнд",
        href:"/dashboard/inventory"
    },
    {
        title:"Нэгж",
        href:"/dashboard/inventory"
    },
    {
        title:"Агуулах",
        href:"/dashboard/inventory"
    },
    {
        title:"Агуулахын тохиргоо",
        href:""
    }
  ]
  const salesLinks =[
    {
        title:"Үйлчлүүлэгч",
        href:"#"
    },
    {
        title:"Борлуулалтын захиалга",
        href:"#"
    },
    {
        title:"Багцууд",
        href:"#"
    },
    {
        title:"Түгээлт",
        href:"#"
    },
    {
        title:"Нэхэмжлэлүүд",
        href:"#"
    },
    {
        title:"Борлууллатын баримтууд",
        href:"#"
    },
    {
        title:"Төлбөр хүлээн авсан",
        href:"#"
    },
    {
        title:"Буцсан борлуулалт",
        href:"#"
    },
    {
        title:"Зээлийн тэмдэглэл",
        href:"#"
    }
    
    
  ]
  return (
    <div className='w-60 min-h-screen bg-slate-800 text-slate-50  fixed flex flex-col'>
        {/* {Top}   */}
        <div className='flex flex-col flex-grow'>
          {/* {Logo} */}
          <Link href="" className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
              <ShoppingCart/>
              <span className='text-xl font-semibold'>Бараа бүртгэл</span>
          </Link>
          
          {/* {Links} */}
          <nav className='flex flex-col gap-3 px-3 py-6'>
              <Link href="/dashboard/home/overview" className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md" >
                  <HomeIcon className='w-4 h-4'/>
                  <span>Нүүр</span>
              </Link>
            <SidebarDropdownLink 
                items={inventoryLinks} 
                title="Агуулах"
                icon={BaggageClaim}
               />
            <SidebarDropdownLink 
                items={salesLinks} 
                title="Борлуулалт"
                icon={ShoppingBasket}
               />
              <button className="flex items-center space-x-2 p-2" >
                  <ShoppingBag className='w-4 h-4'/>
                  <span>Худалдан авалт</span>
              </button>
              <Link href="#" className="flex items-center space-x-2 p-2" >
                  <Cable className='w-4 h-4'/>
                  <span>Холболт</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 p-2" >
                  <BarChart4 className='w-4 h-4'/>
                  <span>Тайлан</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 p-2" >
                  <Files className='w-4 h-4'/>
                  <span>Баримт</span>
              </Link>
          </nav>
          <SubscriptionCard />
        </div>
        {/* Move the div here */}
        <div className="flex flex-col mt-auto">
            <button className="bg-slate-950 flex space-x-2  items-center justify-center py-2 px-1 ">
                <ChevronLeft/>
            </button>
        </div>
    </div>
  )
}
