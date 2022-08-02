import React from "react";
import style from "./../TermsOfUse.module.css"


const TermsOfUseArticle = (props) => {

    return (
        <div className={style.article}>
            <div className={style.articleTitle}>{props.articleTitle}</div>
            <div className={style.articleText}>{props.articleText}</div>
        </div>
    )
}

export default TermsOfUseArticle