import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvialableMeals from "./AvialableMeals";

// import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvialableMeals />
    </Fragment>
  );
};

export default Meals;
