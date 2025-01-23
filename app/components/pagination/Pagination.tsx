import { Box, Button, Typography } from "@mui/material";
import { boxStyle, getButtonStyles, itemStyle } from "./Pagination.styles";

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
  return (
    <Box sx={boxStyle}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={getButtonStyles(false)}
      >
        {"<"}
      </Button>
      {paginationArray.map((item, index) =>
        typeof item === "number" ? (
          <Button
            key={index}
            onClick={() => onPageChange(item)}
            sx={getButtonStyles(currentPage === item)}
          >
            {item}
          </Button>
        ) : (
          <Typography key={index} component="span" sx={itemStyle}>
            {item}
          </Typography>
        )
      )}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={getButtonStyles(false)}
      >
        {">"}
      </Button>
    </Box>
  );
}
