"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Index() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
    <h1 className='text-6xl  tan-nimbus font-semibold text-center  '>My Hobbies</h1>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return(
    <div>
      
    </div>
  )
};

const data = [
  {
    category: "Reading Books",
    title: "I enjoy reading self-help books. These books offer valuable insights and strategies for personal development, motivation, and improving various aspects of life.",
    src: "/library.jpeg",
    content: <DummyContent />,
  },
  
  {
    category: "Programming",
    title: "Drug discovery addict: Labs and molecules!",
    src: "/programming.jpeg",
    content: <DummyContent />,
  },

  {
    category: "Research Projects",
    title: "Powered by coffee, working 24/7 research.",
    src: "/lab.jpeg",
    content: <DummyContent />,
  },
  
];
