"use client";
import React from 'react';

export default function WhatsAppShareButton({ title, imageSrc }) {
    const handleWhatsAppShare = () => {
        const message = `Image: ${imageSrc} \n\n Check out this product: ${title}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            className="max-w-[255px] w-full rounded-lg bg-[#D9D9D9] text-black p-2"
            onClick={handleWhatsAppShare}
        >
             Order on WhatsApp
        </button>
    );
}
