"use client";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Pagination from "./Pagination";
import usePagination from "./usePagination";
import Item from "./Item";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import { Product } from "@/components/typeProduct";

export default function MainPageContent() {
  const itemsPerPage = 10;

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["listOfProducts"],
    queryFn: async () => {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products;
    },
  });

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    [product.title, product.category, ...product.tags]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase().trim())
  );

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
    paginationArray,
  } = usePagination(filteredProducts, itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) setCurrentPage(Number(savedPage));
  }, [setCurrentPage]);

  if (isLoading) return <Loader />;
  if (isError) return <Error>Error loading products</Error>;

  const styles = {
    searchContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    searchBox: {
      margin: "20px",
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
    productGrid: {
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
      },
      gap: "20px",
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      gridAutoRows: "1fr",
    },
  };

  return (
    <Box>
      <Box sx={styles.searchContainer}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={styles.searchBox}
        />
      </Box>
      {filteredProducts.length > 0 ? (
        <>
          <Box sx={styles.productGrid}>
            {currentItems.map((product) => (
              <Item product={product} key={product.id} />
            ))}
          </Box>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            paginationArray={paginationArray}
          />
        </>
      ) : (
        <Error>Could not find any products</Error>
      )}
    </Box>
  );
}
