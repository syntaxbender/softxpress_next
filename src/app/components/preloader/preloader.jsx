'use client';
import React, { useEffect } from 'react';
import jsPreloader from './jsPreloader.module.css';
import { setLoaderStatus, isLoaderDone } from './preloaderSlice';
import { useSelector, useDispatch } from 'react-redux';
import style from './jsPreloader.module.css';
import { pageState, setPage } from '@/app/components/customLink/customLinkSlice';
import { usePathname } from 'next/navigation';
const Preloader = () => {
  const page = useSelector(pageState);
  const pathname = usePathname();
  const loaderDone = useSelector(isLoaderDone);
  const dispatch = useDispatch();
  const handleLoaderStatus = (status) => {
    dispatch(setLoaderStatus(status));
  };
    const handleIndex = (status) => {
      dispatch(setPage(status));
    }
  useEffect(() => {
    handleIndex(pathname);
    setTimeout(() => {

      handleLoaderStatus(true);
    }, 200);
  }, [pathname]);
  return (
    <div className={`${style.preloader} ${loaderDone ? style.preloaderDeactivate : ''}`}>
      <div className={style.loader}>
        <div className={style.loaderOutter}></div>
        <div className={style.loaderInner}></div>
      </div>
    </div>
  );
};

export default Preloader;
