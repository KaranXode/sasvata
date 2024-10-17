"use client";
import React from "react";
import truckImg from "../../Assets/Images/truck.jpg";
import appleImg from "../../Assets/Images/apple.jpg";
import Image from "next/image";
import Heading from "../Heading/Page";
import Button from "../Button/Page";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function About() {
  return (
    <div className="p-6 lg:px-10 lg:py-20">
      <div className="flex gap-3  sectionOne">
        <div>
          <Image
            src={truckImg}
            alt="img"
            className="w-auto h-auto md:w-[276px] lg:h-[400px]"
          />
        </div>
        <div>
          <Image
            src={appleImg}
            alt="img"
            className="w-auto h-auto md:w-[444px] lg:h-[457px]"
          />
        </div>
        <div className="flex-[50%]  lg:pl-8 relative">
          <Heading title="About Sasvata" className="mb-6" />
          <p className="mb-3 text-[#808080] text-[14px] lg:text-[16px]">
            Sasvata offers the Best of Dry Food Powders. It was Rajeswari
            Pagadala and Mounika Kola who started the company in Nellore, Andhra
            Pradesh with the idea of dehydrating food powder. As a result, we
            created a seasonal business that would allow consumers to purchase
            large quantities of dried fruits & veggies powder on the market.
          </p>
          <p className="mb-3 text-[#808080] text-[14px] lg:text-[16px]">
            As of today, most of our products are sold through wholesale orders,
            but we also offer some non-wholesale purchases. In spite of the fact
            that we are a startup organization, we adhere to regulatory
            standards in terms of qualitative and quantitative values. Our
            products are of the highest quality and we provide excellent
            customer service.
          </p>
          <div className="text-center lg:text-left lg:absolute bottom-0">
            <a href="/pages/about">
              <Button
                size="large"
                variant="primary"
                label="Check More"
                icon={<FaArrowRightLong />}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
