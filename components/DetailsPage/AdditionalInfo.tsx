import { Box, Typography } from "@mui/material";
import { Product } from "@/components/typeProduct";

export default function AdditionalInfo({ product }: { product: Product }) {
  return (
    <Box sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
      {product.weight && (
        <Typography component="p" sx={{ mb: 1 }}>
          <strong>Weight:</strong> {product.weight} g
        </Typography>
      )}
      {product.warrantyInformation && (
        <Typography component="p" sx={{ mb: 1 }}>
          <strong>Warranty:</strong> {product.warrantyInformation}
        </Typography>
      )}
      {product.shippingInformation && (
        <Typography component="p" sx={{ mb: 1 }}>
          <strong>Shipping Info:</strong> {product.shippingInformation}
        </Typography>
      )}
      {product.returnPolicy && (
        <Typography component="p" sx={{ mb: 1 }}>
          <strong>Return Policy:</strong> {product.returnPolicy}
        </Typography>
      )}
      {product.minimumOrderQuantity && (
        <Typography component="p" sx={{ mb: 1 }}>
          <strong>Minimum Order Quantity:</strong>{" "}
          {product.minimumOrderQuantity}
        </Typography>
      )}
    </Box>
  );
}
