import React from "react";
import style from "./PrivacyPolicy.module.css"
import PrivacyPolicyArticle from "./PrivacyPolicyArticles/PrivacyPolicyArticle";



const PrivacyPolicy = (props) => {

    let ArticlesMap = props.privacyPolicyArticles.map(e => <PrivacyPolicyArticle articleTitle={e.title} articleText={e.text}/>)

    return (
        <section className={style.PrivacyPolicy}>
            <div className="container">
                <div className={style.title}>Политика конфиденциальности</div>
                {ArticlesMap}
            </div>
        </section>
    )
}

export default PrivacyPolicy