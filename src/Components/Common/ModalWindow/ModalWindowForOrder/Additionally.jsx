import React from "react";
import style from "./ModalWindow.module.css";

const Additionally = (props) => {
    return <div className={style.additionallyPrice}>
        <p>{props.title}</p>
        <div className={style.additionallyPriceRight}>
            <p>{props.additionallyPrice}P</p>
            <input id={props.id} className={style.checkbox} onClick={(e) => props.ValueInc(e, props.additionallyPrice)} type="checkbox"/>
            <label htmlFor={props.id}></label>
        </div>
    </div>
}

export default Additionally