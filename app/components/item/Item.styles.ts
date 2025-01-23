export const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      backgroundColor: "#eaeaea",
      transform: "scale(1.015)",
    },
  },
  image: {
    maxWidth: { xs: "200px", md: "300px" },
    maxHeight: { xs: "200px", md: "300px" },
    objectFit: "contain",
    display: "block",
    margin: "0 auto",
  },
  category: {
    color: "#999",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  price: {
    color: "#e43030",
    fontSize: "1.2rem",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#999",
    marginLeft: "10px",
    fontSize: "1rem",
  },
};
