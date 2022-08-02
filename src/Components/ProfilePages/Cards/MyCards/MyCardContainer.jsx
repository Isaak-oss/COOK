import React from "react"
import MyCard from "./MyCard";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../HOC/withAuthRedirect/withAuthRedirect";
import {compose} from "redux";

class MyCardContainer extends React.Component {
    render() {
        return (
            <MyCard creditCarts={this.props.creditCarts} />
        )
    }
}

let mapStateToProps = (state) => ({
    creditCarts: state.UserProfileReduser.creditCarts,

})


export default compose(WithAuthRedirect, connect(mapStateToProps, null))(MyCardContainer)