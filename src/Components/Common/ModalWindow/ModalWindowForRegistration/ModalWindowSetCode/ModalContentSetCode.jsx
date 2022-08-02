import style from "../ModalWindowForRegistration.module.css";
import {Field} from "redux-form";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import back_Icon from "../../../../Image/back_Icon.svg"

const ModalContentSetCode = (props) => {
    const [counter, setCounter] = React.useState(15);

    let [value, setValue] = useState()

    let onValueChange = (e) => {
        setValue(e.target.value)
        if (e.target.value.length === 4){
            props.setCode(e.target.value)
        }
    }

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className={style.contentForm}>
            <div className={style.backIcon}>
                <NavLink to={"/"}> <img src={back_Icon} alt=""/></NavLink>
            </div>
            <h1 className={style.title}>
                Введите <br/> код из SMS
            </h1>

                <div>
                    <input maxLength="4" type="text" value={value} onChange={onValueChange}
                           className={style.inputForm} placeholder={"0 0 0 0"} />
                    <div className={style.buttons}>
                        {counter === 0 ?
                            <button className={style.confirmSMS}><NavLink to={"/setCode"}>Получить новый код</NavLink></button>
                        :
                            <p className={style.lengthValidation}>Повторно получить код можно
                            через: {counter}</p>
                        }
                    </div>
                </div>

        </div>
    )
}

export default ModalContentSetCode