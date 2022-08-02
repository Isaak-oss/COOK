import React from "react";
import Information from "./Information";
import {setProfileInfo} from "../../../Redux/UserProfileReduser";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect/withAuthRedirect";

class InformationContainer extends React.Component {
    render() {
        return (
            <Information phoneNumber={this.props.phoneNumber} profileName={this.props.profileInfo} setProfileInfo={this.props.setProfileInfo}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profileName: state.UserProfileReduser.profileName,
    phoneNumber: state.AuthReduser.phoneNumber
})


export default compose(WithAuthRedirect,connect(mapStateToProps, {setProfileInfo}))(InformationContainer)