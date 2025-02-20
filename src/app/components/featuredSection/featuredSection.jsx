import styles from './featuredSection.module.css';
import scStyle from '../sectionComponents/sectionComponents.module.css';
import React from 'react';
import Image from 'next/image';
import bgTop from '@pub/images/bg_top.png';
import BreadCrumb from '../breadCrumb/breadCrumb';
const FeaturedSection = ({ firstWidth, secondWith, className, image, children, route, nav, ...props }) => {
  return (
    <>
      <div className={`${styles.sectionFeatured} ${className}`} {...props}>
        <BreadCrumb route={route} nav={nav} />
        <div className={styles.sectionOverlay}>
          <Image src={bgTop} className={styles.sectionOverlayImage} alt="" />
        </div>
        <div className="container">
          <div className={`row ${styles.sectionRow}`}>
            <div className="col-12">
              <div className={`${scStyle.sectionParagraph} ${styles.sectionParagraph}`}>
                <div className="row">
                  <div className={`col-lg-${firstWidth}`}>
                    <div className={scStyle.sectionParagraphContainer}>{children}</div>
                  </div>
                  <div className={`col-lg-${secondWith}`}>
                    <div className={`${styles.sectionImageContainer}`}>
                      <Image className={scStyle.image} src={image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { FeaturedSection };
