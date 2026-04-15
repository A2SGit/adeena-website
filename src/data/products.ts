export interface Product {
  name: string;
  price: string;
  image: string;
  alt: string;
  category: string;
}

export const products: Product[] = [
  {
    name: "Emerald Mysore Silk Saree",
    price: "₹ 18,499",
    image: "/images/mysore_silk_1776250823652.png",
    alt: "Beautiful Mysore silk saree in rich emerald green",
    category: "Mysore Silk",
  },
  {
    name: "Classic Navy Gadwal",
    price: "₹ 12,200",
    image: "/images/gadwal_handloom_1776250838246.png",
    alt: "A beautifully woven Gadwal handloom saree in dark navy blue",
    category: "Gadwal",
  },
  {
    name: "Burgundy Bridal Kanjeevaram",
    price: "₹ 62,800",
    image: "/images/bridal_burgundy_1776250853724.png",
    alt: "Luxurious bridal Kanjeevaram silk saree with heavy gold zari",
    category: "Kanjeevaram",
  },
  {
    name: "Pastel Uppada Jamdani",
    price: "₹ 24,500",
    image: "/images/uppada_jamdani_1776250899981.png",
    alt: "Premium Uppada Jamdani saree with floral motifs",
    category: "Jamdani",
  },
  {
    name: "Mustard Chettinad Cotton",
    price: "₹ 4,200",
    image: "/images/traditional_cotton_1776250917741.png",
    alt: "Vibrant Chettinad cotton saree in mustard and maroon",
    category: "Cotton",
  },
  {
    name: "Ivory Gold Border Silk",
    price: "₹ 35,999",
    image: "/images/ivory_silk_1776250932357.png",
    alt: "Elegant pure ivory white silk saree with gold border",
    category: "Kanjeevaram",
  },
];

export const filterCategories = [
  "All Sarees",
  "Kanjeevaram",
  "Mysore Silk",
  "Gadwal",
  "Jamdani",
  "Cotton",
];
