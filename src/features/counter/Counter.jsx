import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex gap-4 items-center justify-center mt-4'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button className='bg-red-500 text-white px-4 py-2 rounded-md'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}