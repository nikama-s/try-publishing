export const mainBox = {
  maxWidth: "1000px",
  margin: "20px auto",
  padding: 2,
  backgroundColor: "#f1f1f1",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

export const imageBox = {
  maxWidth: { xs: "300px", md: "500px" },
  maxHeight: { xs: "300px", md: "500px" },
  objectFit: "contain",
  display: "block",
  margin: "0 auto",
};

export const title = {
  textAlign: "center",
  mb: 1,
  fontSize: { xs: "1.5rem", md: "2rem" },
};

export const category = { textAlign: "center", fontStyle: "italic", mb: 2 };
export const description = { fontStyle: "italic", lineHeight: 1.5, mb: 3 };
export const buttonBack = {
  mt: 3,
  backgroundColor: "#eaab96",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: "bold",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    backgroundColor: "#c78379",
  },
};
