import React from "react";
import MasterCard from "../../src/Components/Image/MasterCard.svg"
import Visa from "../../src/Components/Image/Visa.svg"

const ADD_NEW_CARD = "/USER_PROFILE/ADD_NEW_CARD"
const UPDATE_LOCATION_ADRESS = "/USER_PROFILE/UPDATE_LOCATION_ADRESS"
const ADD_ORDER = "/USER_PROFILE/ADD_ORDER"
const UPDATE_PROFILE_INFO = "/USER_PROFILE/UPDATE_PROFILE_INFO"

let initialState = {
    //All Terms
    deposits: "27 580",
    creditCarts: [
        {
            id: 1,
            paymentSystem: MasterCard,
            cardNumber: "1111 2222 3333 4444",
            lastNumber: "4444",
            cardCVC: "231",
            cardDate: "01/22",
            userCardName: "Name",
        },
        {
            id: 2,
            paymentSystem: Visa,
            cardNumber: "2222 3333 4444 5555",
            lastNumber: "5555",
            cardCVC: "231",
            cardDate: "01/22",
            userCardName: "Name",
        }
    ],
    profileName: "",
    location: [
        {
            id: 1,
            addressName: 'Дом',
            tower: "Меркурий Сити Тауэр",
            entry: "Центральный",
            housefloor: "28",
            apartment: "62",
            security: "62",
            comment: "Оставляйте в лифте!"
        },
        {
            id: 2,
            addressName: 'Квартира',
            tower: "Меркурий Сити Тауэр",
            entry: "Центральный",
            housefloor: "28",
            apartment: "62",
            security: "62",
            comment: "Оставляйте в лифте!"
        }
    ],
    cart: []
}

const UserProfileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER: {
            let newOrder = {
                id: action.data.id,
                img: action.data.img,
                ItemTitle: action.data.ItemTitle,
                ItemText: action.data.ItemText,
                totalPrice: action.data.NewPrice,
                ItemPrice: action.data.ItemPrice,
                count: action.data.count,
                deliveryPrice: 0,
            };
            let newState={...state}
            newState.cart = [...state.cart, newOrder];
            return(newState)
        }
        case UPDATE_PROFILE_INFO: {
            return {
                ...state, profileName: action.data.name
            }
        }
        case ADD_NEW_CARD: {
            let newCard = {
                id: 3,
                paymentSystem: Visa,
                cardNumber: action.data.cardNumber,
                cardDate: action.data.cardDate,
                cardCVC: action.data.cardCVC,
                userCardName: action.data.userCardName,
                lastNumber: action.data.cardNumber.substring(action.data.cardNumber.length - 4)
            };
            let newState={...state}
            newState.creditCarts = [...state.creditCarts, newCard]
            return(newState)
        }
        case UPDATE_LOCATION_ADRESS: {
            return {
                ...state,
                location: state.location.map(u => {
                    if(u.id === action.id){
                        return {...u, addressName: action.data.addressName,
                            tower: action.data.tower,
                            entry: action.data.entry, housefloor: action.data.housefloor,
                            apartment: action.data.apartment, security: action.data.security,
                            comment: action.data.comment}
                    }
                    return u
                })
            }
        }
        default:
            return state
    }
}

export const updateLocationAdress = (data, id) => ({type:UPDATE_LOCATION_ADRESS, data: data, id: id })
export const addNewCard = (data) => ({type:ADD_NEW_CARD, data: data })
export const setOrder = (data) => ({type:ADD_ORDER, data: data })
export const setProfileInfo = (data) => ({type:UPDATE_PROFILE_INFO, data: data })

export default UserProfileReduser