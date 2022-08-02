import React from "react"
import {connect} from "react-redux";
import Offer from "./Offer";

class OfferContainer extends React.Component {

    render() {
        return (
            <Offer />
        )
    }
}

let mapStateToProps = (state) => ({


})

export default connect(mapStateToProps, null)(OfferContainer)