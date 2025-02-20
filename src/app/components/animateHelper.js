"use client"
import { useEffect } from 'react';
import React from 'react';
import { usePathname } from 'next/navigation';
//import { useLocation } from 'react-router-dom';

const animateHelper = () => {
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const animateObjects = document.querySelectorAll('.animate-helper');
    const animateElementIsVisibleInViewport = (el, partiallyVisible = false) => {
      const stop = el.offsetTop + el.offsetHeight - 100;
      const start = el.offsetTop - window.innerHeight;

      if (window.scrollY > start && window.scrollY < stop) return true;
      else return false;
    };
    const animateScrollEvents = () => {
      for (let i = 0; i < animateObjects.length; i++) {
        if (animateElementIsVisibleInViewport(animateObjects[i])) {
          if (animateObjects[i].classList.contains('notvisible')) animateObjects[i].classList.remove('notvisible');
        } 
        // else {
        //   animateObjects[i].classList.add('notvisible');
        // }
      }
    };
    let listenerFunc = (_event) => {
      if (!ticking) {
        ticking = true;
        animateScrollEvents();
        setTimeout(() => {
          ticking = false;
        }, 100);
      }
    };
    const animateInit = () => {
      for (let i = 0; i < animateObjects.length; i++) {
        animateObjects[i].classList.add('notvisible');
      }
      animateScrollEvents();
    };
    animateInit();
    document.addEventListener('scroll', listenerFunc);
    return () => {
      document.removeEventListener('scroll', listenerFunc);
    };
  }, [pathname]);
  return null;
};

export default animateHelper;
