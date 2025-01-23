export const getButtonStyles = (isActive: boolean) => ({
  margin: "0 5px",
  backgroundColor: isActive ? "#eaab96" : "#eaeaea",
  color: isActive ? "#fff" : "#000",
  width: "40px",
  minWidth: "auto",
  borderRadius: "10px",
  "@media (max-width: 600px)": {
    width: "30px",
  },
});

export const boxStyle = { textAlign: "center", mt: 2, mb: 3 };
export const itemStyle = { margin: "0 5px" };
