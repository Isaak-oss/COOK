import React from "react";
import Header_logo from "./../Image/Header_Logo.png"
import Header_login_icon from "./../Image/Header_login_icon.svg"
import style from "./Header.module.css"
import WhatsApp_Icon from "./../Image/WhatsApp_Icon.svg"
import {NavLink} from "react-router-dom";
import ModalWindowForUsers from "../Common/ModalWindow/ModalWindowForUser/ModalWindowForUsers";
import {logOut} from "../../Redux/AuthReduser";


const Header = (props) => {

    const [isModal, setModal] = React.useState(false);

    return (
        <div className={style.Header}>
            <div className="container">
                <div className="Row">
                    <div className={style.Header_logo}>
                        <NavLink to={'/'}> <img src={Header_logo} alt="Header_logo"/></NavLink>
                    </div>
                    <div className={style.Header_content}>

                        <div className={style.HeaderButton}>
                            <button className={style.HeaderButtonWhatsApp} href="#">
                                <img src={WhatsApp_Icon} alt="WhatsApp_Icon"/>
                                WhatsApp
                            </button>
                        </div>

                        <div className={style.HeaderButton}>
                            <button className={style.HeaderButtonOrder} href="#">Закакзать блюдо за 430р</button>
                        </div>

                        <div className={style.HeaderButton}>
                            <button onClick={() => {
                                setModal(true)
                            }} className={style.HeaderButtonProfile} href="#">
                                <img src={Header_login_icon} alt="Header_login_icon"/>

                            </button>
                            <ModalWindowForUsers isVisible={isModal}
                                                 onClose={() => setModal(false)}
                                                 isAuth={props.isAuth}
                                                 logOut={props.logOut}
                                                 deposits={props.deposits}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header