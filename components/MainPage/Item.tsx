import { useRouter } from "next/navigation";
import { Product } from "../typeProduct";
import { Box, Typography } from "@mui/material";

export default function Item({ product }: { product: Product }) {
  const router = useRouter();

  const handleItemClick = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(product)); // Save to localStorage
    router.push("/details");
  };

  const priceWithDiscount = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  const styles = {
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

  return (
    <Box onClick={handleItemClick} sx={styles.container}>
      <Box
        component="img"
        src={product.images[0]}
        alt={product.title}
        sx={styles.image}
      />
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        {product.title}
      </Typography>
      <Typography>{product.brand}</Typography>
      <Typography variant="body2" sx={styles.category}>
        {product.category}
      </Typography>
      <Box sx={styles.price}>
        Price: ${priceWithDiscount}{" "}
        <Typography component="span" sx={styles.originalPrice}>
          ${product.price}
        </Typography>
      </Box>
      <Typography variant="body2">Rating: {product.rating} ⭐</Typography>
    </Box>
  );
}
