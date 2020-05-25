import { createStore } from "redux";
import stockReducer from "../reducers/stock/stocksReducer";

const appStore = createStore(stockReducer);
export default appStore;
