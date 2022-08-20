import React from 'react';
import style from "../Orders.module.css"
import {NavLink} from "react-router-dom";
import back_Icon from "../../Image/back_Icon.svg";


const Clearance = (props) => {
    return (
        <section className={style.clearance}>
            <div className={style.orderTitle}>
                <NavLink to={"/"}> <img className={"backIcon"} src={back_Icon} alt=""/></NavLink>
                 <div>Оформление заказа</div>
            </div>
        </section>
    );
};

export default Clearance;