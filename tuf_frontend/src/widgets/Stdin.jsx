import React from "react";
import classes from "styles/widgets/stdin.module.css"
const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={classes.stdin}
      ></textarea>
    </>
  );
};

export default CustomInput;
