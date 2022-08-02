import React from "react";
import style from "../MyCard.module.css"
import {NavLink} from "react-router-dom";
import back_Icon from "../../../../Image/back_Icon.svg";


const Card = ({deleteCard, creditCard}) => {

    return (
        <section className={style.card}>
            <div className="container">
                <div className="relative">
                    <div className="backIcon"><NavLink to={"/cards"}> <img src={back_Icon} alt=""/> </NavLink></div>
                </div>
                <div className={style.title}>Выбраная карта</div>
                <div className={style.cardContent}>
                    <div className={style.inputGroup}>
                        <div>
                            <p className={style.subtitle}>Номер карты</p>
                            <input className={style.inputFormLong} type="text" value={creditCard[0].cardNumber}/>
                        </div>
                        <div>
                            <p className={style.subtitle}>Действительна до</p>
                            <input className={style.inputFormShort} type="text" value={creditCard[0].cardDate}/>
                        </div>
                    </div>
                    <div className={style.inputGroup}>
                        <div>
                            <p className={style.subtitle}>Имя держателя карты</p>
                            <input className={style.inputFormLong} type="text" value={creditCard[0].userCardName}/>
                        </div>
                        <div>
                            <p className={style.subtitle}>CVC2/CVV2</p>
                            <input className={style.inputFormShort} type="password" value={creditCard[0].cardCVC}/>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={deleteCard} className={style.button}>Удалить карту</button>
                </div>
            </div>
        </section>
    )
}

export default Card