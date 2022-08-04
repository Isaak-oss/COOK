import style from './App.css';

import Footer from "./Components/Footer/Footer";
import {Routing} from "./Components/Routing/Routing";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App(props) {
    return (
        <>
            <HeaderContainer/>
            <Routing />
            <Footer/>
        </>
    );
}

export default App;
