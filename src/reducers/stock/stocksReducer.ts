import Constants from "../../constants/constants";

const inititalState = {
  defaultStockList: [],
};
function stockReducer(state = inititalState, action: any) {
  switch (action.type) {
    case Constants.GET_STOCK_DATA: {
      return Object.assign({}, state, {
        defaultStockList: state.defaultStockList.concat(action.payload),
      });
    }

    default: {
      return state;
    }
  }
}

export default stockReducer;
