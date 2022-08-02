import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.AuthReduser.isAuth,
})

export const WithAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/' />
        return <Component {...props}/>
    }
    let ConnectisAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectisAuthRedirectComponent
}
