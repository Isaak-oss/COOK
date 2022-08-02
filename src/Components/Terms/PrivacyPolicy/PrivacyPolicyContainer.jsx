import React from "react";
import {connect} from "react-redux";
import PrivacyPolicy from "./PrivacyPolicy";

class PrivacyPolicyContainer extends React.Component {
    render() {
        return (
            <PrivacyPolicy privacyPolicyArticles={this.props.privacyPolicyArticles}/>
        )
    }
}

let mapStateToProps = (state) => ({
    privacyPolicyArticles: state.TermsReduser.privacyPolicyArticles
})

export default connect(mapStateToProps, null)(PrivacyPolicyContainer)