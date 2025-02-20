import React from "react";
// import { Link } from 'react-router-dom';
import CustomLink from "../customLink/customLink";
import softxpressLogo from "@pub/images/softxpress_logo_white_2.png";
import { mainNavigation, flattenObj } from "../../navigation";
import styles from "./footer.module.css"; // CSS modülünü import et
import Link from "next/link";
import Image from "next/image";
import { FaCaretRight, FaEnvelope, FaInstagram, FaLinkedin, FaLinkedinIn, FaPhone } from "react-icons/fa6";
function Footer() {
  const serviceList = flattenObj(mainNavigation.hizmetler.sub);
  const servicesJSX = [];
  const countPerSide = Math.floor(serviceList.length / 3);
  let divideRemainder = serviceList.length - countPerSide * 3;
  let stepper = countPerSide;
  let sideIndicator = 0;

  for (let i = 0; i < countPerSide * 3; i++) {
    if (stepper === i) {
      sideIndicator += 1;
      stepper += countPerSide;
    }
    if (!servicesJSX[sideIndicator]) servicesJSX[sideIndicator] = [];
    servicesJSX[sideIndicator].push(
      <div className={styles.footerService}>
        <FaCaretRight />
        <CustomLink href={serviceList[i].link}>{serviceList[i].title}</CustomLink>
      </div>
    );
  }

  for (let i2 = 0; i2 < divideRemainder; i2++) {
    if (!servicesJSX[i2]) servicesJSX[i2] = [];
    let serviceElement = serviceList[serviceList.length - (i2 + 1)];
    servicesJSX[i2].push(
      <div className={styles.footerService}>
        <FaCaretRight />
        <CustomLink href={serviceElement.link}>{serviceElement.title}</CustomLink>
      </div>
    );
  }

  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className={styles.singleFooter}>
              <h2 className={styles.footerHeading}>Softxpress</h2>
              <Image src={softxpressLogo} className={styles.footerImage} alt="Softxpress Logo" />
              <div className={styles.socialLinks}>
                <div className={styles.socialLink}>
                  <FaInstagram />
                </div>
                <div className={styles.socialLink}>
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className={styles.singleFooter}>
              <h2 className={styles.footerHeading}>Hizmetler</h2>
              <div className="row">
                <div className={`${styles.footerServiceList} col-lg-4 col-md-4 col-12`}>{servicesJSX[0]}</div>
                <div className={`${styles.footerServiceList} col-lg-4 col-md-4 col-12`}>{servicesJSX[1]}</div>
                <div className={`${styles.footerServiceList} col-lg-4 col-md-4 col-12`}>{servicesJSX[2]}</div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className={styles.singleFooter}>
              <h2 className={styles.footerHeading}>İletişim</h2>
              <div className={styles.contactDetail}>
                <FaPhone />
                <span>0850 444 4444</span>
              </div>
              <div className={styles.contactDetail}>
                <FaEnvelope />
                <span>info@softxpress.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className={styles.copyrightContent}>
                <p className={styles.footerParagraph}>
                  © Copyright 2024 | Created by
                  <a href="https://www.syntaxbender.com" target="_blank" className={styles.footerLink}>
                    Syntaxbender
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
