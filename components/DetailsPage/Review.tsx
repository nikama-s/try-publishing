import { Typography, Paper } from "@mui/material";

interface Review {
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Review({ review }: { review: Review }) {
  return (
    <Paper
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
      <Typography variant="caption" component="p" sx={{ mt: 1, color: "#888" }}>
        {new Date(review.date).toLocaleDateString()}
      </Typography>
    </Paper>
  );
}
