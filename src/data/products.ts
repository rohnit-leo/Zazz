import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'hydrating-shampoo',
    name: 'Hydrating Shampoo',
    category: 'Hair Care',
    price: 1499,
    originalPrice: 1899,
    image: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/products/WhatsApp%20Image%202026-07-27%20at%2012.50.12%20PM.jpeg',
    shortDesc: 'Salon-grade moisture replenishment shampoo for silk softness, high shine, and scalp health.',
    fullDesc: 'ZAZZ Professional Hydrating Shampoo is an ultra-nourishing, sulfate-free hair cleanser engineered by hair master stylists. Infused with natural botanical extracts, pro-vitamin B5, and essential proteins, it deeply hydrates dry or chemically treated hair without weighing it down. Leaves hair feeling satin-smooth, touchably soft, and radiant.',
    benefits: [
      'Deep moisture lock for dry, color-treated, or frizz-prone hair',
      'Sulfate-free & paraben-free gentle luxury formula',
      'Restores natural keratin strength and mirror shine',
      'Calms dry scalp while maintaining ideal sebum balance'
    ],
    ingredients: 'Aqua, Sodium Cocoyl Isethionate, Hydrolyzed Wheat Protein, Panthenol (Pro-Vitamin B5), Argania Spinosa (Argan) Kernel Oil, Aloe Barbadensis Leaf Juice, Citric Acid, Essential Oils Fragrance.',
    howToUse: 'Apply a quarter-sized amount to wet hair. Massage gently into scalp and working through ends until a rich lather forms. Rinse thoroughly with lukewarm water. Follow with ZAZZ Moisture Conditioner.',
    size: '250 ml / 8.4 fl. oz',
    rating: 4.9,
    reviewsCount: 128,
    isBestseller: true
  },
  {
    id: 'shampoo-conditioner-combo',
    name: 'Shampoo Plus Conditioner Combo',
    category: 'Hair Care Bundles',
    price: 3000,
    originalPrice: 3800,
    image: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/products/WhatsApp%20Image%202026-07-27%20at%2012.50.41%20PM.jpeg',
    shortDesc: 'Complete dual salon kit: Hydrating Shampoo + Moisture Sealing Conditioner for ultimate glass hair transformation.',
    fullDesc: 'The ultimate professional duo for total hair transformation. The ZAZZ Hydrating Shampoo gently purifies while the companion Moisture Sealing Conditioner seals the hair cuticle to lock in hydration, eliminate humidity-induced frizz, and deliver intense glass-like reflection. Recommended for daily salon ritual care.',
    benefits: [
      'Complete 2-step salon treatment system for home care',
      'Up to 80% reduction in frizz and split-end breakage',
      'Cuticle smoothing technology for effortless detangling',
      'Long-lasting hair fragrance and luminous mirror finish'
    ],
    ingredients: 'Shampoo: Hydrolyzed Keratin, Argan Oil, Panthenol. Conditioner: Shea Butter, Macadamia Seed Oil, Behentrimonium Chloride, Vitamin E Tocopherol.',
    howToUse: 'Step 1: Cleanse thoroughly with ZAZZ Hydrating Shampoo and rinse. Step 2: Apply Moisture Conditioner evenly from mid-lengths to ends. Leave on for 3–5 minutes. Rinse with cool water for maximum shine.',
    size: '2 x 250 ml / Duo Pack',
    rating: 5.0,
    reviewsCount: 210,
    isBestseller: true
  }
];
