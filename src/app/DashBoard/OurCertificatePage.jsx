import React from 'react'
import Heading from '../Components/Heading/Page';

export default function OurCertificatePage() {
  return (
    <div className='my-9'>
      <Heading title="Our Certifications" className="text-center mb-6" />
      <div className='flex gap-4 md:gap-6 flex-wrap p-6'>
        <div className='w-[377px] h-[100px] md:h-[242px] bg-[#C4C4C4] rounded-lg flex justify-center items-center'>
         <span className='text-xl md:text-3xl font-semibold' > FSSAI</span>
        </div>
        <div className='w-[377px]  h-[100px] md:h-[242px] bg-[#C4C4C4] rounded-lg flex justify-center items-center'>
         <span className=' text-xl md:text-3xl font-semibold' > ISO</span>
        </div> <div className='w-[377px]  h-[100px] md:h-[242px] bg-[#C4C4C4] rounded-lg flex justify-center items-center'>
         <span className=' text-xl md:text-3xl font-semibold' > Hallal</span>
        </div>
      </div>

    </div>
  )
}
