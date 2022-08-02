import React from "react"
import style from "./MyCard.module.css"
import back_Icon from "./../../../Image/back_Icon.svg"
import {NavLink} from "react-router-dom";

const MyCard = (props) => {
    return (
        <section className={style.MyCards}>
            <div className="container">
                <div className="relative">
                    <div className="backIcon"><NavLink to={"/"}> <img src={back_Icon} alt=""/> </NavLink></div>
                </div>
                <div className={style.title}>Привязанные карты</div>
                <div className={style.content}>
                    {props.creditCarts.map(e =>
                        <NavLink key={e.id} to={`/cards/${e.id}`}>
                            <div className={style.aside}>
                                <div className={style.asideContent}>
                                    <img src={e.paymentSystem} alt=""/>
                                    <div className={style.cardNum}>**** {e.lastNumber}</div>
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
                <NavLink to={"/cards/addCard"}><button className={style.button}> Добавить карту </button></NavLink>
            </div>
        </section>
    )
}

export default MyCard