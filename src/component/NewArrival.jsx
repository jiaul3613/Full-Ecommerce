import React from 'react'
import Container from './Container'
import img from '../assets/new_arrival.png'

const NewArrival = () => {
  return (
    <div className='mt-20'>
        <Container >

             <div className='flex items-center gap-4'>
                        <div className='w-5 h-10 bg-red-600 rounded-sm'></div>
                        <h3 className='font-poppins font-semibold text-red-600'>Featured</h3>
                        </div>
                        <div className='flex justify-between gap-12 mt-4 '>
                            <h2 className='font-poppins text-xl font-semibold tracking-wide'>New Arrival</h2>
                        </div>    
                        <div className='mt-20 mb-20'>
                            <img className='mx-auto' src={img} alt="" />
                        </div>

        </Container>
    </div>
  )
}

export default NewArrival