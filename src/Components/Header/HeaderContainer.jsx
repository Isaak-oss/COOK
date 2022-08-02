import React from "react"
import {connect} from "react-redux";
import Header from "./Header";
import {logOut} from "../../Redux/AuthReduser";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header isAuth={this.props.isAuth} logOut={this.props.logOut} deposits={this.props.deposits}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.AuthReduser.isAuth,
    deposits: state.UserProfileReduser.deposits

})

export default connect(mapStateToProps, {logOut})(HeaderContainer)