import React, {useState} from "react";
import ModalWindowForRegistration from "./ModalWindowForRegistration";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import style from "./ModalWindowForRegistration.module.css"
import {NavLink} from "react-router-dom";

class ModalWindowForRegistrationContainer extends React.Component {

    state = {
        isModal: false,
    }

    Submit = values => {
        debugger
        console.log(values)
    }

    setModal = (e) => {
        this.setState({
            isModal:e
        })
    }

    render() {
        return (
            <>
                <button className={style.loginButton}
                        onClick={() => {this.setModal(true)}}>
                    <NavLink to={"/"}> Войти </NavLink>
                </button>
                <RegistrationForm onSubmit={this.Submit} isVisible={this.state.isModal}
                                  onClose={() => this.setModal(false)}/>
            </>
        )
    }
}

export const RegistrationForm = reduxForm({
    form: 'registration',
    destroyOnUnmount: false,
    enableReinitialize: true
})(ModalWindowForRegistration)


export default connect(null, null)(ModalWindowForRegistrationContainer)