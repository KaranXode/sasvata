
import React from 'react'
import Image from 'next/image'
import deliveryIcon from '../../Assets/Icons/delivery-truck.svg'
import headphoneIcon from '../../Assets/Icons/headphones.svg'
import packageIcon from '../../Assets/Icons/package.svg'
import shoppingIcon from '../../Assets/Icons/shopping-bag.svg'


export default function Support() {
    return (
        <div>
            <ul className="flex gap-4 p-10 justify-between shadow-[0px_8px_40px_0px_#00260314] flex-wrap bg-white">
                <li className="flex items-center gap-4 min-w-[260px]">
                    <div>
                        <Image src={deliveryIcon} alt="icon" className="w-10 h-10" />
                    </div>
                    <div>
                        <h4 className="font-semibold">Free Shipping</h4>
                        <p className="text-[#999999] text-[14px]">Free shipping on all your order</p>
                    </div>
                </li>
                <li className="flex items-center gap-4  min-w-[260px]">
                    <div>
                        <Image src={headphoneIcon} alt="icon" className="w-10 h-10" />
                    </div>
                    <div>
                        <h4 className="font-semibold">Customer Support 24/7</h4>
                        <p className="text-[#999999] text-[14px]">Instant access to Support</p>
                    </div>
                </li> <li className="flex items-center gap-4  min-w-[260px]">
                    <div>
                        <Image src={packageIcon} alt="icon" className="w-10 h-10" />
                    </div>
                    <div>
                        <h4 className="font-semibold">100% Secure Payment</h4>
                        <p className="text-[#999999] text-[14px]">We ensure your money is save</p>
                    </div>
                </li> <li className="flex items-center gap-4  min-w-[260px]">
                    <div>
                        <Image src={shoppingIcon} alt="icon" className="w-10 h-10" />
                    </div>
                    <div>
                        <h4 className="font-semibold">Money-Back Guarantee</h4>
                        <p className="text-[#999999] text-[14px]">30 Days Money-Back Guarantee</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
