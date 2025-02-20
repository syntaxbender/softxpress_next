import React from 'react';
import CustomLink from '@/app/components/customLink/customLink';
import style from './breadCrumb.module.css'; // CSS modülünü import et
import { FaHouse, FaChevronRight } from 'react-icons/fa6';
const BreadCrumb = ({ nav, route }) => {
  const lists = [];
  const calcRoute = routeCalculator(nav,route);
  for (let i = 0; i < calcRoute.length; i++) {
    let title = calcRoute[i].title === 'home_icon' ? <FaHouse className={style.breadcrumbHomeIcon} /> : calcRoute[i].title;

    lists.push(
      <div key={i} className={i === calcRoute.length - 1 ? style.active : ''}>
        <CustomLink href={calcRoute[i].link}>{title}</CustomLink>
      </div>
    );

    if (i !== calcRoute.length - 1) {
      lists.push(
        <div key={`sep-${i}`}>
          <FaChevronRight />
        </div>
      );
    }
  }

  return (
    <div className={style.pageHeading}>
      <div className={`${style.containerBread} container`}>
        <div className="row">
          <div className="col-lg-12">
            <div className={style.breadcrumb}>{lists}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const routeCalculator = (nav, route) => {
  const routes = [];
  routes.push({
    title: "home_icon",
    link: "/",
  })
  for (const i in route) {
    let obj = nav[route[i]]
    routes.push({
      title: obj.title,
      link: obj.link,
    });
    nav = obj.sub;
  }
  return routes;
};
export default BreadCrumb;
