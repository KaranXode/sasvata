import React from 'react'

export default function Heading(props) {
  return (
    <>
         <h3 className={`"text-3xl lg:text-4xl xl:text-[40px] font-semibold " ${props.className}`}>{props.title}</h3>
    </>
  )
}
