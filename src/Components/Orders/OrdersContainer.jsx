import React from "react";
import Orders from "./Orders";
import {connect} from "react-redux";


class OrdersContainer extends React.Component {
    render() {
        return (
            <Orders cart={this.props.cart}/>
        )
    }
}

let mapStateToProps = (state) => ({
    cart: state.UserProfileReduser.cart
})


export default connect(mapStateToProps, null)(OrdersContainer)