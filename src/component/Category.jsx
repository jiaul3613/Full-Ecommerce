import React from 'react'
import Container from './Container';
import { VscArrowSmallLeft } from "react-icons/vsc";
import { VscArrowSmallRight } from "react-icons/vsc";

const Category = () => {
  return (
    <div className='mt-20'>
        <Container>
            <div className='flex items-center gap-4'>
            <div className='w-5 h-10 bg-red-600 rounded-sm'></div>
            <h3 className='font-poppins font-semibold text-red-600'>Categories</h3>
            </div>
            <div className='flex justify-between gap-12 mt-4 '>
                <h2 className='font-poppins text-2xl font-bold tracking-wide'>Browse By Category</h2>
                <div className='flex gap-6'>
                <VscArrowSmallLeft  className='w-10 h-10 bg-gray-200 rounded-full' />
                <VscArrowSmallRight className='w-10 h-10 bg-gray-200 rounded-full' />
                </div>
                
            </div>    
        </Container>
    </div>
  )
}

export default Category