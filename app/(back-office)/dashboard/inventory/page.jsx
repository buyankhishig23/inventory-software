"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import { Boxes, Component, Plus, ScrollText, Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Inventory() {
  const optionsCards=[
    {
      title:"Барааны бүлэг",
      description:"Ижил төрлийн бараануудыг багцлах",
      link:"/new",
      linkTitle:"Шинэ барааны бүлэг",
      enabled:true,
      icon:Boxes,
    },
    {
      title:"Бараа",
      description:"Худалдах болон зарах бараа материалыг үүсгэх",
      link:"/new",
      linkTitle:"Шинэ бараа",
      enabled:true,
      icon:Shirt,
    },
    {
      title:"Багц бараа",
      description:"Өөр төрлийг барааг багц болгон худалдах",
      link:"/new",
      linkTitle:"Багц бараа",
      enabled:false,
      icon:Component,
    },
    {
      title:"Үнийн жагсаалт",
      description:"Бараа материалын үнийн жагсаалт",
      link:"/new",
      linkTitle:"Үнийн жагаалт",
      enabled:false,
      icon:ScrollText,
    },
  ]
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6">
       {
        optionsCards.map((card,i)=>{
          return(
            <OptionCard optionData={card} key={i}/>
          )
        })
       }
       
      </div>
    </div>
  )
}
