"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {
  const data = useSelector(state=>state);
  const total = data.product.reduce((a,b)=>a+b.price,0)
  return (
    <div className='text-center bg-teal-500 p-4 text-xl'>
        total item :{data.product.length} (Rs. {total})/-
    </div>
  )
}

export default Card