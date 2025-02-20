"use client"
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
//import { useLocation } from 'react-router-dom';
import React from 'react'

const smoothScroll = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    const location = window.location;
    let hash;
    if (location.hash) {
      hash = location.hash.slice(1);
    } else {
      hash = null;
    }

    setTimeout(() => {
      if (hash && document.getElementById(hash)) {
        const element = document.getElementById(hash);
        const { top } = element.getBoundingClientRect();
        window.scrollTo(0, window.scrollY + top - 150);
      } else {
        window.scrollTo(0, 0);
      }
    }, 200)
  }, [pathname]);

  return null;
}

export { smoothScroll }
