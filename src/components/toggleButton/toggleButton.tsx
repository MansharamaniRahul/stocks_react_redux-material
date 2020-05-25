import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import ToggleButton from "@material-ui/lab/ToggleButton";
import CheckIcon from "@material-ui/icons/Check";
import { Switch } from "@material-ui/core";

export default class ToggleButtonComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { toggleView: true };
    this.setSelected = this.setSelected.bind(this);
  }
  setSelected(event: any) {
    this.setState({ toggleView: !this.state.toggleView });
    this.props.toggleView();
  }

  render() {
    return (
      <React.Fragment>
        <Tooltip
          title="Toggle View"
          aria-label="add"
          placement="right"
          arrow
          TransitionProps={{ timeout: 600 }}
        >
          <Switch
            checked={this.state.toggleView}
            onChange={this.setSelected}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Tooltip>
      </React.Fragment>
    );
  }
}
