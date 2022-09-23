import { Fragment } from "react";


import HeaderCartButton from "./HeaderComponents/HeaderCartButton";
import HeaderCartImage from "./HeaderComponents/HeaderCartImage";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick ={props.onShowCart}/>
      </header>
      <HeaderCartImage/>
    </Fragment>
  );
};

export default Header;
