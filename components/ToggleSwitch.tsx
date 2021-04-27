import React, { useState } from 'react'

const ToggleSwitch = ({ id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled }) => {
  const [toggleState, setToggleState] = useState("off");

  const toggle = () => {
    setToggleState(toggleState === "off" ? "on" : "off");
  };

  return (
    <div className={"toggle-switch" + (small ? " small-switch" : "")}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label
          className="toggle-switch-label"
          tabIndex={disabled ? -1 : 1}
          htmlFor={id}
        >
          <span
            className={
              disabled
                ? "toggle-switch-inner toggle-switch-disabled"
                : "toggle-switch-inner"
            }
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
            tabIndex={-1}
          />
          <span
            className={
              disabled
                ? "toggle-switch-switch toggle-switch-disabled"
                : "toggle-switch-switch"
            }
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  )
}

ToggleSwitch.defaultProps = {
  optionLabels: ["Yes", "No"]
};

export default ToggleSwitch