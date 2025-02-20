"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStickyStatus, isStickyState } from './headerSlice.js';
import softxpressLogo from "@pub/images/softxpress_logo_2.png"
import styles from './header.module.css'; // CSS modülünü import et
//import scrollToTop from '../../utils/scrollToTop.jsx';
import TopNavigation from "@/app/components/navigation/topNavigation/topNavigation.jsx";
import MainNavigation from "../navigation/mainNavigation/mainNavigation.jsx";
import MobileNav from "@/app/components/navigation/mobileNav/mobileNav.jsx";
import {smoothScroll} from "../smoothScroll.js";
import animateHelper from "../animateHelper.js";
import CustomLink from "../customLink/customLink.jsx";
import { mainNavigation, topNavigation } from "@/app/navigation.js";
import React from "react";
import Image from "next/image.js";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Preloader from "../preloader/preloader.jsx";
function Header() {
  const isSticky = useSelector(isStickyState);
  smoothScroll();
  animateHelper();

  const dispatch = useDispatch();
  const handleStickyStatus = (status) => {
    dispatch(setStickyStatus(status));
  }

  useEffect(() => {
    const handleScroll = () => {
      handleStickyStatus(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Preloader/>
      <header className={`${styles.headerArea}${isSticky ? ` ${styles.headerSticky}` : ""}`}>
        <div className={`${styles.headerTop} d-none d-sm-none d-md-none d-lg-flex`}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.headerTopContainer}>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 ">
                      <div className={styles.headerTopInfo}>
                        <div className={styles.headerTopEmail}>
                          <FaEnvelope/>
                          <span>info@softxpress.com</span>
                        </div>
                        <div className={styles.headerTopPhone}>
                          <FaPhoneAlt/>
                          <span>0850 444 4444</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 hidden-sm">
                      <TopNavigation items={topNavigation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-menu">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-lg-2 col-md-3 col-12">
                <div className={styles.logoContainer}>
                  <CustomLink href="/" className={styles.logo}>
                    <Image src={softxpressLogo} alt="" />
                  </CustomLink>
                </div>
                <MobileNav items={{ ...mainNavigation, ...topNavigation }} />
              </div>
              <div className="col-xxl-9 col-lg-10 col-md-9 col-12">
                <MainNavigation items={mainNavigation} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;