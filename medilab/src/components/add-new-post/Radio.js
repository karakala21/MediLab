import React from "react";
import { FormRadio } from "shards-react";

export default class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSport: null
    };

    this.changeSport = this.changeSport.bind(this);
  }

  changeSport(sport) {
    this.setState({
      selectedSport: sport
    });
  }

  render() {
    return (
      <div>
        <div>
          <p className="mb-2">Patient </p>
          <FormRadio
            inline
            name="sport"
            checked={this.state.selectedSport === "female"}
            onChange={() => {
              this.changeSport("female");
            }}
          >
            Female
          </FormRadio>
          <FormRadio
            inline
            name="sport"
            checked={this.state.selectedSport === "male"}
            onChange={() => {
              this.changeSport("male");
            }}
          >
            Male
          </FormRadio>
          {/* <FormRadio
            inline
            name="sport"
            checked={this.state.selectedSport === "tennis"}
            onChange={() => {
              this.changeSport("tennis");
            }}
          >
            Tennis
          </FormRadio> */}
        </div>
        {/* <span>
          <strong>Selected sport:</strong>{" "}
          <span>{this.state.selectedSport || "none"}</span>
        </span> */}
      </div>
    );
  }
}