import React from 'react';
import { setActiveIndex, activeIndexState } from '../navigationSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import styles from './mainNavigation.module.css'; // CSS modülü import edildi
import { FaAngleDown } from 'react-icons/fa6';
import CustomLink from '@/app/components/customLink/customLink';
import { setLoaderStatus, setStickyStatus, isLoaderDoneState, isStickyState } from '@/app/components/header/headerSlice.js';

const MainNavigation = ({ items }) => {
  const isSticky = useSelector(isStickyState);

  const activeIndex = useSelector(activeIndexState);
  const dispatch = useDispatch();

  const handleActiveIndex = (index) => {
    dispatch(setActiveIndex(index));
  };

  const menuItems = [];

  for (const i in items) {
    if ('sub' in items[i] && Object.keys(items[i].sub).length>0 ) {
      const subItems = [];
      for (const i2 in items[i].sub) {
        const subItem = (
          <div className={styles.mainNavSubButton} key={`i2-${i2}`}>
            <CustomLink onClick={() => handleActiveIndex(i)} href={items[i].sub[i2].link}>
              {items[i].sub[i2].title}
            </CustomLink>
          </div>
        );
        subItems.push(subItem);
      }
      menuItems.push(
        <div key={`i-${i}`} className={`${isSticky ? styles.mainNavMenuButtonSticky : null } ${styles.mainNavMenuButton} ${styles.mainNavMenuButtonHasSub}`}>
          <a className={activeIndex == i ? 'active' : ''} href="#">
            {items[i].title}
            <FaAngleDown />
          </a>
          <div className={`${styles.mainNavSubContainer} ${isSticky ? styles.mainNavSubContainerSticky : null}`}>{subItems}</div>
        </div>
      );
    } else {
      menuItems.push(
        <div key={`i-${i}`} className={`${isSticky ? styles.mainNavMenuButtonSticky : null } ${styles.mainNavMenuButton}`}>
          <CustomLink onClick={() => handleActiveIndex(i)} className={activeIndex == i ? 'active' : ''} href={items[i].link}>
            {items[i].title}
          </CustomLink>
        </div>
      );
    }
  }

  return <nav className={styles.mainNav}>{menuItems}</nav>;
};

export default MainNavigation;
