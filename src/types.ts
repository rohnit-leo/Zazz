export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  ingredients: string;
  howToUse: string;
  size: string;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutDetails {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  notes?: string;
}
