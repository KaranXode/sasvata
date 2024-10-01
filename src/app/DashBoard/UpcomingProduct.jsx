import React from 'react'
import ProductCard from '../Components/ProductCard/Page'
import apple from '../Assets/Images/apple.jpg'
import veg from '../Assets/Images/veg1.png'
import Heading from '../Components/Heading/Page';

export default function UpcomingProduct() {
  const fruitImages = [
    { title: "Dehydrated Dehydrated Apple ", url: apple },
    { title: "Dehydrated Dehydrated Banana", url: veg },
    { title: "Dehydrated Dehydrated Orange", url: apple },
    { title: "Dehydrated Dehydrated Grapes", url: veg },
    { title: "Dehydrated Dehydrated Pineapple", url: apple }
  ];
  return (
    <>
      <div className="px-6 py-10 bg-[#EAEAEA]">
        <Heading title="Up Coming Products" className="text-center mb-6"/>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {
            fruitImages.map((item) => (
              <ProductCard key={item.title} title={item.title} imageUrl={item.url} />
            ))
          }


        </div>
      </div>

    </>
  )
}
