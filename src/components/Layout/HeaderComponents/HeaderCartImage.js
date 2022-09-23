import mealsImage from "../../../assets/meals.jpg";

import classes from "./HeaderCartImage.module.css";

const HeaderCartImage = (props) => {
  return (
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="A table full of delicious food!" />
    </div>
  );
};

export default HeaderCartImage;
