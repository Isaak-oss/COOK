import React, {useEffect, useState} from "react"
import style from "./../../Offer.module.css"
import Spicy_Icon from "./../../../Image/Spicy_Icon.png"
import like from "./../../../Image/Like.svg"
import activate_Icon from "./../../../Image/Avtivate_Icon.png"
import {disLike} from "../../../../Redux/MenuReduser";
import ModalWindow from "../../../Common/ModalWindow/ModalWindowForOrder/ModalWindow";
import ModalWindowForOrder from "../../../Common/ModalWindow/ModalWindowForOrder/ModalWindow";
import {setOrder} from "../../../../Redux/UserProfileReduser";

const Item = (props) => {

    let [count, ChangeCount] = useState(1)
    const [isModal, setModal] = React.useState(false);


    const add = () => {
        ChangeCount(count + 1)
    }
    const Remove = () => {
        if (count > 1) {
            ChangeCount(count - 1)
        }
    }


    const Like = () => {
        props.like(props.id)
    }
    const disLike = () => {
        props.disLike(props.id)
    }

    return (
        <div className={style.item}>
            <div className={style.MenuItemImg} style={{backgroundColor: props.bgcolor}}>
                {props.isLiked ? <div onClick={disLike} className={style.like}><img src={activate_Icon} alt=""/></div> :
                    <div onClick={Like} className={style.unlike}><img src={like} alt=""/></div>}
                {!props.ItemOfMenuImg ? <div className={style.noPhoto}>No Photo</div> :
                    <img src={props.ItemOfMenuImg} alt=""/>}

                {
                    props.isSpicy
                        ?
                        <div className={style.MenuSpicyIcon}><img src={Spicy_Icon} alt=""/></div>
                        :
                        <div></div>
                }
            </div>
            <div className={style.Itemformation}>
                <div className={style.ItemTextContent}>
                    <div className={style.ItemInformationTitle}>{props.ItemTitle}</div>
                    <div className={style.ItemInformationWeightAndPrice}>{props.ItemWeight} - {props.ItemPrice}Р</div>
                    <div className={style.ItemInformationTetx}>{props.ItemText}</div>
                </div>
                <div className={"Row"}>
                    <div className={style.Count}>
                        <button className={style.MenuButton} onClick={() => {
                            setModal(true)
                        }}>+</button>
                        <div className={style.ItemCount}>{count}</div>
                        <button className={style.MenuButton} onClick={() => {
                            setModal(true)
                        }}>-</button>
                    </div>
                    <div>
                        <button onClick={() => {
                            setModal(true)
                        }} className={style.AddOrderButton}>Добавить
                        </button>
                        <ModalWindowForOrder isVisible={isModal}
                                             img={props.ItemOfMenuImg}
                                             onClose={() => setModal(false)}
                                             isSpicy={props.isSpicy}
                                             bgcolor={props.bgcolor}
                                             add={add} id={props.id}
                                             Remove={Remove}
                                             ItemTitle={props.ItemTitle}
                                             ItemWeight={props.ItemWeight}
                                             ItemPrice={props.ItemPrice}
                                             count={count}
                                             ItemText={props.ItemText}
                                             setOrder={props.setOrder}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item