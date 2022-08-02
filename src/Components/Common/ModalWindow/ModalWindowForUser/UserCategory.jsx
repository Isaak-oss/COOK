import React from "react";
import style from "./ModalWindowForUsers.module.css";
import {NavLink} from "react-router-dom";

const UserCategory = (props) => {
    return <div className={style.userCategory}>
        <div className={style.categoryImage}>
            <img src={props.img} alt=""/>
        </div>
        <div className={style.categoryTitle}>
            <NavLink to={`/${props.href}`}> <p>{props.title}</p> </NavLink>
        </div>
    </div>
}

export default UserCategory