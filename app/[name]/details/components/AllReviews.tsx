import { Product } from "@/components/typeProduct";
import { Box, Typography } from "@mui/material";
import Review from "./Review";

export default function Reviews({ product }: { product: Product }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Customer Reviews
      </Typography>

      {product.reviews.length ? (
        product.reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))
      ) : (
        <Typography variant="body1">No reviews yet.</Typography>
      )}
    </Box>
  );
}
