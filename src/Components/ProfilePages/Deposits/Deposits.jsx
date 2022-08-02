import React from "react";
import style from "./Deposits.module.css"
import back_Icon from "./../../Image/back_Icon.svg"
import {NavLink} from "react-router-dom";

const Deposits = (props) => {
    return (
        <section className={style.deposits}>
            <div className="container">
                <div className="relative">
                    <div className="backIcon"><NavLink to={"/"}> <img src={back_Icon} alt=""/> </NavLink> </div>
                </div>
                <div className={style.title}>Депозит</div>
                <div className={style.depositsAmount}>
                    {props.deposits}Р
                    <p className={style.subtitle}>
                        на вашем счету
                    </p>
                </div>
                <div className={style.content}>
                    <div className={style.slogan}>
                        Можно пополнить еще на 1 930₽
                    </div>
                    <div className={style.aside}>
                        <div className={style.asideContent}>
                            <div className={style.asideTitle}>
                                Мы добавим
                            </div>
                            <div className={style.asideAmount}>
                                193₽
                            </div>
                            <div className={style.asideSubtitle}>
                                Помните, к каждому поплнению <br/>
                                мы добавляем от себя 10%
                            </div>
                            <div className={style.asideButton}>
                                Пополнить депозит
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Deposits