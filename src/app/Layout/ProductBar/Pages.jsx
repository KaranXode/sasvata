import React from 'react'

export default function ProductBar(props) {
  return (
    <div className='bg-[#D9D9D9] p-4 lg:p-6 xl:p-8'>
        <div className='text-sm lg:text-2xl xl:text-3xl '>Home - Products - <span className='font-semibold'>Dehydrated {props.title}</span></div>
    </div>
  )
}
