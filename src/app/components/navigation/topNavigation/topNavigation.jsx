import React from 'react';
import styles from './topNavigation.module.css';
import CustomLink from '@/app/components/customLink/customLink';
import { FaAngleDown } from 'react-icons/fa6';

const TopNavigation = ({ items }) => {
  const topNavigation = [];

  for (const i in items) {
    if ('sub' in items[i] && Object.keys(items[i].sub).length > 0) {
      const subItems = [];
      for (const i2 in items[i].sub) {
        subItems.push(
          <CustomLink className={styles.topNavigationSubLink} key={`i-${i2}`} href={items[i].sub[i2].link}>
            {items[i].sub[i2].title}
          </CustomLink>
        );
      }
      topNavigation.push(
        <div key={`i-${i}`} className={`${styles.topNavigationButton} ${styles.topNavigationButtonHasSub}`}>
          <a className={styles.topNavigationLink} href="#">
            {items[i].title}<FaAngleDown/>
          </a>
          <div className={styles.topNavigationSubMenu}>{subItems}</div>
        </div>
      );
    } else {
      topNavigation.push(
        <div className={styles.topNavigationButton} key={`i-${i}`}>
          <CustomLink className={styles.topNavigationLink} href={items[i].link}>
            {items[i].title}
          </CustomLink>
        </div>
      );
    }
  }

  return <div className={styles.topNavigation}>{topNavigation}</div>;
};

export default TopNavigation;
