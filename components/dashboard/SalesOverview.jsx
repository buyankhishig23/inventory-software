import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
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
                  <Link href={item.href} key={i} className="shadow rounded-lg border-slate-200 bg-white px-6 py-4 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300 border-2 hover:border-blue-400 ">
                    <h4 className={`font-semibold text-3xl ${item.color}`}>{item.number}</h4>

                    <small className='text-slate-500'>{item.unit}</small>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className='w-4 h-4'/>
                      <span className='uppercase text-xs'>{item.title}</span>
                    </div>
                  </Link>
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
                <div key={i} className="mb-4 shadow rounded-lg border border-slate-200 bg-white py-2 px-4 cursor-pointer flex items-center gap-3 justify-between transition-all duration-300  hover:border-blue-400">
                <h2 className='text-slate-500 uppercase text-sm'>{item.title}</h2>
                <h4 className='font-semibold text-2xl'>{item.number}</h4>  
               </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
