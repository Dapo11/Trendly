import React from 'react'
import { useEffect, useState } from "react";

const Hero = () => {

    const fullText ="Trendly curates trending music and entertainment news into quick, easy-to-read summaries.";

    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
       let index = 0;

       const interval = setInterval(() => {
          index += 1;
          setDisplayedText(fullText.slice(0, index));

          if (index === fullText.length) {
            clearInterval(interval);
            }
        }, 20);

       return () => clearInterval(interval);
    }, [fullText]);



  return (
    <section className="w-full px-6 py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 cursor-default dark:text-zinc-100
         transition-all duration-300 hover:-translate-y-0.5 hover:[text-shadow:0_10px_40px_rgba(0,0,0,0.5)] 
         dark:hover:[text-shadow:0_10px_40px_rgba(255,255,255,0.5)]">
          Understand today’s trends — fast.
        </h1>

        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
         {displayedText}
        </p>

      </div>
    </section>
  )
}

export default Hero