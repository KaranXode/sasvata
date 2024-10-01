import React from 'react'
import Homepage from '../Components/Homepage/Page'
import TextVideo from '../Components/TextVideo/Page'
import Teamcard from '../Components/Teamcard/Page'
import SocialMedia from '../Components/Social-insta/Page'
import Support from '../Components/Support/Page'
import About from '../Components/About/Page'
import ProductPage from '../DashBoard/ProductPage'
import SectionOne from '../DashBoard/SectionOne'
import UpcomingProduct from '../DashBoard/UpcomingProduct'
import Testimonials from '../DashBoard/Testimonials'

export default function Layout() {
  return (
    <div>
    <Homepage/>
    <Support/>
    <About/>
    <ProductPage/>
    <SectionOne/>
    <TextVideo/>
  
    <UpcomingProduct/>
    <Teamcard/>
  
        <SocialMedia/>
        <Testimonials/>
    </div>
  )
}
