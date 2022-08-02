import React from "react"
import Location from "./Location";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../HOC/withAuthRedirect/withAuthRedirect";
import {compose} from "redux";

class LocationContainer extends React.Component {
    render() {
        return (
            <Location location={this.props.location} />
        )
    }
}

let mapStateToProps = (state) => ({
    location: state.UserProfileReduser.location,

})


export default compose(WithAuthRedirect, connect(mapStateToProps, null))(LocationContainer)