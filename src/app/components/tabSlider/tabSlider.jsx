"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./slickStyle.css";
import style from "./tabSlider.module.css"
import Image from 'next/image';
function TabSlider({ tabs, contents }) {
  const tabsJSX = [];
  const contentsJSX = [];
  // const SliderComponent = Slider.default ? Slider.default : Slider

  for (const i in tabs) {
    tabsJSX.push(
      <div key={1} className="gradient-border"><span>{tabs[i]}</span></div>
    )
  }
  const settings = {
    customPaging: function (i) {
      return (
        tabsJSX[i]
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  for (const i2 in contents) {
    contentsJSX.push(
      <div>
        <div className="row">
          <div className={`col-lg-5 ${style.leftImage}`}>
            <Image alt='' src={contents[i2].image} />
          </div>
          <div className={`col-lg-7 ${style.rightContent}`}>
            <div>
              {contents[i2].content}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={style.tabsContainer}>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Slider {...settings}>
              {contentsJSX}
            </Slider>
          </div>
      </div>
    </div>
  );
}

export default TabSlider;