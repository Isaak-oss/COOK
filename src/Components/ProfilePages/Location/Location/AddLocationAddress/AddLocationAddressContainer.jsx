import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import AddCard from "./AddCard";
import {addNewCard} from "../../../../../Redux/UserProfileReduser";


class AddCardContainer extends React.Component {

    render() {
        return (
            <AddCard addNewCard={this.props.addNewCard}/>
        )
    }
}



export default compose( connect(null, {addNewCard}))(AddCardContainer)