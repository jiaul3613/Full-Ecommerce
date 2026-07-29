import React from 'react'
import Container from './Container';
import { VscArrowSmallLeft } from "react-icons/vsc";
import { VscArrowSmallRight } from "react-icons/vsc";
import img1 from '../assets/Frame604.png'
import Card from './Card';

const Product = () => {
  return (
    <div className='mt-20'>
        <Container>
            <div className='flex items-center gap-4'>
            <div className='w-5 h-10 bg-red-600 rounded-sm'></div>
            <h3 className='font-poppins font-semibold text-red-600'>Our Products</h3>
            </div>
            <div className='flex justify-between gap-12 mt-4 '>
                <h2 className='font-poppins text-2xl font-bold tracking-wide'>Explore Our Products</h2>
                <div className='flex gap-6'>
                <VscArrowSmallLeft  className='w-10 h-10 bg-gray-200 rounded-full' />
                <VscArrowSmallRight className='w-10 h-10 bg-gray-200 rounded-full' />
                </div> 
            </div> 

            <div className='grid grid-cols-4 gap-6'>
            <Card  img1={img1} name='The north coat' np={260} op={350}  rating={5} reviewCount={65} />
            <Card  img1={img1} name='The north coat' np={260} op={350}  rating={5} reviewCount={65} />
            <Card  img1={img1} name='The north coat' np={260} op={350}  rating={5} reviewCount={65} />
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

export default Product