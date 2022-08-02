import React from "react";
import style from "../Footer.module.css";
import Green_WhatsApp_Icon from "../../Image/Green_WhatsApp_Icon.svg";
import {NavLink} from "react-router-dom";

export const FooterItem = (props) => {
    return(
        <div className={style.FooterItem}>
            <img src={props.img} alt="WhatsApp_Icon"/>
            <NavLink to={props.href}>{props.text}</NavLink>
        </div>
    )
}