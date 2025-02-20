"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import style from "./accordion.module.css";
import { setActiveIndex, getActiveIndexState } from "./accordionSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

const Accordion = ({img, headers, contents}) => {
  headers.map((header,map)=>{console.log(header,map)})
  console.log(headers)
  const activeIndex = useSelector(getActiveIndexState);
  const refs = [];
  const setRefs = (el, index) => {
    refs[index] = el;
  };
  const dispatch = useDispatch();
  const handleActiveIndex = (index) => {
    dispatch(setActiveIndex(index));
  };
  useEffect(() => {
    refs.map((ref, index) => {
      if (ref) {
        if (activeIndex === index) {
          ref.style.height = ref.scrollHeight + 'px';
        } else {
          ref.style.height = '0px';
        }
      }
    });
  }, [activeIndex]);
  return (
    <div className={style.accordionSection}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className={style.accordionImageContainer}>
              <Image alt="" src={img} />
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className={style.accordionContainer}>
              {headers.map((header, index) => (
                <div className={`${style.accordionContentContainer} 
                ${/*activeIndex == index ? style.active : ""*/''}
                `}>
                  <h4
                    onClick={() => {
                      handleActiveIndex(index);
                    }}
                    className={style.accordionHeader}>
                    {header}
                    {/* {activeIndex == index ? <FaChevronDown /> : <FaChevronRight />} */}
                    {<FaChevronRight className={activeIndex == index ? style.iconActive : ""} />}
                  </h4>
                  <div ref={(el) => setRefs(el, index)} className={style.accordionContent}>{contents[index]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
