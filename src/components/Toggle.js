import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";
import { setTheme } from "../utils/theme";
import "./Toggle.css";

function Toggle({ parentCallback }) {
  const [togClass, setTogClass] = useState("light");

  const handleOnClick = () => {
    const storedTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";

    setTheme(storedTheme);
    setTogClass(storedTheme);
    parentCallback(storedTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTogClass(storedTheme);
  }, []);

  return (
    <div className="container-toggle">
      <label>
        <input
          type="checkbox"
          id="toggle-checkbox"
          className="toggle-checkbox"
          onChange={handleOnClick}
          checked={togClass === "dark"}
          aria-label="toggle-checkbox"
        />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <SunIcon color="#ffbb52" className="sun-icon" />
          </div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper">
            <MoonIcon color="white" className="moon-icon" />
          </div>
        </div>
      </label>
    </div>
  );
}

Toggle.propTypes = {
  parentCallback: PropTypes.func,
};

export default Toggle;
