import Navbar from '@/app/Components/Navbar/Page'
import Image from 'next/image'
import React from 'react'
import WhatsAppShareButton from './../../Components/WhatsAppShare/Page';
import ProductPage from '@/app/DashBoard/ProductPage';

// Use getServerSideProps to fetch data or render based on parameters
async function getServerSideProps({ params, query }) {
  const title = params.title; // Access title from the URL
  const imageUrl = query.url; // Access URL from query parameters

  // You can also perform data fetching here if needed
  return {
    props: {
      title,
      imageUrl: decodeURIComponent(imageUrl) || '', // Decode the URL to get the actual string
    },
  };
}

export default function ProductInfo( {params}) {

    
    const { productid,image } = params;
    

  return (
   <>
   <Navbar navStyle="text-black"/>
    
    <div className='p-8 flex gap-8 flex-wrap'>
        
    <div className='bg-[#C4C4C4] max-w-[788px] h-[80vh] w-full flex-[1_1_50%] '>
      <Image src={image} alt="Product" width={200} height={200}/>
    </div>
    <div className='p-6 flex flex-col gap-8'>
        <h2 className='text-5xl font-semibold'> {params.productid}</h2>
        <p  className='text-5xl'>$0.00 <span>18% OFF</span></p>
        <p className='text-[#8D8A8A] text-4xl'>inclusive of all taxes </p>
        <p  className='text-[#8D8A8A] text-4xl'>Size</p>
        <p  className='text-[#8D8A8A] text-4xl'>1Kg    10Kgs    20Kgs and more</p>
        <WhatsAppShareButton imageSrc={''} title={''}/>
    </div>
    </div>
    <ProductPage/>
   </>
  )



}
