"use client";

import React, { useRef } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

type Props = {
  imageSrc: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  transitionMs?: number;
  imageRight?: boolean;
  bgClass?: string;
};

export default function TwoColumnCard({
  imageSrc,
  title,
  children,
  className = "",
  imageRight = false,
  bgClass = "bg-white",
}: Props) {

  const [first_child, sec_child, third_child] = React.Children.toArray(children);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const imageBlock = (

    <div className="md:w-1/3 m-[10%] md:m-0">
      <img
        src={imageSrc}
        alt="Example"
        className="w-full h-full object-cover"
      />
    </div>

  );

  const md_flex = imageRight ? "md:flex-row-reverse" : "md:flex-row";

  return (
    
    <section
      className={`flex flex-col ${md_flex} md:gap-[10%] items-center justify-center min-h-screen font-light ${bgClass} ${className} ${poppins.className}`}
    >
      {imageBlock}

      <div ref={contentRef} className="md:w-1/3 flex flex-col">
        {title && <h2 className="text-2xl md:text-3xl">{title}</h2>}
        {first_child}
        {sec_child}
        <div className="overflow-hidden border-b border-black" />
        {third_child}
      </div>

    </section>

  );
}