import React from "react";
import style from "../ModalWindow/ModalWindowForRegistration/ModalWindowForRegistration.module.css"

export const Required = (value) => {
    if (value) return undefined
    return "filed are required"
}

export const currentlenght = (CurrentLenght = 1) => {
        if (CurrentLenght.length <= 11) {
            return <div className={style.lengthValidation}>Мы сохраним ваш номер
            телефона в тайне</div>
        } if (CurrentLenght.length === undefined){
        return <div className={style.lengthValidation}>Мы сохраним ваш номер
            телефона в тайне</div>
        }
        return undefined
}
