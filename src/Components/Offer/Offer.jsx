import React, {useState} from "react";
import Banners from "./Banners/Banners";
import style from "./Offer.module.css"
import MenuItems from "./MenuItems/MenuItems";
import MenuItemsContainer from "./MenuItems/MenuItemsContainer";
import CategoryComponent from "../Common/CategoryComponent/CategoryComponent";

const Offer = (props) => {

    return (
        <section className={style.Offer}>
            <div className={"container"}>
                <Banners/>
                <MenuItemsContainer/>
            </div>
        </section>
    )
}

export default Offer