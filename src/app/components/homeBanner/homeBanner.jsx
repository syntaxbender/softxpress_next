"use client"
import React from 'react';
import style from './homeBanner.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomLink from '../customLink/customLink';
import sxpSlider from '@pub/images/slider_bg.png';
import Image from 'next/image';
import ButtonSet from '../buttonSet/buttonSet';
const Slide = () => {
  return (
    <SwiperSlide>
      <div className={style.sliderPage}>
        <div className={style.sliderOverlay}>
          <Image src={sxpSlider} alt="" className={style.sliderBg} ></Image>
        </div>
        <div className={style.sliderContent}>
          <div className="container" style={{ height: '100%' }}>
            <div className="row" style={{ height: '100%' }}>
              <div className="col-lg-6" style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <h2 className="animated fadeInUp animate-helper">Softxpress ile</h2>
                  <h2 className="animated fadeIn animate-helper">
                    <span style={{ display: 'block' }}>gerçek potansiyelini</span>
                  </h2>
                  <h2 className="animated fadeInDown animate-helper">ortaya çıkar</h2>
                  <div className={style.divDec} />
                  <p>Güçlü ve çözüm odaklı hizmetlerimizle her daim yanınızdayız!</p>
                  <div className={style.buttons}>
                      <CustomLink href="/iletisim"><ButtonSet>Sizi Arayalım</ButtonSet></CustomLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};
const HomeBanner = () => {
  return (
    <div className={style.homeBanner}>
      <Swiper slidesPerView="auto">
        <Slide />
      </Swiper>
    </div>
  );
};

export default HomeBanner;
