import React from "react";
import { connect } from "react-redux";

import StockstList from "./stockListComponent";
import getStockData from "../../actions/products/productActions";

class StochComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.getStockData();
  }

  render() {
    const consolidatedUI = (
      <div>
        <StockstList stockstList={this.props.defaultStockList} />
      </div>
    );
    return (
      <React.Fragment>
        {this.props.defaultStockList.length > 0 && consolidatedUI}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: any) {
  return { defaultStockList: state.defaultStockList };
}
export default connect(mapStateToProps, { getStockData })(StochComponent);
