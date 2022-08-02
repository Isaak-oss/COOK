import React from "react";

const SET_CODE = '/AUTH/SET_REGISTRATION_CODE'
const SET_PHONE = '/AUTH/SET_REGISTRATION_PHONE'
const LOGOUT = '/AUTH/LOGOUT'

let initialState = {
    //All Terms
    isAuth: true,
    phoneNumber: null,
    code: "0000",
}

const AuthReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_CODE: {
            return {...state, code: action.code, isAuth: true }
        }
        case SET_PHONE: {
            return {...state, phoneNumber: action.phoneNumber}
        }
        case LOGOUT: {
            return {...state, isAuth: false}
        }
        default:
            return state
    }
}

export const setCode = (code) => ({type: SET_CODE, code: code})
export const setPhone = (phoneNumber) => ({type: SET_PHONE, phoneNumber: phoneNumber})
export const logOut = () => ({type: LOGOUT})

export default AuthReduser