import React from "react"
import style from "./Location.module.css"
import back_Icon from "./../../../Image/back_Icon.svg"
import {NavLink} from "react-router-dom";

const Location = (props) => {
    return (
        <section className={style.MyCards}>
            <div className="container">
                <div className="relative">
                    <div className="backIcon"><NavLink to={"/"}> <img src={back_Icon} alt=""/> </NavLink></div>
                </div>
                <div className={style.title}>Привязанные карты</div>
                <div className={style.content}>
                    {props.location.map(e =>
                        <NavLink key={e.id} to={`/location/${e.id}`}>
                            <div className={style.aside}>
                                <div className={style.asideContent}>
                                    <div className={style.asideTitle}>{e.addressName}</div>
                                    <div className={style.subtitles}>
                                        <div className={style.tower}>{e.tower}, кв.офис {e.apartment}</div>
                                        <div className={style.floor}>этаж {e.floor}</div>
                                        <div className={style.security}>Для охраны {e.security}</div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
                <button className={style.button}><NavLink to={"/addCard"}> Добавить карту </NavLink></button>
            </div>
        </section>
    )
}

export default Location