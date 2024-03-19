import React from "react";
import Select from "react-select";
import { customStyles } from "constants/customStyles";
import { languageOptions } from "constants/languageOptions";

const LanguagesDropdown = ({language, onSelectChange }) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      value={language}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;