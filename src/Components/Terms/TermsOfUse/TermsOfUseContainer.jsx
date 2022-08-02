import React from "react";
import TermsReduser from "../../../Redux/TermsReduser";
import {connect} from "react-redux";
import TermsOfUse from "./TermsOfUse";

class TermsOfUseContainer extends React.Component {
    render() {
        return (
            <TermsOfUse termsOfUserArticle={this.props.termsOfUserArticle}/>
        )
    }
}

let mapStateToProps = (state) => ({
    termsOfUserArticle: state.TermsReduser.termsOfUserArticle
})

export default connect(mapStateToProps, null)(TermsOfUseContainer)