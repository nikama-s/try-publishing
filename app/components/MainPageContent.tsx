"use client";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Pagination from "./Pagination";
import usePagination from "./usePagination";
import Item from "./Item";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import SearchAndSort from "./SearchAndSort";
import { Product } from "@/components/types/typeProduct";

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
  const [sortBy, setSortBy] = useState("noSort");

  const filteredProducts = products.filter((product) =>
    [product.title, product.category, ...product.tags]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase().trim())
  );

  const sortedProducts = sortProducts(filteredProducts, sortBy);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
    paginationArray,
  } = usePagination(sortedProducts, itemsPerPage);

  function sortProducts(productArr: Product[], sortOption: string): Product[] {
    if (sortOption === "noSort") return productArr;

    const sortedProducts = [...productArr];
    switch (sortOption) {
      case "priceAsc":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return sortedProducts.sort((a, b) => b.price - a.price);
      case "rating":
        return sortedProducts.sort((a, b) => b.rating - a.rating);
      default:
        return productArr;
    }
  }

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
    productGrid: {
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr",
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
      <SearchAndSort
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {sortedProducts.length > 0 ? (
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
