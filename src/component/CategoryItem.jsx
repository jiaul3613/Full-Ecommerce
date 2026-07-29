import React from 'react'

const CategoryItem = ({title,children,className}) => {
  return (
    <div className='w-42.5 h-36.25 border p-6.25 text-center group hover:bg-primary hover:border-none categoryItem rounded-sm  '>
        <div className='icon '>
       {children}
        </div>
        <h3 className='group-hover:text-white mt-2'>{title}</h3>
        
    </div>
  )
}

export default CategoryItem