import { Box, Typography } from "@mui/material";
import { Product } from "@/components/types/typeProduct";
import { AdditionalInfoCont, infoText } from "./AdditionalInfo.styles";

export default function AdditionalInfo({ product }: { product: Product }) {
  const productDetails = [
    { label: "Weight", value: product.weight ? `${product.weight} g` : null },
    { label: "Warranty", value: product.warrantyInformation },
    { label: "Shipping Info", value: product.shippingInformation },
    { label: "Return Policy", value: product.returnPolicy },
    { label: "Minimum Order Quantity", value: product.minimumOrderQuantity },
  ];

  return (
    <Box sx={AdditionalInfoCont}>
      {productDetails.map(
        ({ label, value }) =>
          value && (
            <Typography component="p" sx={infoText} key={label}>
              <strong>{label}:</strong> {value}
            </Typography>
          )
      )}
    </Box>
  );
}
