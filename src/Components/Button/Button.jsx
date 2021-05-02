import React from "react";
import "./button.css";
export const Button = ({
  secondary,
  primary,
  color,
  text,
  isDisable,
  onClickFunction,
  btnId,
  hrefText

}) => {
  return (
    <button id={btnId} className={primary} onClick={onClickFunction}>
      
      <a href={hrefText?hrefText:"#!"}>{text}</a>
    </button>
  );
};
