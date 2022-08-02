import React from "react";
import MenuItemPhoto from "../Components/Image/MenuItemPhoto.png";

const LIKEDSUCSESS = "./MenuReduser/LIKED_SUCSESS";
const DISLIKEDSUCSESS = "./MenuReduser/DIS_LIKED_SUCSESS";

let initialState = {
    //All menu
    footCount: null,
    footPrice: null,
    footAttitionall: "",
    footName: "",
    footImg: null,
    totalPrice: null,

}

const OrderReduser = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}



export default OrderReduser