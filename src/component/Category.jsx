import React from 'react'
import Container from './Container';
import { VscArrowSmallLeft } from "react-icons/vsc";
import { VscArrowSmallRight } from "react-icons/vsc";
import CategoryItem from './CategoryItem';
import { CiHeadphones } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { MdVideogameAsset } from "react-icons/md";

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
            <div className='mt-15 flex justify-between'>
                <CategoryItem title='Phone'>
                    <svg className='mx-auto' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_12204_1056)">
                    <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25.6666 7H31.1354" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28 44.0052V44.0305" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="15.1666" y1="39.8334" x2="40.8333" y2="39.8334" stroke="black" stroke-width="2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_12204_1056">
                    <rect width="56" height="56" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
               </CategoryItem>

                <CategoryItem title='Computer'>
                    <svg className='mx-auto' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_12204_179)">
                    <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.3334 46.6666H39.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 37.3334V46.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35 37.3334V46.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 32H48" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_12204_179">
                    <rect width="56" height="56" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </CategoryItem>

                <CategoryItem title='SmartWatch' >
                <BsSmartwatch className='w-14 h-14 mx-auto hover:text-white' />
                </CategoryItem>
                <CategoryItem title='Camera' >
                <svg className='mx-auto' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_12204_1620)">
                    <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_12204_1620">
                    <rect width="56" height="56" fill="black"/>
                    </clipPath>
                    </defs>
                    </svg>
                </CategoryItem>
                <CategoryItem title='HeadPhones' >
                <CiHeadphones className='w-14 h-14 mx-auto hover:text-white' />
                </CategoryItem>
                <CategoryItem title='Gaming '  >
                    <MdVideogameAsset className='w-14 h-14 mx-auto hover:text-white ' />
                </CategoryItem >
            </div>
        </Container>
    </div>
  )
}

export default Category