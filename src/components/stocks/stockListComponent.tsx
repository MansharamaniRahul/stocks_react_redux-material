import React from "react";
import TableComponent from "../table/tableComponent";
import CardComponent from "../card/cardComponent";
import IStockList from "../../interfaces/IStockList";
import ToggleButtonComponent from "../toggleButton/toggleButton";

class StockstList extends React.Component<any, IStockList> {
  constructor(props: any) {
    super(props);
    this.state = { showTable: true };
    this.setSelected = this.setSelected.bind(this);
  }
  setSelected(event: any) {
    this.setState({ showTable: !this.state.showTable });
  }

  render() {
    return (
      <React.Fragment>
        <h3>Show Table: </h3>
        <ToggleButtonComponent toggleView={this.setSelected} />
        <h1>Stock List</h1>
        {this.props.stockstList.length > 0 &&
          ((this.state.showTable && (
            <TableComponent stockData={this.props.stockstList} />
          )) || <CardComponent stockData={this.props.stockstList} />)}
      </React.Fragment>
    );
  }
}

export default StockstList;
