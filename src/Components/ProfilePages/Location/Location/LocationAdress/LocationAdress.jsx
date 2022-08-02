import React from "react";
import style from "../Location.module.css"
import {NavLink} from "react-router-dom";
import back_Icon from "../../../../Image/back_Icon.svg";

import {useForm} from "react-hook-form";


const LocationAdress = (props) => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        props.updateLocationAdress(data, Number(props.locationAdress[0].id));
    }


    return (
        <section className={style.card}>
            <div className="container">
                <div className="relative">
                    <div className="backIcon"><NavLink to={"/location"}> <img src={back_Icon} alt=""/> </NavLink></div>
                </div>
                <div className={style.title}>{props.locationAdress[0].addressName}</div>
                <div className={style.cardContent}>
                    <div className={style.inputGroup}>
                        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                            <p className={style.subtitle}>Название адреса</p>
                            <input className={style.inputForm}
                                   defaultValue={props.locationAdress[0].addressName} {...register("addressName")} />
                            <p className={style.subtitle}>Ваша башня</p>
                            <input className={style.inputForm}
                                   defaultValue={props.locationAdress[0].tower} {...register("tower", {required: true})} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className={style.row}>
                                <div>
                                    <p className={style.subtitle}>Вход</p>
                                    <input className={style.inputForm}
                                           defaultValue={props.locationAdress[0].entry} {...register("entry", {required: true})} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <p style={{width: 75}}></p>
                                <div>
                                    <p className={style.subtitle}>Этаж</p>
                                    <input className={style.inputForm}
                                           defaultValue={props.locationAdress[0].housefloor} {...register("housefloor", {required: true})} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <p style={{width: 75}}></p>
                                <div>
                                    <p className={style.subtitle}>Квартира, офис</p>
                                    <input className={style.inputForm}
                                           defaultValue={props.locationAdress[0].apartment} {...register("apartment", {required: true})} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <p style={{width: 75}}></p>
                                <div>
                                    <p className={style.subtitle}>Для охраны</p>
                                    <input className={style.inputForm}
                                           defaultValue={props.locationAdress[0].security} {...register("security", {required: true})} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>
                            <p className={style.subtitle}>Комментарий (если есть)</p>
                            <textarea className={style.inputForm}  style={{minHeight: 200}}
                                      defaultValue={props.locationAdress[0].comment} {...register("comment", {required: false})} />
                            <button className={style.button} type="submit"> Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationAdress