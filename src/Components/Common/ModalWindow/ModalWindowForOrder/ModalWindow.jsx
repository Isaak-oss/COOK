import React, {useEffect, useState} from "react";
import style from "./ModalWindow.module.css"
import Spicy_Icon from "../../../Image/Spicy_Icon.png";
import Activated_Icon from "../../../Image/additionally_activate_Icon.svg"
import Diactivated_Icon from "../../../Image/additionally_diactivate_icon.svg"
import whiteClose_Icon from "../../../Image/closeWhite_Icon.svg"

import Additionally from "./Additionally";
import {setOrder} from "../../../../Redux/UserProfileReduser";
import {NavLink} from "react-router-dom";

const ModalWindowForOrder = ({
                                 isVisible = false, img, onClose,
                                 isSpicy, bgcolor, ItemTitle,
                                 ItemWeight, setOrder, id,
                                 ItemPrice, ItemText, count, add, Remove
                             }) => {

    let [NewPrice, setNewPrice] = useState(ItemPrice)
    let [ordered, setOrdered] = useState(false)

    useEffect(() => {
        if (NewPrice != ItemPrice) {
            setNewPrice(ItemPrice * count)
        }
    }, [isVisible])


    let submitOrder = () => {
        setOrder({ItemTitle, ItemText, NewPrice, count, img, id, ItemPrice})
    }
    let ValueInc = (e, additionalePrice) => {
        if (e) {
            if (e.target.checked) {
                setNewPrice(NewPrice + additionalePrice)
            } else {
                setNewPrice(NewPrice - additionalePrice)
            }
        } else {
            setNewPrice(ItemPrice + NewPrice)
        }
    }
    let ValueDic = () => {
        if (count > 1) {
            setNewPrice(NewPrice - ItemPrice)
        }
    }

    let ordereded = () => {
        setOrdered(true)
    }

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
                <div className={style.modalheader} style={{backgroundColor: bgcolor}}>
                    <div className={style.modaltitle}><img src={img} alt=""/></div>
                    <span className={style.modalclose} onClick={onClose}>
                        <img src={whiteClose_Icon} alt=""/>

                    </span>
                    {
                        isSpicy
                            ?
                            <div className={style.MenuSpicyIcon}><img src={Spicy_Icon} alt=""/></div>
                            :
                            null
                    }
                </div>
                <div className={style.modalbody}>
                    <div className={style.modalcontent}>
                        <div className={style.ItemInformationTitle}>{ItemTitle}</div>
                        <div className={style.ItemInformationWeightAndPrice}>{ItemWeight} - {ItemPrice}??</div>
                        <div className={style.ItemInformationTetx}>{ItemText}</div>
                        <div className={style.additionally}>
                            <p className={style.additionallyTitle}>??????????????????????????</p>
                            <div className={style.additionallyItem}>
                                <Additionally title={"???????????????? ????????"} additionallyPrice={20} ValueInc={ValueInc}
                                              id={1}/>
                                <Additionally title={"???? ??????????????????"} additionallyPrice={0} ValueInc={ValueInc} id={2}/>
                                <Additionally title={"???????????? ????????????????"} additionallyPrice={300} ValueInc={ValueInc}
                                              id={3}/>
                            </div>
                        </div>
                        <div className={style.buttons}>
                            <div className={style.Count}>
                                <button className={style.MenuButton} onClick={() => {
                                    ValueInc();
                                    add()
                                }}>+
                                </button>
                                <div className={style.ItemCount}>{count}</div>
                                <button className={style.MenuButton} onClick={() => {
                                    ValueDic();
                                    Remove()
                                }}>-
                                </button>
                            </div>
                            {!ordered ?
                                <div className={style.AddOrderButton} onClick={() => {
                                    submitOrder(); ordereded();
                                }}>???????????????? {NewPrice}??</div>
                                :
                                <div className={style.inCard}> <NavLink to={"/cart"}> ?? ??????????????</NavLink></div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ModalWindowForOrder