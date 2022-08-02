import React, {useState} from "react";
import style from "./ModalWindowForRegistration.module.css"

import blackClose_Icon from "../../../Image/blackClose_Icon.svg"
import ReactDOM from 'react-dom';
import {NavLink} from "react-router-dom";
import ModalContentSetPhone from "./ModalContentSetPhone/ModalContentSetPhone";
import {RoutingRegistration} from "../../../Routing/Routing";

const ModalWindowForRegistration = ({isVisible = false, onClose, handleSubmit}) => {

    //if (!isVisible) return null

    const keydownHandler = ({key}) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : ReactDOM.createPortal(
        <div className={style.modal} onClick={onClose}>
            <div className={style.modaldialog} onClick={e => e.stopPropagation()}>
                <div className={style.modalheader}>
                    <span className={style.modalclose} onClick={onClose}>
                        <img src={blackClose_Icon} alt=""/>
                    </span>

                </div>
                <div className={style.modalbody}>
                    <div className={style.modalcontent}>
                        <RoutingRegistration handleSubmit={handleSubmit}/>
                        <div className={style.footer}>
                            Вводя номер телефона, вы автоматически
                            принимаете условия <NavLink to={"/termsOfUse/"}> Пользовательского соглашения </NavLink>
                            и соглашаетесь с нашей <NavLink to={"/privacyPolicy/"} > Политикой конфиденциальности</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>,
        document.getElementById("registration")
    );
};

export default ModalWindowForRegistration