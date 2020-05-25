import Constants from "../../constants/constants";
import StockData from "../../constants/StockData";
export default function getStockData() {
  return { type: Constants.GET_STOCK_DATA, payload: StockData };
}
