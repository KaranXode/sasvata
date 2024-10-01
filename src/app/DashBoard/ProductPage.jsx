import React from 'react'
import ProductCard from '../Components/ProductCard/Page'
import apple from '../Assets/Images/apple.jpg'
import veg from '../Assets/Images/veg1.png'




export default function ProductPage() {
  const fruitImages = [
    { title: "Dehydrated Dehydrated Apple ", url: apple },
    { title: " Dehydrated Banana", url: veg },
    { title: "Dehydrated Dehydrated Orange", url: apple },
    { title: "Dehydrated Dehydrated Grapes", url: veg },
    { title: "Dehydrated Dehydrated Pineapple", url: apple }
  ];
  
  return (


    <div className="px-6 py-10 bg-[#EAEAEA]">
      <h2 className="text-[40px] font-bold text-center">Our Products</h2>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {
          fruitImages.map((item) => (
            <ProductCard key={item.title} title={item.title} imageUrl={item.url} />
          ))
        }

      </div>
      <div className="text-center my-8">
        <button className="primary-btn">Check more</button>
      </div>
    </div>

  )
}
