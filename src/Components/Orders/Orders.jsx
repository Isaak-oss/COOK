import React, {useEffect, useState} from "react";
import style from "./Orders.module.css"
import OrderItem from "./OrderItem/OrderItem";
import back_Icon from "../Image/back_Icon.svg";
import {NavLink} from "react-router-dom";


const Orders = (props) => {
    let [order, setOrder] = useState(props.cart)
    let [total, setTotal] = useState({
        price: order.reduce((prev, curr) => { return prev + curr.totalPrice}, 0)
    })
    useEffect(() => {
        setTotal({price: order.reduce((prev, curr) => { return prev + curr.totalPrice}, 0)})
    }, [order])

    let ValueInc = (id) => {
        setOrder(order => {
            return order.map(u => {
                if (u.id === id) {
                    return {
                        ...u, count: ++u.count,
                        totalPrice: u.totalPrice + u.ItemPrice
                    }
                }
                return u
            })
        })
    }

    let ValueDic = (id) => {
        setOrder(order => {
            return order.map(u => {
                if (u.id === id) {
                    if (u.count > 1) {
                        return {
                            ...u, count: --u.count,
                            totalPrice: u.totalPrice - u.ItemPrice
                        }
                    }
                }
                return u
            })
        })
    }




    let ordersLenght = props.cart.length
    return (
        <section className={style.Order}>
            <div className={"container"}>
                <div className={style.orderTitle}>
                    <NavLink to={"/"}> <img className={"backIcon"} src={back_Icon} alt=""/></NavLink>
                    {ordersLenght === 0 ? <p>Пусто</p> : <div>{ordersLenght} блюд на {total.price}</div>}
                </div>
                {ordersLenght != 0 ?
                    <>
                        {
                            order.map(e => <OrderItem key={e.id} ValueInc={ValueInc} id={e.id}
                                                      deliveryPrice={e.deliveryPrice} ValueDic={ValueDic}
                                                      img={e.img} ItemTitle={e.ItemTitle}
                                                      count={e.count} totalPrice={e.totalPrice}/>)
                        }
                        <div className={style.orderItem}>
                            <div className={style.titleAndImg}>
                                <div className={style.title}>
                                    Доставка
                                </div>
                            </div>
                            <div className={style.priceAndCount}>
                                <div className={style.price}>
                                    0 р
                                </div>
                            </div>
                        </div>
                        <button className={style.orderButton}>Оформить доставку за {total.price}</button>
                        <div className={style.recommended}>

                        </div>
                    </>
                    :
                    null
                }

            </div>
        </section>
    )
}

export default Orders