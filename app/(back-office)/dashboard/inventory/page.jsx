"use client"
import FixedHeader from '@/components/dashboard/FixedHeader'
import OptionCard from '@/components/dashboard/OptionCard'
import {Diff, LayoutGrid, LayoutPanelTop,  Scale, Slack, Warehouse } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Inventory() {
  const optionsCards=[

    {
      title:"Бараа",
      description:"Худалдах болон зарах бараа материалыг үүсгэх",
      link:"/dashboard/inventory/items/new",
      linkTitle:"Шинэ бараа",
      enabled:true,
      icon:LayoutGrid,
    },
    {
      title:"Багц бараа",
      description:"Өөр төрлийг барааг багц болгон худалдах",
      link:"/dashboard/inventory/categories/new",
      linkTitle:"New  Category",
      enabled:true,
      icon:LayoutPanelTop,
    },
    {
      title:"Brands",
      description:"Бараа материалын үнийн жагсаалт",
      link:"/dashboard/inventory/brands/new",
      linkTitle:"New Brands",
      enabled:true,
      icon:Slack,
    },
    {
      title:"Warehouse",
      description:"Бараа материалын үнийн жагсаалт",
      link:"/dashboard/inventory/warehouse/new",
      linkTitle:"New Warehouse",
      enabled:true,
      icon:Warehouse,
    },
    {
      title:"Units",
      description:"Бараа материалын үнийн жагсаалт",
      link:"/dashboard/inventory/units/new",
      linkTitle:"New Units",
      enabled:true,
      icon:Scale,
    },
    {
      title:"Inventory Adjustment",
      description:"TransferStock the main warehouse",
      link:"/dashboard/inventory/adjustments/new",
      linkTitle:"New Adjustment",
      enabled:true,
      icon:Diff,
    },
  ]
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
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
