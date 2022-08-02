import React, {useState} from "react";
import style from "./ModalWindowForUsers.module.css"
import UserCategory from "./UserCategory";
import MyOrder_Icon from "./../../../Image/UserCategory_MyOrder_Icon.svg"
import Deposit_Icon from "./../../../Image/UserCategory_Deposit_Icon.svg"
import Card_Icon from "./../../../Image/UserCategory_Cards_Icon.svg"
import Location_Icon from "./../../../Image/UserCategory_location_Icon.svg"
import Profile_Icon from "./../../../Image/UserCategory_Profile_Icon.svg"
import Logout_Icon from "./../../../Image/UserCategory_Logout_Icon.svg"
import ModalWindowForRegistration from "../ModalWindowForRegistration/ModalWindowForRegistration";
import ModalWindowForRegistrationContainer from "../ModalWindowForRegistration/ModalWindowForRegistrationContainer";
import blackClose_Icon from "../../../Image/blackClose_Icon.svg"
import {logOut} from "../../../../Redux/AuthReduser";


const ModalWindowForUsers = ({isVisible = false, img, onClose, isAuth, logOut, deposits}) => {


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

    return !isVisible ? null : (
        <div className={style.modal} onClick={onClose}>
            <div className={style.modaldialog} onClick={e => e.stopPropagation()}>
                <div className={style.modalheader}>
                    <div className={style.modaltitle}><img src={img} alt=""/></div>
                    <span className={style.modalclose} onClick={onClose}>
                        <img src={blackClose_Icon} alt=""/>
                    </span>

                </div>
                <div className={style.modalbody}>
                    <div className={style.modalcontent}>
                        {isAuth
                            ?
                            <>
                                <UserCategory img={MyOrder_Icon} title={"Мои заказы"} href={"orders"}/>
                                <UserCategory img={MyOrder_Icon} title={"Корзина"} href={"cart"}/>
                                <div className={style.deposits}><UserCategory img={Deposit_Icon} title={"Депозит "} href={"deposits"}/><p className={style.depositsNumber}>{deposits}P</p></div>
                                <UserCategory img={Card_Icon} title={"Привязанные карты"} href={"cards"}/>
                                <UserCategory img={Location_Icon} title={"Мои адреса"} href={"location"}/>
                                <UserCategory img={Profile_Icon} title={"Мои данные"} href={"profile"}/>
                                <div onClick={() => logOut()}><UserCategory img={Logout_Icon} title={"Выйти"} href={""}/></div>
                                <button className={style.ButtonWhatsApp}><a href="#">Обратиться в WhatsApp</a></button>
                            </>
                            :
                            <div>

                                <ModalWindowForRegistrationContainer />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindowForUsers