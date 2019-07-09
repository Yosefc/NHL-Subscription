import React, { Component } from "react";
import SubscriptionBox from "./SubscriptionBox";

class UnsubscribePage extends Component {
  state = {
    checked: false,
    value: ""
  };

  handleRadioChange = event => {
    let checked = false;
    if (event.target.id === "other") checked = !checked;
    this.setState({
      checked,
      value: event.target.value
    });
  };

  render() {
    const OtherReason = _ =>
      this.state.checked ? <input type="text" placeholder="Please tell use why.." /> : null;
    return (
      <div>
        <section>
          <p>
            Oh man...
            <br />
            It's us, wasn't it..
          </p>
        </section>
        <SubscriptionBox path={window.location.pathname} />
        <input type="radio" id="huey" name="drone" value="huey" />
        <label htmlFor="huey">Unsubscribe me from all team updates.</label>
        <div className="unsubscribe-reasons">
          <p>Would you mind telling us why you don't want to get email updates anymore?</p>
          <div>
            <div>
              <label>
                <input
                  type="radio"
                  id="not-following"
                  name="other"
                  value="notFollowing"
                  checked={this.state.value === "notFollowing"}
                  onChange={this.handleRadioChange}
                />
                I'm not following that team anymore.
              </label>
            </div>
            <div>
              <label>
                {" "}
                <input
                  type="radio"
                  id="too-many"
                  name="other"
                  value="tooMany"
                  checked={this.state.value === "tooMany"}
                  onChange={this.handleRadioChange}
                />
                Too many emails
              </label>
            </div>
            <div>
              <label>
                {" "}
                <input
                  type="radio"
                  id="not-signed"
                  name="other"
                  value="notSiged"
                  checked={this.state.value === "notSiged"}
                  onChange={this.handleRadioChange}
                />
                I didn't sign up for this
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  id="other"
                  name="other"
                  value="other"
                  checked={this.state.value === "other"}
                  onChange={this.handleRadioChange}
                />
                Other
              </label>
              {<OtherReason />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UnsubscribePage;
