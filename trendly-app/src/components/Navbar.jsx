import React, { useEffect, useState } from 'react';
import { BiSolidUserCircle } from "react-icons/bi";
import { HiMoon, HiSun } from 'react-icons/hi';


const Navbar = () => {

        const [isDark, setIsDark] = useState(() => {
            if (typeof window !== 'undefined') {
                return localStorage.getItem('theme') === 'dark' ||
                   (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
            } return false;
            });

            useEffect(() => {
                const root = window.document.documentElement;
                if (isDark) {
                    root.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    root.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                }
            }, [isDark]);

  return (
    <nav className='w-full bg-zinc-50 dark:bg-zinc-950 px-6 sticky top-0 z-30 backdrop-blur-lg shadow-lg 
       shadow-gray-200/50 dark:shadow-gray-800 flex items-center justify-between py-5'>
        <h1 className='text-3xl font-bold text-zinc-900 dark:text-zinc-100'>
            Trendly
        </h1>
        <span className='text-sm text-zinc-600 dark:text-zinc-300 font-bold  transition-all duration-300 hover:[text-shadow:0_6px_35px_rgba(0,0,0,0.45)]
          dark:hover:[text-shadow:0_6px_35px_rgba(255,255,255,0.45)] cursor-default'>
            Music & Entertainment
        </span>

        <div className='flex items-center gap-3'>
          <div className='text-gray-700 dark:text-blue-50 font-bold text-3xl flex'><BiSolidUserCircle /></div>

          <button onClick={() => setIsDark(!isDark)} 
            className='p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 
               transition-colors"aria-label="Toggle Dark Mode hover:cursor-pointer'>
            {isDark ? <HiSun className="w-6 h-6" /> : <HiMoon className="w-6 h-6" />}
           </button>
        </div>
    </nav>
  );
}

export default Navbar