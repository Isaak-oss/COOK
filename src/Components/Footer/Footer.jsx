import React from "react";
import style from './Footer.module.css'
import Green_WhatsApp_Icon from "./../Image/Green_WhatsApp_Icon.svg"
import Phone_Icon from "./../Image/Phone_Icon.svg"
import Email_Icon from "./../Image/Email_Icon.svg"
import {FooterItem} from "./FooterItem/FooterItem";
import Footer_Menu_Icon_1 from "./../Image/Footer_Menu_1.svg"
import Footer_Menu_Icon_2 from "./../Image/Footer_Menu_2.svg"
import Footer_Menu_Icon_3 from "./../Image/Footer_Menu_3.svg"
import Footer_Rule_Icon from "./../Image/Footer_Rules_Icon.svg"
import Footer_Accept_Icon from "./../Image/Footer_Accept_Icon.svg"

const Footer = () => {
    return(
        <div className={style.Footer}>
            <div className="container">
                <div className="Row">
                    <div className={style.FooterContent}>
                        <FooterItem img={Green_WhatsApp_Icon} text={"WhatsApp"}
                                    href={"#"}/>
                        <FooterItem img={Phone_Icon} text={"+7 (945) 450-46-60"}
                                    href={"#"}/>
                        <FooterItem img={Email_Icon} text={"Написать на E-mail"}
                                    href={"#"}/>
                    </div>
                    <div className={style.FooterContent}>
                        <FooterItem img={Footer_Menu_Icon_1} text={"Меню для частных клиентов "}
                                    href={"#"}/>
                        <FooterItem img={Footer_Menu_Icon_2} text={"Меню для корпоративных заказов"}
                                    href={"#"}/>
                        <FooterItem img={Footer_Menu_Icon_3} text={"О доставке"}
                                    href={"#"}/>
                    </div>
                    <div className={style.FooterContent}>
                        <FooterItem img={Footer_Rule_Icon} text={"Политика конфиденциальности"}
                                    href={"/privacyPolicy/"}/>
                        <FooterItem img={Footer_Accept_Icon} text={"Пользовательское соглашение"}
                                    href={"/termsOfUse/"}/>

                        <div className={style.FooterItem}>© 2022 COOOK service</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer