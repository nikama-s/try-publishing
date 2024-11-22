export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  reviews: Reviews[];
  returnPolicy: string;
  minimumOrderQuantity: string;
  tags: string[];
}

interface Reviews {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
