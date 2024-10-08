import React from 'react'
import ClientCard from '../Components/ClientCard/Page'
import p1 from '../Assets/Images/people2.jpg'
import Heading from '../Components/Heading/Page'

export default function Testimonials() {
  return (
    <div className="bg-[#F2F2F2] px-6 py-12">
         <div className="mb-6">
         <Heading title="Our Awesome Team" className="text-center mb-6" />
        </div>
       <div className="flex gap-5 flex-wrap justify-center">
       <ClientCard image={p1}  title="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"/>
        <ClientCard image={p1}  title="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"/>

        <ClientCard image={p1}  title="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"/>
       </div>
    </div>
  )
}
