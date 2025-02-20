import React from 'react'
import style from "./buttonSet.module.css"
const ButtonSet = ({children,className="",customWidth=null,...props}) => {
  const outputProps = {...props};
  let classes = className?.split(/\s+/).map(cls=>{return style[cls] || cls}).join(" ") ?? "";
  classes = classes+" "+style.buttonSet;
  outputProps.className = classes;
  if(customWidth){
    outputProps.style = {width:customWidth};
  }
  return (
    <button {...outputProps}>{children}</button>
  )
}

export default ButtonSet