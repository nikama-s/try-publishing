export const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  searchBox: {
    margin: "20px",
    marginRight: "0",
    marginBottom: "0",
    maxWidth: "500px",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#443b38",
      borderWidth: "1px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "inherit",
    },
  },
  sortDropdown: {
    margin: "20px",
    marginLeft: "0",
    marginBottom: "0",
    minWidth: "100px",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#443b38",
      borderWidth: "1px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "inherit",
    },
  },
  input: { backgroundColor: "#ecd9d0" },
};
