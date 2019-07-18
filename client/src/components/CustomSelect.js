import React, { useState, useRef, useEffect } from "react";
import { getTeams } from "../teams";

const CustomSelect = () => {
  const [selectOpenState, setSelectOpenState] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    if (selectOpenState) {
      inputRef.current.focus();
    }
  }, [selectOpenState]);

  const SelectOptions = () =>
    getTeams().map(team => (
      <li
        className="custom-select-option"
        key={team.id}
        value={team.id}
        onClick={e => setSelectedTeams([...selectedTeams, e.target.innerHTML])}
      >
        {team.name}
      </li>
    ));

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
        ref={inputRef}
        onBlur={_ => setSelectOpenState(false)}
      >
        <SelectOptions />
      </div>
    </div>
  );
};

// const SelectOptions = ()

export default CustomSelect;
