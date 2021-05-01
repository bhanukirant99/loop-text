import React from 'react'
import './button.css'
export const Button = ({secondary,primary,color,text,isDisable,onClickFunction}) => {
    return (
        <button className={primary} onClick={onClickFunction}>{text}</button>
    )
}
