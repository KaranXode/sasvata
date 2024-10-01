import React from 'react'
import Navbar from '../Components/Navbar/Page'
import Homepage from '../Components/Homepage/Page'
import TextVideo from '../Components/TextVideo/Page'
import Teamcard from '../Components/Teamcard/Page'
import SocialMedia from '../Components/Social-insta/Page'
import Support from '../Components/Support/Page'
import About from '../Components/About/Page'
import ProductCard from '../Components/ProductCard/Page'
import ProductPage from '../DashBoard/ProductPage'
import SectionOne from '../DashBoard/SectionOne'
import UpcomingProduct from '../DashBoard/UpcomingProduct'
import Responsive from '../Components/Slider'
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
        {/* <Navbar/> */}
        <SocialMedia/>
        <Testimonials/>
    </div>
  )
}
