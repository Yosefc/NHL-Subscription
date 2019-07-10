import React, { useState } from "react";
import SubscriptionBox from "./SubscriptionBox";

function UnsubscribePage() {
  const [isChecked, setChecked] = useState("not interested");
  const [otherReason, setOtherReason] = useState("");
  return (
    <div>
      <p>
        Oh man...
        <br />
        It's us, wasn't it..
      </p>
      <SubscriptionBox path={window.location.pathname} />
      <section id="unsubscribe-reasons">
        <div>
          <label>
            <input
              type="radio"
              name="unsubscribe-reason"
              value="not interested"
              checked={isChecked === "not interested"}
              onChange={e => setChecked(e.target.value)}
            />
            I don't want interesting updates any more
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="unsubscribe-reason"
              value="did not sign up"
              checked={isChecked === "did not sign up"}
              onChange={e => setChecked(e.target.value)}
            />
            I didn't sign up for this
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="unsubscribe-reason"
              value="too many emails"
              checked={isChecked === "too many emails"}
              onChange={e => setChecked(e.target.value)}
            />
            I'm getting too many emails from you
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="unsubscribe-reason"
              value="other"
              checked={isChecked === "other"}
              onChange={e => setChecked(e.target.value)}
            />
            Other
          </label>
          {isChecked === "other" ? (
            <input type="text" value={otherReason} onChange={e => setOtherReason(e.target.value)} />
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default UnsubscribePage;
