import React from "react";
import style from "./TermsOfUse.module.css"
import TermsOfUseArticle from "./TermsOfUseArticles/TermOfUseArticle";


const TermsOfUse = (props) => {

    let ArticlesMap = props.termsOfUserArticle.map(e => <TermsOfUseArticle articleTitle={e.title} articleText={e.text}/>)

    return (
        <section className={style.TermsOfUse}>
            <div className="container">
                <div className={style.title}>Пользовательское соглашение</div>
                {ArticlesMap}
            </div>
        </section>
    )
}

export default TermsOfUse