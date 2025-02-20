import React from 'react';
import style from './sectionComponents.module.css';
import Image from 'next/image';
import miniParagraph from './miniParagraph.module.css'; // CSS modülünü içe aktarın
import quaternaryStyle from './quaternary.module.css';
const ParagraphHeading = ({ children }) => {
  return <div className={style.paragraphHeading}>{children}</div>;
};

const MiniParagraphContainer = ({ firstWidth, secondWith, className = '', image, children, reverse = null, ...props }) => {
  let classes =
    className
      ?.split(/\s+/)
      .map((cls) => {
        return miniParagraph[cls] || style[cls] || cls;
      })
      .join(' ') ?? '';
  classes = classes + ' ' + miniParagraph.miniParagraphContainer;
  return (
    <div className={` container ${classes}`}>
      <div className={`row ${reverse ? style.reverse : ''}`}>
        <div className={`col-lg-${firstWidth}`}>
          <div className={`${style.sectionImageContainer} ${miniParagraph.miniParagraphImageContainer}`}>
            <Image className={style.image} src={image} alt="" />
          </div>
        </div>
        <div className={`col-lg-${secondWith}`}>
          <div className={miniParagraph.miniParagraphText}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const MiniParagraph = ({ children }) => {
  return <div className={miniParagraph.miniParagraph}>{children}</div>;
};

const SectionHeading = ({ className = '', children }) => {
  let classes =
    className
      ?.split(/\s+/)
      .map((cls) => {
        return style[cls] || cls;
      })
      .join(' ') ?? '';
  classes = classes + ' ' + style.sectionHeading;
  return <div className={classes}>{children}</div>;
};
const SectionParagraph = ({ firstWidth, secondWith, className, image, children, reverse = null, ...props }) => {
  let classes =
    className
      ?.split(/\s+/)
      .map((cls) => {
        return style[cls] || cls;
      })
      .join(' ') ?? '';
  classes = classes + ' ' + style.sectionParagraph;

  return (
    <div className={`${classes}`} {...props}>
      <div className="container">
        <div className={`row ${style.betterRow} ${reverse ? style.reverse : ''}`}>
          <div className={`col-lg-${firstWidth}`}>
            <div className={style.sectionImageContainer}>
              <Image className={style.image} src={image} alt="" />
            </div>
          </div>
          <div className={`col-lg-${secondWith}`}>
            <div className={style.sectionParagraphContainer}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SectionQuaternary = ({ firstWidth, secondWith, className = '', quaternary, children, reverse = null, ...props }) => {
  let classes =
    className
      ?.split(/\s+/)
      .map((cls) => {
        return quaternaryStyle[cls] || style[cls] || cls;
      })
      .join(' ') ?? '';
  classes = classes + ' ' + style.sectionParagraph;

  return (
    <div className={`${classes}`} {...props}>
      <div className="container">
        <div className={`row ${quaternaryStyle.quaternaryRow} ${style.betterRow} ${reverse ? style.reverse : ''}`}>
          <div className={`col-lg-${firstWidth}`}>
            <div className={quaternaryStyle.paragraphQuaternaryCard}>
              <div>
                {quaternary[0]}
                {quaternary[1]}
              </div>
              <div>
                {quaternary[2]}
                {quaternary[3]}
              </div>
            </div>
          </div>
          <div className={`col-lg-${secondWith}`}>
            <div className={style.sectionParagraphContainer}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const QuaternaryItem = ({ icon, children }) => {
  return (
    <div className={quaternaryStyle.contentArea}>
      <div className={quaternaryStyle.contentImage}>
        <Image src={icon} alt="" />
      </div>
      {children}
    </div>
  );
};

export { SectionParagraph, ParagraphHeading, SectionHeading, MiniParagraph, MiniParagraphContainer, SectionQuaternary, QuaternaryItem };
