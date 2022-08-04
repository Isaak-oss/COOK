import React, {Component} from "react";
import style from "./../Offer.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css"
import bannet_picture from "../../Image/banner_picture.png"
import bannerPlay_Button from "../../Image/bannerPlay_Buttonsvg.svg"
import onlyTower_picture from "../../Image/onlyTower_picture.png"

const Banners = () => {
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        pauseOnHover: true,
        speed: 500
    };
    return (
        <div className={"banner-container"}>

            <Slider {...settings} className={style.Slider}>
                <div className={style.deliveruFromKitchen}>
                    <div>
                        <h3>Доставка из ресторана <br/>
                            в керамической <br/>
                            посуде</h3>
                        <img className={style.deliveryBannerImg} src={bannet_picture} alt=""/>
                    </div>
                    <button>Сториз о сервисе <img className={style.deliveryBannerButtonImg} src={bannerPlay_Button} alt=""/></button>
                </div>
                <div className={style.onlyTowers}>
                    <div className={style.onlyTowersTitle}>
                        <h3>Только башни</h3>
                        <h2>Москва-Сити</h2>
                        <img className={style.towersBannerImg} src={onlyTower_picture} alt=""/>
                    </div>
                    <div className={style.onlyTowersText}>
                        Наш ресторан обслуживает <br/>
                        только близких соседей. <br/> <br/>
                        Так никакого ожидания, все <br/>
                        горячее и свежее.
                    </div>
                </div>
                <div className={style.deliveruFromKitchen}>
                    <h3>3</h3>
                </div>

            </Slider>
        </div>
    );
}
export default Banners