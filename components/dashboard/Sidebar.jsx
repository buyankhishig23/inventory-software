import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, HomeIcon, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Home from '@/app/page'
import SubscriptionCard from './SubscriptionCard'

export default function Sidebar() {
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
              <Link href="#" className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md" >
                  <HomeIcon className='w-4 h-4'/>
                  <span>Нүүр</span>
              </Link>
              <button className="flex items-center space-x-2 p-2" >
                  <BaggageClaim className='w-4 h-4'/>
                  <span>Агуулах</span>
              </button>
              <button className="flex items-center space-x-2 p-2" >
                  <ShoppingBasket className='w-4 h-4'/>
                  <span>Борлуулалт</span>
              </button>
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
