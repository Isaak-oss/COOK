import React from "react"
import style from "../../Offer/Offer.module.css"

const CategoryComponent = (props) => {

    return (
            <div className={style.categoryName}>
                {props.category}
            </div>
    )
}



export default CategoryComponent