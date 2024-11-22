import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

interface SearchAndSortProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sortOption: string) => void;
}

export default function SearchAndSort({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}: SearchAndSortProps) {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    },
    searchBox: {
      margin: "20px",
      marginRight: "0",
      marginBottom: "0",
      maxWidth: "500px",
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#443b38",
        borderWidth: "1px",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "inherit",
      },
    },
    sortDropdown: {
      margin: "20px",
      marginLeft: "0",
      marginBottom: "0",
      minWidth: "100px",
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#443b38",
        borderWidth: "1px",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "inherit",
      },
    },
  };

  return (
    <Box sx={styles.container}>
      <TextField
        label="Search Products"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={styles.searchBox}
        fullWidth
      />
      <FormControl sx={styles.sortDropdown}>
        <InputLabel sx={{ backgroundColor: "#ecd9d0" }}>Sort By</InputLabel>
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <MenuItem value="noSort">No Sorting</MenuItem>
          <MenuItem value="priceAsc">Price ↑</MenuItem>
          <MenuItem value="priceDesc">Price ↓</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
