import React from "react";
import style from "./../PrivacyPolicy.module.css"


const PrivacyPolicyArticle = (props) => {

    return (
        <div className={style.article}>
            <div className={style.articleTitle}>{props.articleTitle}</div>
            <div className={style.articleText}>{props.articleText}</div>
        </div>
    )
}

export default PrivacyPolicyArticle