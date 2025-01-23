import { Product } from "@/components/types/typeProduct";
import { Box, Typography } from "@mui/material";
import Review from "../review";
import { title } from "./AllReviews.styles";

export default function Reviews({ product }: { product: Product }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" component="h2" sx={title}>
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
