"use client"
import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import FormHeader from '@/components/dashboard/FormHeader';
import { Pencil, Plus, X } from 'lucide-react';
import Link from 'next/link';
import TextInput from '@/components/FormInputs/TextInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextareaInput';
import SelectInput from '@/components/FormInputs/SelectInput';
import { UploadButton, UploadDropzone } from '@uploadthing/react';
import Image from 'next/image';
import ImageInput from '@/components/FormInputs/ImageInput';



export default function NewItem() {
  const [imageUrl, setImageUrl] = useState("");

  const categories = [
    {
      label:"Electronics",
      value:"asdasdasd2"
    },
    {
      label:"Clothing",
      value:"dasdasd2"
    }
  ]
  const units = [
    {
      label:"kg",
      value:"asdasdasd2"
    },
    {
      label:"pcs",
      value:"dasdasd2"
    }
  ]
  const brands = [
    {
      label:"HP",
      value:"asdasdasd2"
    },
    {
      label:"DELL",
      value:"dasdasd2"
    }
  ]
  const warehouses = [
    {
      label:"Warehouse A",
      value:"asdasdasd2"
    },
    {
      label:"Warehouse B",
      value:"dasdasd2"
    },
    {
      label:"Warehouse C",
      value:"dasdasd2"
    }
  ]
  const suppliers = [
    {
      label:"Supplier A",
      value:"asdasdasd2"
    },
    {
      label:"Supplier B",
      value:"dasdasd2"
    },
    {
      label:"Supplier C",
      value:"dasdasd2"
    }
  ]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading,setLoading]=useState(false);

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000"
    try {
      const response = await fetch(`${baseUrl}/api/items`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      if(response.ok){
        console.log(response)
        setLoading(false)
        reset();
      }

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  return (
    <div>
      {/* Header */}
      <FormHeader title="Шинэ Item" href="/dashboard/inventory/" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Item Title" name="title" register={register} errors={errors} className='w-full'/>
          <SelectInput name="categoryId" label="Select the Item Category" register={register} className='w-full' options={categories}/>
          <TextInput label="Item SKU" name="sku" register={register} errors={errors} className='w-full'/>
          <TextInput label="Item Barcode" name="barcode" register={register} errors={errors} className='w-full'/>
          <TextInput label="Item Quantity" name="qty" register={register} errors={errors} className='w-full'/>
          <SelectInput name="unitId" label="Select the Item Unit" register={register} className='w-full' options={units}/>
          <SelectInput name="brandId" label="Select the Item Brand" register={register} className='w-full' options={brands}/>
          <TextInput label="Buying Price" name="buyingPrice" register={register} errors={errors} type="number" className='w-full'/>
          <TextInput label="Selling Price" name="sellingPrice" register={register} errors={errors} type="number" className='w-full'/>
          <SelectInput name="supplierId" label="Select the Item Supplier" register={register} className='w-full' options={suppliers}/>
          <TextInput label="Re-Order Point" name="reOrderPoint" register={register} errors={errors} type="number" className='w-full'/>
          <SelectInput name="warehouseId" label="Select the Item Warehouse" register={register} className='w-full' options={warehouses}/>
          <TextInput label="Item Weight in Kgs" name="weight" register={register} errors={errors} type="number" className='w-full'/>
          <TextInput label="Item Dimensions in cm (20 x 30 x 40)" name="dimensions" register={register} errors={errors} type="number" className='w-full'/>
          <TextInput label="Item Tax Rate in %" name="taxRate" type="number" register={register} errors={errors}  className='w-full'/>
          <TextareaInput label="Item Description" name="description" register={register} errors={errors}/>
          <TextareaInput label="Item Notes" name="notes" register={register} errors={errors}/>
 
          <ImageInput
        label="Item image"
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        endpoint="imageUploader"
      />



        </div>
       <SubmitButton isLoading={loading} title="Item"/>
      </form>
    </div>
  );
}
