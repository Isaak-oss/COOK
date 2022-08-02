import React, {useState} from "react";
import style from "../Orders.module.css"
import back_Icon from "./../../Image/back_Icon.svg"


const OrderItem = (props) => {


    return (
        <div className={style.OrderItems}>

            <div className={style.orderItem}>
                <div className={style.titleAndImg}>
                    <div className={style.img}><img src={props.img} alt=""/></div>
                    <div className={style.title}>
                        {props.ItemTitle}
                    </div>
                </div>
                <div className={style.priceAndCount}>
                    <div className={style.count}>
                        <button className={style.button} onClick={() => {
                            props.ValueInc(props.id)
                        }}>
                            +
                        </button>
                        {props.count}
                        <button className={style.button} onClick={() => {
                            props.ValueDic(props.id)
                        }}>-</button>
                    </div>
                    <div className={style.price}>
                        {props.totalPrice} р
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OrderItem