import { Product } from "@/components/typeProduct";
import { Box, Typography, Divider } from "@mui/material";
import AdditionalInfo from "./AdditionalInfo";

export default function ProductInfo({ product }: { product: Product }) {
  const priceWithDiscount = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <>
      <Box
        sx={{
          color: "#e43030",
          mb: "20px",
        }}
      >
        <Typography
          component="p"
          sx={{ display: "flex", alignItems: "center", fontSize: "1.5rem" }}
        >
          <strong>Price: ${priceWithDiscount}</strong>
          <Typography
            component="span"
            sx={{
              textDecoration: "line-through",
              color: "#999",
              ml: 2,
            }}
          >
            ${product.price}
          </Typography>
          <Typography component="span" sx={{ ml: "auto", fontSize: "1.5rem" }}>
            {product.discountPercentage}% off
          </Typography>
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {product.rating && (
        <Typography component="p" sx={{ fontSize: "1.2rem", mb: 1 }}>
          <strong>Rating:</strong> ⭐ {product.rating}
        </Typography>
      )}
      {product.stock && (
        <Typography component="p" sx={{ fontSize: "1.2rem", mb: 1 }}>
          <strong>Stock:</strong> {product.stock} available
        </Typography>
      )}
      {product.brand && (
        <Typography component="p" sx={{ fontSize: "1.2rem", mb: 1 }}>
          <strong>Brand:</strong> {product.brand}
        </Typography>
      )}

      <Divider sx={{ my: 2 }} />

      <AdditionalInfo product={product} />

      <Divider sx={{ my: 2 }} />
    </>
  );
}
