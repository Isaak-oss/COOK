import React from "react";
import {connect} from "react-redux";
import MenuItems from "./MenuItems";
import {disLike, like} from "../../../Redux/MenuReduser";
import {setOrder} from "../../../Redux/UserProfileReduser";

class MenuItemContainer extends React.Component {
    render() {
        return (
            <MenuItems menu={this.props.menu} category={this.props.category}
                       like={this.props.like} disLike={this.props.disLike}
                       setOrder={this.props.setOrder}/>
        )
    }
}
let mapStateToProps = (state) => ({
    menu: state.MenuReduser.menu,
    category: state.MenuReduser.category
})


export default connect(mapStateToProps, {like, disLike, setOrder})(MenuItemContainer)