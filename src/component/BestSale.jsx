import React from 'react'
import Container from './Container'
import Card from './Card'
import img1 from '../assets/Frame605.png'




const BestSale = () => {
  return (
    <div className='mt-20'>
        <Container>
            <div className='flex items-center gap-4'>
            <div className='w-5 h-10 bg-red-600 rounded-sm'></div>
            <h3 className='font-poppins font-semibold text-red-600'>This Month</h3>
            </div>
            <div className='flex justify-between gap-12 mt-4 '>
            <h2 className='font-poppins text-2xl font-bold tracking-wide'>Best Selling Products</h2>
            <button className='bg-[#DB4444] text-white px-6 py-2 rounded-md '>View All</button>
            </div>

            <div className='flex gap-6'>
            <Card  img1={img1} name='The north coat' np={260} op={350}  rating={5} reviewCount={65} />
            <Card  img1={img1} name='The north coat' np={260} op={350}  rating={5} reviewCount={65} />
            <Card  img1={img1} name='The north coat' np={260} op={350}  rating={5} reviewCount={65} />
            <Card  img1={img1} name='The north coat' np={260} op={350}  rating={5} reviewCount={65} />
            <Card  img1={img1} name='The north coat' np={260} op={350}  rating={5} reviewCount={65} />
            </div>
        
        </Container>
    </div>
  )
}

export default BestSale

