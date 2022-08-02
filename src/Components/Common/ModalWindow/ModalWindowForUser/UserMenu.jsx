import React from "react";
import style from "./ModalWindow.module.css";

const Additionally = (props) => {
    return <div className={style.additionallyPrice}>
        <p>{props.title}</p>
        <div className={style.additionallyPriceRight}>
            <p>{props.additionallyPrice}P</p>
            <input onClick={(e) => props.ValueInc(e, props.additionallyPrice)} type="checkbox"/>
        </div>
    </div>
}

export default Additionally