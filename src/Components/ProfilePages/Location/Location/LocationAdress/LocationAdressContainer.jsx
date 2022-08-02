import React from "react";
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import LocationAdress from "./LocationAdress";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {updateLocationAdress} from "../../../../../Redux/UserProfileReduser";


class LocationAdressContainer extends React.Component {


    render() {
        let currentPage = Number(this.props.router.params.locationId);
        let locationAdress = this.props.location.filter(id => id.id === currentPage)
        return (
            <LocationAdress locationAdress={locationAdress} updateLocationAdress={this.props.updateLocationAdress}/>
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
    location: state.UserProfileReduser.location,
})



export default compose( connect(mapStateToProps, {updateLocationAdress}), withRouter)(LocationAdressContainer)