import React from "react";
import MenuItemPhoto from "../Components/Image/MenuItemPhoto.png";

const LIKEDSUCSESS = "./MenuReduser/LIKED_SUCSESS";
const DISLIKEDSUCSESS = "./MenuReduser/DIS_LIKED_SUCSESS";

let initialState = {
    //All menu
    menu: [
        {
            Name: "potatoWithMashrums",
            id: 1, //id of dish
            bgcolor: "#FE724B", //background-color of img
            ItemOfMenuImg: MenuItemPhoto, //picture of dish
            isSpicy: false, //isSpicy, true/false
            ItemTitle: "Картофель с луком и белыми грибами", //info
            ItemWeight: "200kg", //info
            ItemPrice: 300,
            ItemText: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.", //info
            category: "snacks", //Category for filtrationt
            isLiked: false,
        },
        {
            Name: "potatoWithMashrums2",
            id: 2, //id of dish
            bgcolor: "#B3E0EB", //background-color of img
            ItemOfMenuImg: MenuItemPhoto, //picture of dish
            isSpicy: true, //isSpicy, true/false
            ItemTitle: "Картофель с луком и белыми грибами", //info
            ItemWeight: "200kg", //info
            ItemPrice: 300,
            ItemText: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.", //info
            category: "snacks", //Category for filtrationt
            isLiked: false,

        },

        {
            Name: "fish",
            id: 3, //id of dish
            bgcolor: "#FCBEC8", //background-color of img
            ItemOfMenuImg: MenuItemPhoto, //picture of dish
            isSpicy: true, //isSpicy, true/false
            ItemTitle: "fish", //info
            ItemWeight: "200kg", //info
            ItemPrice: 300,
            ItemText: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.", //info
            category: "sushi", //Category for filtrationt
            isLiked: false,

        },
        {
            Name: "milk",
            id: 4, //id of dish
            bgcolor: "#B3E0EB", //background-color of img
            ItemOfMenuImg: MenuItemPhoto, //picture of dish
            isSpicy: false, //isSpicy, true/false
            ItemTitle: "milk", //info
            ItemWeight: "200kg", //info
            ItemPrice: 300,
            ItemText: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.", //info
            category: "drinks", //Category for filtrationt
            isLiked: false,

        },
        {
            Name: "coffe",
            id: 5, //id of dish
            bgcolor: "#FCBEC8", //background-color of img
            ItemOfMenuImg: MenuItemPhoto, //picture of dish
            isSpicy: false, //isSpicy, true/false
            ItemTitle: "coffe", //info
            ItemWeight: "200kg", //info
            ItemPrice: 300,
            ItemText: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.", //info
            category: "hot", //Category for filtrationt
            isLiked: false,

        },
        {
            Name: "Caesar",
            id: 6, //id of dish
            bgcolor: "#FE724B", //background-color of img
            ItemOfMenuImg: MenuItemPhoto, //picture of dish
            isSpicy: true, //isSpicy, true/false
            ItemTitle: "Caesar", //info
            ItemWeight: "200kg", //info
            ItemPrice: 300,
            ItemText: "Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.", //info
            category: "salad", //Category for filtrationt
            isLiked: false,

        }
    ],
    category: [
        {
            category: "all",
            NameOfCategory: "Все",
        },
        {
            category: "lovely",
            NameOfCategory: "Любимое",
        },
        {
            category: "snacks",
            NameOfCategory: "Закуски",
        },
        {
            category: "salad",
            NameOfCategory: "Салаты",
        },
        {
            category: "sushi",
            NameOfCategory: "Суши и роллы",
        },
        {
            category: "Soups",
            NameOfCategory: "Супы",
        },
        {
            category: "childish",
            NameOfCategory: "Детское",
        },
        {
            category: "desserts",
            NameOfCategory: "Десерты",
        },
        {
            category: "drinks",
            NameOfCategory: "Напитки",
        },
    ],

}

const MenuReduser = (state = initialState, action) => {
    switch (action.type) {
        case LIKEDSUCSESS: {
            return {
                ...state,
                menu: state.menu.map(u => {
                    if (u.id === action.orderId) {
                        return {...u, isLiked: true}
                    }
                    return u;
                })
            }
        }
        case DISLIKEDSUCSESS: {
            return {
                ...state,
                menu: state.menu.map(u => {
                    if (u.id === action.orderId) {
                        return {...u, isLiked: false}
                    }
                    return u;
                })
            }
        }
        default:
            return state
    }
}

export const like = (orderId) => ({type: LIKEDSUCSESS, orderId: orderId})
export const disLike = (orderId) => ({type: DISLIKEDSUCSESS, orderId: orderId})

export default MenuReduser