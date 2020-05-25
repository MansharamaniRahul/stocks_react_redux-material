import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Stock from "../../interfaces/IStock";
import { TablePagination, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: "50%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function CardList(props: any) {
  const classes = useStyles();
  const stockData: Array<Stock> = props.stockData;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const stockList = stockData
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((stockDetails: Stock, index: number) => {
      let dateValue = (
        new Date(stockDetails.date).getDate() +
        "/" +
        new Date(stockDetails.date).getUTCMonth() +
        1 +
        "/" +
        new Date(stockDetails.date).getUTCFullYear()
      ).toString();
      return (
        <Card className={classes.root} key={index}>
          <CardContent>
            <Typography color="textPrimary" gutterBottom variant="h4">
              Date:<span>&nbsp; {dateValue}</span>
            </Typography>
            <Typography component="p" color="textSecondary">
              Open: <span>&nbsp; {stockDetails.open}</span> &nbsp;&nbsp; Close{" "}
              <span>&nbsp; {stockDetails.close}</span>
            </Typography>
            <Typography component="p" color="textSecondary">
              High: <span>&nbsp; {stockDetails.high}</span> &nbsp;&nbsp; Low{" "}
              <span>&nbsp; {stockDetails.low}</span>
            </Typography>
            <Typography component="p" color="textSecondary">
              Volume: <span>&nbsp; {stockDetails.volume}</span>
            </Typography>
          </CardContent>
        </Card>
      );
    });
  return (
    <div>
      <Box
        component="div"
        height="500px"
        overflow="auto"
        bgcolor="background.paper"
      >
        {stockList}
      </Box>
      {/* <div >{{stockList}}</div> */}
      <br />
      <hr />
      <TablePagination
        rowsPerPageOptions={[3, 10, 25, 100]}
        component="div"
        count={stockData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default function CardComponent(props: any) {
  const stockData: Array<Stock> = props.stockData;
  return (
    <React.Fragment>
      <CardList stockData={stockData} />
    </React.Fragment>
  );
}
