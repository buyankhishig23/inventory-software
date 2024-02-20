import React from 'react'
import Link from 'next/link'

export default function SubscriptionCard() {
  return (
    <div className="px-1 py-3">
        <div className='rounded-lg p-3 bg-slate-900'>
         <div className="border-b border-slate-600 pb-3">
            <p className='text-sm border-l-2 border-orange-400 pl-2'>Таны эрх  <span className="text-orange-500 "> 12 хоногийн дараа дуусна</span>
            </p>
        </div>
        <div className="flex text-sm">
            <button className='border-r border-slate-600 p-1'>Change Plan</button>
            <Link className='p-1' href="#">Upgrade</Link>
        </div>
        </div>
    </div>
  )
}
