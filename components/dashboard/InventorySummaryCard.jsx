import React from 'react'

export default function InventorySummaryCard({item}) {
  return (
    <div className="mb-4 shadow rounded-lg border border-slate-200 bg-white py-2 px-4 cursor-pointer flex items-center gap-3 justify-between transition-all duration-300  hover:border-blue-400">
    <h2 className='text-slate-500 uppercase text-sm'>{item.title}</h2>
    <h4 className='font-semibold text-2xl'>{item.number}</h4>  
   </div>
  )
}
