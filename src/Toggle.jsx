import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const Toggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button className="mt-3 h-8 w-8 " onClick={toggleDarkMode}>
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default Toggle;
