import React, { useState } from "react";
import { getTeams } from "../teams";

const CustomSelect = () => {
  const [selectOpenState, setSelectOpenState] = useState(false);
  return (
    <div>
      <input
        type="text"
        id="custom-select"
        autoComplete="off"
        onClick={_ => setSelectOpenState(true)}
        onBlur={_ => setSelectOpenState(false)}
      />
      <div
        id="custom-select-options"
        className={selectOpenState ? "custom-select-options-container shown" : "hidden"}
      >
        <SelectOptions />
      </div>
    </div>
  );
};

const SelectOptions = () =>
  getTeams().map(team => (
    <li className="custom-select-option" key={team.id} value={team.id}>
      {team.name}
    </li>
  ));

export default CustomSelect;
