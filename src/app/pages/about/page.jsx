import BannerNav from '@/app/Components/Homepage/BannerNav'
import Navbar from '@/app/Components/Navbar/Page'
import TwoCard from '@/app/Layout/AboutPage/TwoCard'
import React from 'react'
import p1 from'../../Assets/Images/truck.jpg'
import p2 from'../../Assets/Images/people2.jpg'
import Teamcard from '@/app/Components/Teamcard/Page'


export default function aboutPage() {
  return (
    <div className="bg-[#D9D9D9]">
      <BannerNav/>
     
     <div className="flex ">
     <TwoCard smImgurl={p2} lgImgurl={p1} className="flex-row-reverse"/>
     </div>
      <div>
      <TwoCard smImgurl={p2} lgImgurl={p1}/>
      </div>
      <Teamcard/>

    </div>
  )
}
