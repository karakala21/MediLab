import React from "react";
import { FormCheckbox } from "shards-react";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked: false,
    };
  }

  handleChange() {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }), () => {
      // Pass the checked state back to the parent component
      this.props.onCheckboxChange(this.state.checked);
    });
  }

  render() {
    return (
      <FormCheckbox
        checked={this.state.checked}
        onChange={this.handleChange}
      />
    );
  }
}
