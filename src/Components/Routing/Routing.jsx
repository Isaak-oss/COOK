import React from "react";
import {withSuspence} from "../HOC/withSuspence/withSuspence";
import OfferContainer from "../Offer/OfferContainer";
import {Route, Routes} from "react-router-dom";
import ModalContentSetPhone
    from "../Common/ModalWindow/ModalWindowForRegistration/ModalContentSetPhone/ModalContentSetPhone";
import ModalContentSetCode
    from "../Common/ModalWindow/ModalWindowForRegistration/ModalWindowSetCode/ModalContentSetCode";
import ModalContentSetCodeContainer
    from "../Common/ModalWindow/ModalWindowForRegistration/ModalWindowSetCode/ModalContentSetCodeContainer";
import ModalContentSetPhoneContainer
    from "../Common/ModalWindow/ModalWindowForRegistration/ModalContentSetPhone/ModalContentSetPhoneContainer";
import DepositsContainer from "../ProfilePages/Deposits/DepositsContainer";
import MyCardContainer from "../ProfilePages/Cards/MyCards/MyCardContainer";
import CardContainer from "../ProfilePages/Cards/MyCards/Mycard/CardContainer";
import LocationContainer from "../ProfilePages/Location/Location/LocationContainer";
import LocationAdressContainer from "../ProfilePages/Location/Location/LocationAdress/LocationAdressContainer";
import AddCardContainer from "../ProfilePages/Cards/MyCards/AddCard/AddCardContainer";
import OrdersContainer from "../Orders/OrdersContainer";
import InformationContainer from "../ProfilePages/Information/InformationContainer";
const TermsOfUseContainer = React.lazy(() => import("../Terms/TermsOfUse/TermsOfUseContainer"));
const PrivacyPolicyContainer = React.lazy(() => import("../Terms/PrivacyPolicy/PrivacyPolicyContainer"));


export const Routing = (props) => {

    return (
            <Routes>
                <Route path="/termsOfUse/*" element={withSuspence(TermsOfUseContainer)}/>}
                <Route path="/privacyPolicy/*" element={withSuspence(PrivacyPolicyContainer)}/>}
                <Route path="/*" element={<OfferContainer /> }/>
                <Route path="/deposits" element={<DepositsContainer /> }/>
                <Route path="/cards" element={<MyCardContainer /> }/>
                <Route path="/cards/:cardId/" element={<CardContainer /> }/>
                <Route path="/cards/addCard/" element={<AddCardContainer /> }/>
                <Route path="/location" element={<LocationContainer /> }/>
                <Route path="/location/:locationId/" element={<LocationAdressContainer /> }/>
                <Route path="/cart" element={<OrdersContainer /> }/>
                <Route path="/profile" element={<InformationContainer /> }/>
            </Routes>
    )
}

export const RoutingRegistration = () => {
    return(
        <Routes>
            <Route path="/*" element={<ModalContentSetPhoneContainer />} />
            <Route path="/setCode/*" element={<ModalContentSetCodeContainer />} />
        </Routes>
    )
}
