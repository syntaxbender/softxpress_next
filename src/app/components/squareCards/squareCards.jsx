import style from './squareCards.module.css';
import CustomLink from '@/app/components/customLink/customLink';
import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '../sectionComponents/sectionComponents';
import { FaAngleRight } from 'react-icons/fa6';
const SquareCard = ({ link, img, title }) => {
  return (
    <div className="col-lg-4 col-xxl-3 col-12 p-2 animated fadeInDown animate-helper">
      <CustomLink href={link}>
        <div className={style.cardContainer}>
          <div className={style.cardContent}>
            <Image src={img} alt={title} className={style.cardImage}></Image>
            <div className={style.contentArea}>
              <div className={style.contentText}>
                <span className={style.contentHeader}>{title}</span>
                <FaAngleRight className={`fa fa-angle-right ${style.cardIcon}`}/>
              </div>
            </div>
          </div>
        </div>
      </CustomLink>
    </div>
  );
};
const SquareCardContainer = ({ serviceList,header }) => {
  const serviceCards = [];
  for (let i in serviceList) {
    serviceCards.push(<SquareCard link={serviceList[i].link} img={serviceList[i].img} title={serviceList[i].title} />);
  }
  return (
    <section className={style.cardSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionHeading>
              {header}
            </SectionHeading>
          </div>
          <div className="col-12">
            <div className="row">{serviceCards}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SquareCard, SquareCardContainer };
