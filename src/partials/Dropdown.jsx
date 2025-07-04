import React from "react";

export const Dropdown = ({ title, options, func }) => {
  return (
    <div className="select mb-3">
      <select onChange={func} defaultValue="0" name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
