import React from "react";
import Item from "./Item";
import MenuItemPhoto from "../../../Image/MenuItemPhoto.png";
import style from "./../../Offer.module.css"
import {disLike} from "../../../../Redux/MenuReduser";
import {setOrder} from "../../../../Redux/UserProfileReduser";

const MenuItem = (props) => {
    let Menu_map = props.menu.map(e => <Item bgcolor={e.bgcolor} ItemOfMenuImg={e.ItemOfMenuImg}
                                             isSpicy={e.isSpicy} ItemTitle={e.ItemTitle}
                                             ItemWeight={e.ItemWeight} id={e.id}
                                             ItemPrice={e.ItemPrice}
                                             ItemText={e.ItemText} category={e.category}
                                             isLiked={e.isLiked} like={props.like}
                                             key={e.id} id={e.id} disLike={props.disLike}
                                             setOrder={props.setOrder}/>)


    return (
        <div className={style.MenuItem}>
            <div className={style.filtred}>
                <div className={style.filtredOne}> {props.currentCategory}</div>
                <div className={style.MenuItemItem}>
                {Menu_map}
                </div>
            </div>
        </div>
    )
}

export default MenuItem