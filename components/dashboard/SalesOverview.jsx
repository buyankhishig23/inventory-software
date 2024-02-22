import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import SalesActivityCard from './SalesActivityCard'
import InventorySummaryCard from './InventorySummaryCard'
export default function SalesOverview() {
  const salesActivity=[
    {
      title:"To be Packed",
      number:10,
      unit:"Qty",
      href: "#",
      color:"text-blue-600",
    },
    {
      title:"To be Shipped",
      number:0,
      unit:"Pkgs",
      href: "#",
      color:"text-red-600",
    },
    {
      title:"To be Delivered",
      number:10,
      unit:"Pkgs",
      href: "#",
      color:"text-green-600",
    },
    {
      title:"To be Invoiced",
      number:10,
      unit:"Qty",
      href: "#",
      color:"text-orange-600",
    },
  ]
  const invertorySummary=[
    {
      title:"Quantiy in Hand",
      number:10,
    },
    {
      title:"Quantiy to be recieved",
      number:0,
    },
  ]
  return (
    <div className='bg-blue-100 border-b border-slate-300  grid grid-cols-12 gap-4'>
      {/* Sales Activity */}
      <div className='col-span-8 border-r border-slate-300 p-8'>
        <h2 className='mb-6 text-2xl'>Sales Activity</h2>
          <div className=" pr-8 grid grid-cols-4 gap-4">
            {/* Card */}
            {
              salesActivity.map((item,i)=>{
                return(
                 <SalesActivityCard item={item} key={i}/>
                )
              })
            }
            
          </div>
      </div>
      {/* Inventory summary */}
      <div className="col-span-4 p-8">
        <h2 className='mb-6 text-xl'>Inventory Summary</h2>
        <div className="">
          {
            invertorySummary.map((item,i)=>{
              return(
                <InventorySummaryCard item={item} key={i}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
