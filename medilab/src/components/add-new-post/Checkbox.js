import React from "react";
import { FormCheckbox } from "shards-react";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      orange: false

    };
  }

  handleChange(e, fruit) {
    const newState = {};
    newState[fruit] = !this.state[fruit];
    this.setState({ ...this.state, ...newState });
  }

  render() {
    return (
      <div>

        <FormCheckbox
          checked={this.state.orange}
          onChange={e => this.handleChange(e, "orange")}
        >

        </FormCheckbox>

      </div>
    );
  }
}
