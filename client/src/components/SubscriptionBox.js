import React from "react";
import CustomSelect from "./CustomSelect";

const SubscriptionBox = ({ path }) => {
  const btnText = _ => (path.match(/unsubscribe/) ? "Unsubcribe" : "Subscribe");
  return (
    <div>
      <form>
        <div>
          <CustomSelect />
        </div>
        <input type="email" placeholder="Enter email" />
        <button>{btnText()}</button>
      </form>
    </div>
  );
};

export default SubscriptionBox;
