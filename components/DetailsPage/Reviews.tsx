import { Product } from "@/components/typeProduct";
import { Box, Typography, Paper } from "@mui/material";

export default function Reviews({ product }: { product: Product }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Customer Reviews
      </Typography>

      {product.reviews.length ? (
        product.reviews.map((review, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              mb: 2,
              p: 2,
              border: "1px solid #cecece",
              borderRadius: "8px",
              backgroundColor: "#f1f1f1",
            }}
          >
            <Typography variant="subtitle1" component="p">
              <strong>{review.reviewerName}</strong> ({review.rating} ⭐)
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {review.comment}
            </Typography>
            <Typography
              variant="caption"
              component="p"
              sx={{ mt: 1, color: "#888" }}
            >
              {new Date(review.date).toLocaleDateString()}
            </Typography>
          </Paper>
        ))
      ) : (
        <Typography variant="body1">No reviews yet.</Typography>
      )}
    </Box>
  );
}
