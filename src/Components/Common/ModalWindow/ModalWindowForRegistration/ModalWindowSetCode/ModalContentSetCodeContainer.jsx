import React, {useState} from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import style from "../ModalWindowForRegistration.module.css"
import ModalContentSetCode from "./ModalContentSetCode";
import {setCode} from "../../../../../Redux/AuthReduser";

class ModalContentSetCodeContainer extends React.Component {

    state = {
        isModal: false,
    }

    Submit = values => {
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
                <ModalContentSetCode onSubmit={this.Submit} isVisible={this.state.isModal}
                                  onClose={() => this.setModal(false)} setCode={this.props.setCode}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.AuthReduser.isAuth
})



export default connect(mapStateToProps, {setCode})(ModalContentSetCodeContainer)