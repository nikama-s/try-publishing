import { Product } from "@/components/types/typeProduct";
import { Box, Typography, Divider } from "@mui/material";
import AdditionalInfo from "../additional-info";
import { details, discount, infoBox, price } from "./ProductInfo.styles";

export default function ProductInfo({ product }: { product: Product }) {
  const priceWithDiscount = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  const productDetails = [
    { label: "Rating", value: product.rating && `⭐ ${product.rating}` },
    { label: "Stock", value: product.stock && `${product.stock} available` },
    { label: "Brand", value: product.brand },
  ];

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Typography component="p" sx={infoBox}>
          <strong>Price: ${priceWithDiscount}</strong>
          <Typography component="span" sx={price}>
            ${product.price}
          </Typography>
          <Typography component="span" sx={discount}>
            {product.discountPercentage}% off
          </Typography>
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {productDetails.map(
        ({ label, value }) =>
          value && (
            <Typography key={label} component="p" sx={details}>
              <strong>{label}:</strong> {value}
            </Typography>
          )
      )}

      <Divider sx={{ my: 2 }} />

      <AdditionalInfo product={product} />

      <Divider sx={{ my: 2 }} />
    </>
  );
}
