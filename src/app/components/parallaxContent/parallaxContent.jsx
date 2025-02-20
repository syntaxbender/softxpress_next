"use client"
import React, { Children } from 'react';
import { ParallaxBanner,ParallaxProvider } from 'react-scroll-parallax';
const ParallaxContent = ({bgImage,children}) => {
  return (
      <ParallaxProvider>
    <ParallaxBanner
      layers={[{ image: bgImage, speed: -15 }]}
      //className="aspect-[2/1]"
    >
      {children}
    </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default ParallaxContent;
