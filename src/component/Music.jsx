import React from 'react'
import Container from './Container';
import img from '../assets/Music.png'

const Music = () => {
  return (
    <div>
       < Container>
       <div className='mt-20'>
        <img  className='mx-auto' src={img} alt="" />
       </div>
       </Container>
    </div>
  )
}

export default Music