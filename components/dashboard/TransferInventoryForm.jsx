"use client"
import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import TextInput from '@/components/FormInputs/TextInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextareaInput';
import SelectInput from '@/components/FormInputs/SelectInput';


export default function TransferInventoryForm() {
  
  const branches = [
    {
      label:"Branch A",
      value:"asdasds112"
    },
    {
      label:"Branch B",
      value:"eqweqweqwe12"
    }
  ]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading,setLoading]=useState(false);

  async function onSubmit  (data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000"
    try {
      const response = await fetch(`${baseUrl}/api/adjustments/transfer`,{
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput type='number' label="Enter Amount of Stock to Transfer" name="transferStockQty" register={register} errors={errors} />
          <SelectInput name="givingWarehouseId" label="Select the Warehouse that will give the  stock" register={register} className='w-full' options={branches}/>
          <SelectInput name="receivingWarehouseId" label="Select the Warehouse that will receive stock" register={register} className='w-full' options={branches}/>
           <TextareaInput label="Adjustment Notes" name="notes" register={register} errors={errors}/>
        </div>
       <SubmitButton isLoading={loading} title="adjustments"/>
      </form>

  );
}
