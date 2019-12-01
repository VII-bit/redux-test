import {combineReducers} from "redux";
import CarsReducer from "./car";
import carAction from "./carActive";


const RootReducer = combineReducers({
    cars: CarsReducer,
    active: carAction
});

export default RootReducer;