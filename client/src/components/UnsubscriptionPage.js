import React, { Component } from 'react';
import SubscriptionBox from "./SubscriptionBox";

class UnsubscriptionPage extends Component {
    state = {
        checked: false,
        value: ""
    }

    handleRadioChange = e => {
        let a = false
        if (e.target.id === "other") a = !a
        this.setState({
            checked: a,
            value: e.target.value
        })
    }

    render() {
        const OtherReason = _ => this.state.checked ? <input type="text" placeholder="Please tell use why.." /> : null
        return (
            <div>
                <article>
                    <p>
                        Oh man...
                    <br />
                        It's us, wasn't it..
                </p>
                </article>
                <SubscriptionBox path={window.location.pathname} />
                <input type="radio" id="huey" name="drone" value="huey" />
                <label htmlFor="huey">Unsubscribe me from all team updates.</label>
                <div>
                    <p>Would you mind telling us why you don't want to get email updates anymore?</p>
                    <div>
                        <input type="radio" id="not-following" name="other" value="notFollowing" checked={this.state.value === "notFollowing"} onChange={this.handleRadioChange} />
                        <label htmlFor="notFollowing">I'm not following that team anymore.</label>

                        <input type="radio" id="too-many" name="other" value="tooMany" checked={this.state.value === "tooMany"} onChange={this.handleRadioChange} />
                        <label htmlFor="tooMany">Too many emails</label>

                        <input type="radio" id="not-signed" name="other" value="notSiged" checked={this.state.value === "notSiged"} onChange={this.handleRadioChange} />
                        <label htmlFor="notSiged">I didn't sign up for this</label>

                        <input type="radio" id="other" name="other" value="other" checked={this.state.value === "other"} onChange={this.handleRadioChange} />
                        <label htmlFor="other">Other</label>
                        {<OtherReason />}
                    </div>
                </div>
            </div>
        );
    }
}

//const OtherReason = _ =>  this.state.checked ? <input type="text" placeholder="Please tell use why.." /> : null

// const OtherReason = state => { if (state.checked) { console.log("state.checked"); return <input type="text" placeholder="Please tell use why.." /> } else { return null } }

export default UnsubscriptionPage