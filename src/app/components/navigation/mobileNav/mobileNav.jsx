import { useDispatch, useSelector } from 'react-redux';
import { setLoaderStatus, setStickyStatus, isLoaderDoneState, isStickyState } from '@/app/components/header/headerSlice.js';
import { setActive, setSubsActive, setActiveIndex, isActiveState, isSubsActiveState, activeIndexState } from '@/app/components/navigation/navigationSlice';

import CustomLink from '@/app/components/customLink/customLink';
import React from 'react';
import style from "./mobileNav.module.css"
import { FaChevronRight } from 'react-icons/fa6';

const MobileNav = ({ items }) => {
    const isSticky = useSelector(isStickyState);
  
  const isActive = useSelector(isActiveState);
  const isSubsActive = useSelector(isSubsActiveState);
  const activeIndex = useSelector(activeIndexState);
  const dispatch = useDispatch();

  const handleActiveIndex = (index) => {
    dispatch(setActiveIndex(index));
  };
  const handleSubState = (index, value) => {
    dispatch(
      setSubsActive({
        index,
        value,
      })
    );
  };
  const handleState = () => {
    dispatch(setActive(!isActive));
  };

  const menuItems = [];
  for (const i in items) {
    if ('sub' in items[i] && Object.keys(items[i].sub).length>0) {
      const subItems = [];
      for (const i2 in items[i].sub) {
        const subItem = (
          <div className={style.mobileSubButton} key={`i2-${i2}`}>
            <CustomLink
              onClick={() => {
                handleState();
                handleActiveIndex(i);
              }}
              href={items[i].sub[i2].link}
            >
              {items[i].sub[i2].title}
            </CustomLink>
          </div>
        );
        subItems.push(subItem);
      }
      menuItems.push(
        <div
          key={`i-${i}`}
          onClick={() => {
            handleSubState(i, !isSubsActive[i]);
          }}
          className={`${style.mobileMenuButton} ${isSubsActive[i] ? style.mobileSubContainerActive : ''}`}
        >
          <div
            // className={activeIndex == i ? style.active : ''}
          >
            {items[i].title} {<FaChevronRight className={isSubsActive[i] ? style.iconActive : ""} />}

          </div>
        </div>
      );
      menuItems.push(<div className={`${style.mobileSubContainer} ${isSubsActive[i] ? style.mobileSubContainerActive : ''}`}>{subItems}</div>);
    } else {
      menuItems.push(
        <div key={`i-${i}`} className={style.mobileMenuButton}>
          <CustomLink
            onClick={() => {
              handleState();
              handleActiveIndex(i);
            }}
            // className={activeIndex == i ? style.active : ''}
            href={items[i].link}
          >
            {items[i].title}
          </CustomLink>
        </div>
      );
    }
  }
  return (
    <>
      <nav className={`${style.mobileNav} ${isSticky ? style.mobileNavSticky : null } ${isActive ? style.navActive : ''}`}>{menuItems}</nav>
      <div onClick={handleState} className={`${style.mobileNavTrigger} ${isSticky ? style.mobileNavTriggerSticky : null } ${isActive ? style.mobileNavTriggerActive : ''}`}>
        <div className={style.mobileNavTriggerInner}></div>
      </div>
    </>
  );
};

export default MobileNav;
