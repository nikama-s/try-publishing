import { Box, Button, Typography } from "@mui/material";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  paginationArray: (number | string)[];
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  paginationArray,
}: PaginationProps) {
  const buttonStyles = {
    margin: "0 5px",
    backgroundColor: "#eaeaea",
    color: "#000",
    width: "40px",
    minWidth: "auto",
    borderRadius: "10px",
    "@media (max-width: 600px)": {
      width: "30px",
    },
  };

  const activeButtonStyles = {
    ...buttonStyles,
    backgroundColor: "#eaab96",
    color: "#fff",
  };

  return (
    <Box sx={{ textAlign: "center", mt: 2, mb: 3 }}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={buttonStyles}
      >
        {"<"}
      </Button>
      {paginationArray.map((item, index) =>
        typeof item === "number" ? (
          <Button
            key={index}
            onClick={() => onPageChange(item)}
            sx={currentPage === item ? activeButtonStyles : buttonStyles}
          >
            {item}
          </Button>
        ) : (
          <Typography key={index} component="span" sx={{ margin: "0 5px" }}>
            {item}
          </Typography>
        )
      )}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={buttonStyles}
      >
        {">"}
      </Button>
    </Box>
  );
}
