import React, { useState } from "react";
import { options } from "./Data/Data";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Choose any");
  //   const options = ["Per expenses", "vue", "angular"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected} <i className="bi bi-caret-down-fill"></i>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={(e) => {
                setSelected(option.place);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option.place}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
