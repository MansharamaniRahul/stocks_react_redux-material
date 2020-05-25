import React from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Link to="/stockComponent">Stock List</Link>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
