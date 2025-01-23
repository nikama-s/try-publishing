import { Typography, Paper } from "@mui/material";
import { date, reviewContainer, text } from "./Review.styles";

interface Review {
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Review({ review }: { review: Review }) {
  return (
    <Paper elevation={1} sx={reviewContainer}>
      <Typography variant="subtitle1" component="p">
        <strong>{review.reviewerName}</strong> ({review.rating} ⭐)
      </Typography>
      <Typography variant="body2" sx={text}>
        {review.comment}
      </Typography>
      <Typography variant="caption" component="p" sx={date}>
        {new Date(review.date).toLocaleDateString()}
      </Typography>
    </Paper>
  );
}
