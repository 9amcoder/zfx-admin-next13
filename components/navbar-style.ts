
export const styles = {
    flex: {
      flexDirection: "column",
      alignItems: "stretch",
    },
    "flex:first-child": {
      marginBottom: "1rem",
    },
  };

// create a CSS module
const navbarStyles = {
  flex: styles.flex,
  "&:first-child": styles["flex:first-child"],
};

export default navbarStyles;