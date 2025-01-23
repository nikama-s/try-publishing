"use client";
import { Box, Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/components/types/typeProduct";
import ProductInfo from "../product-info";
import Loader from "@/components/loader";
import Error from "@/components/error";
import Reviews from "../all-reviews";
import { useRouter } from "next/navigation";
import {
  buttonBack,
  category,
  description,
  imageBox,
  mainBox,
  title,
} from "./Main.styles";

export default function DetailsPage({ id }: { id: string }) {
  const router = useRouter();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<Product>({
    queryKey: ["product", Number(id)],
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    },
  });

  const handleClick = () => {
    router.push(`/`);
  };

  if (id === undefined) return <Error>Could not find this item</Error>;
  if (isLoading) return <Loader />;
  if (!product || isError) return <Error>Could not find this item</Error>;

  return (
    <Box sx={mainBox}>
      <Box
        component="img"
        src={product.images[0]}
        alt={product.title}
        sx={imageBox}
      />

      <Typography variant="h4" component="h1" sx={title}>
        {product.title}
      </Typography>

      <Typography variant="subtitle1" sx={category}>
        Category: {product.category}
      </Typography>

      <Typography variant="body1" sx={description}>
        {product.description}
      </Typography>

      <ProductInfo product={product} />

      <Reviews product={product} />

      <Button variant="contained" onClick={handleClick} sx={buttonBack}>
        Go Back
      </Button>
    </Box>
  );
}
