import style from "../ModalWindowForRegistration.module.css";

import React, {useState} from "react";
import {NavLink} from "react-router-dom";


const ModalContentSetPhone = (props) => {

    let [value, setValue] = useState("+7")

    let onChangeValue = (e) => {
        setValue(e.target.value)
    }
    let SubmitPhoneNumber = () => {
        props.setPhone(value)
    }

    return (
        <div className={style.contentForm}>
            <h1 className={style.title}>
                Ваш <br/>Телефон
            </h1>
            <div>
                <input maxLength="12" type="text"
                       className={style.inputForm}
                       value={value} onChange={onChangeValue}/>
                <div className={style.lengthValidation}>Мы сохраним ваш номер
                    телефона в тайне
                </div>
                <div className={style.buttons}>
                    <button onClick={SubmitPhoneNumber} className={style.confirmSMS}><NavLink to={"/setCode"}> Подтвердить по СМС</NavLink></button>
                    <button onClick={SubmitPhoneNumber} className={style.confirmWhatsApp}><NavLink to={"/setCode"}>или в WhatsApp</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default ModalContentSetPhone