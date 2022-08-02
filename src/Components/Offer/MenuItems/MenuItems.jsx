import React, {useEffect, useState} from "react";
import MenuItem from "./MenuItem/MenuItem";
import CategoryComponent from "../../Common/CategoryComponent/CategoryComponent";
import style from "./../Offer.module.css"
import {disLike} from "../../../Redux/MenuReduser";
import {setOrder} from "../../../Redux/UserProfileReduser";



const MenuItems = (props) => {

    let [menuItems, Fillter] = useState(props.menu)
    let [currentCategory, setCurrentCategory] = useState()


    useEffect(() => {
        if(menuItems != props.menu){
            Fillter(props.menu)
        }
    }, [props.menu])

    let currCategory = (curr) => {
        setCurrentCategory(curr)
    }

    let onFiltration = (category) => {
        if (category === "all"){
            Fillter(props.menu)
        } else {
            let newMenu = (props.menu.filter(e => e.category === category))
            if  (newMenu.length === 0){
                alert("Такого в меню еще нет")
                return
            }
            Fillter(newMenu)
            console.log(menuItems)
        }
    }

    let category_out = props.category.map(e => <div key={e.category} onClick={() => {onFiltration(e.category); currCategory(e.NameOfCategory)}}><CategoryComponent category={e.NameOfCategory}/></div>)


    return(
        <div>
            <div className={style.OfferCategory}>
                {category_out}
            </div>
            <MenuItem menu={menuItems} like={props.like}
                      disLike={props.disLike} setOrder={props.setOrder} currentCategory={currentCategory}/>
        </div>
    )
}

export default MenuItems