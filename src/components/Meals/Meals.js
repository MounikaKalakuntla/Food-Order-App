import MealsSummary from "./MealsSummary";
import AvilableMeals from "./AvailableMeals";
import { Fragment } from "react/cjs/react.production.min";


const Meals = props => {
    return <Fragment>
        <MealsSummary />
        <AvilableMeals />
    </Fragment>
};

export default Meals;