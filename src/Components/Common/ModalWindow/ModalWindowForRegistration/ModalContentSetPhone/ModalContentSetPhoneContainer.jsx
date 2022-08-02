import React, {useState} from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import style from "../ModalWindowForRegistration.module.css"
import ModalContentSetPhone from "./ModalContentSetPhone";
import {setCode, setPhone} from "../../../../../Redux/AuthReduser";

class ModalContentSetPhoneContainer extends React.Component {

    state = {
        isModal: false,
    }

    setModal = (e) => {
        this.setState({
            isModal:e
        })
    }

    render() {
        return (
            <>

                <ModalContentSetPhone onSubmit={this.Submit} isVisible={this.state.isModal}
                                  onClose={() => this.setModal(false)} setPhone={this.props.setPhone}/>
            </>
        )
    }
}




export default connect(null, {setPhone})(ModalContentSetPhoneContainer)