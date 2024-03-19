export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    maxWidth: "20rem",
    minWidth: "12rem",
    borderRadius: "5px",
    color: "#cc3833",
    fontSize: "1.4rem",
    lineHeight: "1.75rem",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    border: "2px solid #000000",
    boxShadow: "3px 3px 0px 0px #cc3833;",
    ":hover": {
      border: "2px solid #000000",
      boxShadow: "none",
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: "#000",
      fontSize: "1.4rem",
      lineHeight: "1.75rem",
      width: "100%",
      background: "#fff",
      ":hover": {
        backgroundColor: "rgb(243 244 246)",
        color: "#000",
        cursor: "pointer",
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: "#fff",
      maxWidth: "20rem",
      border: "2px solid #000000",
      borderRadius: "5px",
      boxShadow: "3px 3px 0px 0px #cc3833;",
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#000",
      fontSize: "1.4rem",
      lineHeight: "1.75rem",
    };
  },
};
