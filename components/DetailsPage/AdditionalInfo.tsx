import { Box, Typography } from "@mui/material";
import { Product } from "@/components/typeProduct";

export default function AdditionalInfo({ product }: { product: Product }) {
  const productDetails = [
    { label: "Weight", value: product.weight ? `${product.weight} g` : null },
    { label: "Warranty", value: product.warrantyInformation },
    { label: "Shipping Info", value: product.shippingInformation },
    { label: "Return Policy", value: product.returnPolicy },
    { label: "Minimum Order Quantity", value: product.minimumOrderQuantity },
  ];

  return (
    <Box sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
      {productDetails.map(
        ({ label, value }) =>
          value && (
            <Typography component="p" sx={{ mb: 1 }} key={label}>
              <strong>{label}:</strong> {value}
            </Typography>
          )
      )}
    </Box>
  );
}
