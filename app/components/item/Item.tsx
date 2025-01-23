import { useRouter } from "next/navigation";
import { Product } from "@/components/types/typeProduct";
import { Box, Typography } from "@mui/material";
import { styles } from "./Item.styles";

export default function Item({ product }: { product: Product }) {
  const router = useRouter();

  const handleItemClick = () => {
    const noSpaces = product.title.split(" ").join("");
    const formattedTitle = noSpaces.split("-").join("");
    router.push(`/${formattedTitle}-${product.id}/details`);
  };

  const priceWithDiscount = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <Box onClick={handleItemClick} sx={styles.container}>
      <Box
        component="img"
        src={product.images[0]}
        alt={product.title}
        sx={styles.image}
      />
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        {product.title}
      </Typography>
      <Typography>{product.brand}</Typography>
      <Typography variant="body2" sx={styles.category}>
        {product.category}
      </Typography>
      <Box sx={styles.price}>
        Price: ${priceWithDiscount}{" "}
        <Typography component="span" sx={styles.originalPrice}>
          ${product.price}
        </Typography>
      </Box>
      <Typography variant="body2">Rating: {product.rating} ⭐</Typography>
    </Box>
  );
}
