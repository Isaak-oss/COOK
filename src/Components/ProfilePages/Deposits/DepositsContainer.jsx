import React from "react";
import {connect} from "react-redux";
import Deposits from "./Deposits";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect/withAuthRedirect";
import {compose} from "redux";

class DepositsContainer extends React.Component {
    render() {
        return (
            <Deposits deposits={this.props.deposits}/>
        )
    }
}

let mapStateToProps = (state) => ({
    deposits: state.UserProfileReduser.deposits
})

export default compose(WithAuthRedirect,connect(mapStateToProps, null))(DepositsContainer)