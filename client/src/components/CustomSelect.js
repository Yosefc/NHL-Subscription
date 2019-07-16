import React, { useState } from "react";
import { getTeams } from "../teams";

const CustomSelect = () => {
  const [selectOpenState, setSelectOpenState] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  return (
    <div>
      <input
        tabIndex="0"
        type="text"
        id="custom-select"
        autoComplete="off"
        value={selectedTeams}
        onClick={_ => setSelectOpenState(true)}
      />
      <div
        id="custom-select-options"
        className={selectOpenState ? "custom-select-options-container shown" : "hidden"}
        tabIndex="1"
        onBlur={_ => setSelectOpenState(false)}
      >
        {getTeams().map(team => (
          <li
            className="custom-select-option"
            key={team.id}
            value={team.id}
            onClick={e => setSelectedTeams([...selectedTeams, e.target.innerHTML])}
          >
            {team.name}
          </li>
        ))}
      </div>
    </div>
  );
};

// const SelectOptions = ()

export default CustomSelect;
