"use client"
import Card from '@/components/Card';
import { useGetproductapiQuery } from '@/redux/api/productApi'
import { addProduct } from '@/redux/api/productSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

const page = () => {
  const dispatch = useDispatch();
  const {data,isLoading,isError} = useGetproductapiQuery();
  const mydata = data?.products;
  return (
    <div>
      <Card/>
      {isLoading && <p>loading....</p>}
      {isError && <p>something worng</p>}
      <section className="bg-green-400 grid grid-cols-3 ">
      {mydata?.map((data)=>(
        <article key={data.id} className='m-3 p-3 rounded-md bg-cyan-400 text-center text-black'>
          <p className='text-xl text-rose-800'>{data.brand}</p>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>{data.price}</p>
          <button className='rounded-md bg-zinc-800 text-white p-2 border-emerald-50'
                onClick={()=>dispatch(addProduct({name:data.brand,price:data.price}))}>add price</button>
        </article>
      ))}
      </section>
    </div>
  )
}

export default page