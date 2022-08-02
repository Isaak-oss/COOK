import React from "react";
import style from "./Information.module.css"
import back_Icon from "../../Image/back_Icon.svg"
import {useForm} from "react-hook-form";

const Information = (props) => {
    const {register, handleSubmit,  formState: {errors}} = useForm();
    const onSubmit = data => props.setProfileInfo(data);
    return (
        <section className={style.Information}>
            <div className={"container"}>
                <div className={style.title}>
                    <img src={back_Icon} className={"backIcon"} alt=""/>
                    <div>Мои данные</div>
                </div>
                <div className={style.content}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.submitForm}>
                            <div className={style.leftSide}>
                                <p>Ваше имя</p>
                                <input className={style.input} {...register("name", {required: false})}
                                       defaultValue={props.profileName}/>
                            </div>
                            <div className={style.rightSide}>
                                <p>Номер</p>
                                <input className={style.input} {...register("number", {required: false})}
                                       value={props.phoneNumber }/>
                            </div>
                        </div>
                        <div className={style.buttons}>
                            <button className={style.saveButton} type="submit">Сохранить</button>
                            <button className={style.deleteButton}>Удалить аккаунт</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Information