import React from 'react'
import Image from 'next/image'
import bgimg  from '../.././Assets/Images/homepage-bg.jpg'
import logo  from '../.././Assets/Icons/sasvata-logo.svg'



export default function Homepage() {
  return (
    <div>
    <div className="home-wrapper relative" >
      <div className="logo-icon">
        <Image src={logo} alt="logo" width={"auto"} height={"auto"} className="relative top-[-20px]"  />
      </div>
      <div>
        <Image src={bgimg} alt="img" width={"auto"} height={"auto"} className="w-full" />
      </div>
      <div className="absolute inset-[40%_50%_0_10%] text-white">
        <h1 className="text-6xl font-semibold">Sasvata</h1>
        <p className="text-3xl">DEHYDRATED FOODS</p>
        <button className="primary-btn btn-lg mt-[76px]">Taste it</button>
      </div>
      <div>

      </div>


    </div>
    </div>
  )
}
