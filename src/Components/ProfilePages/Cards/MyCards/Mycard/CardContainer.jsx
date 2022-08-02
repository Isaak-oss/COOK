import React from "react";
import style from "../MyCard.module.css"
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import back_Icon from "../../../../Image/back_Icon.svg";
import {connect} from "react-redux";
import Card from "./Card";
import {compose} from "redux";


class CardContainer extends React.Component {

    render() {
        let currentPage = Number(this.props.router.params.cardId);
        let creditCard = this.props.creditCarts.filter(id => id.id === currentPage);
        return (
            <Card creditCard={creditCard}/>
        )
    }
}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    creditCarts: state.UserProfileReduser.creditCarts,
})


export default compose( connect(mapStateToProps, null), withRouter)(CardContainer)