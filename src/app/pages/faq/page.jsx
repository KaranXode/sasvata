"use client";
import Navbar from "@/app/Components/Navbar/Page";

import { useState } from "react";

const FaqPage = () => {
  const faqData = [
    {
      question: "What are the best seasonal vegetables to buy?",
      answer:
        "Seasonal vegetables vary by region, but common options include squash in the fall, asparagus in the spring, and tomatoes in the summer.",
    },
    {
      question: "How should I store my vegetables to keep them fresh?",
      answer:
        "Most vegetables should be stored in a cool, dry place or in the refrigerator. Leafy greens should be stored in a damp paper towel and plastic bag.",
    },
    {
      question:
        "What’s the difference between organic and non-organic vegetables?",
      answer:
        "Organic vegetables are grown without synthetic pesticides and fertilizers, while non-organic vegetables may use these substances.",
    },
    {
      question: "How can I tell if a vegetable is ripe?",
      answer:
        "Ripe vegetables often have vibrant color and a pleasant aroma. For example, ripe tomatoes are deep red, and ripe avocados yield slightly when pressed.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#D9D9D9]">
        <Navbar />
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8 px-6">
          <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Food & Vegetable FAQs
            </h1>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex justify-between items-center text-gray-700 font-medium text-lg focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`ml-2 transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    className={`mt-2 text-gray-600 transition-max-height duration-300 overflow-hidden ${
                      openIndex === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    {openIndex === index && <p>{faq.answer}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
