import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styles } from "./SearchAndSort.styles";

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
        <InputLabel sx={styles.input}>Sort By</InputLabel>
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
