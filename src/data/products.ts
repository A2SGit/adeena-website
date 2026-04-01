export interface Product {
  name: string;
  price: string;
  image: string;
  alt: string;
  category: string;
}

export const products: Product[] = [
  {
    name: "Emerald Silk Anarkali",
    price: "₹ 8,499",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJODGrz5Pv7P665Z63egKNMV-Ps6wv6i75yVZoDDALoEaP1Bc7kR7TWzG-ZxF7cS0IzOq24Mey0gQn3eB3cPqnzW-3u17OA78WFp4ZWoLjieMr7scezdq033l1--7fKiWMWJYwtYBT9aSty7y1EPJIaTQNFsSTI641dNBQCRH_WAbqHn1HsQxor6hhRM2a9_nkE8CRz7_tOQXOIaXh4gGA40ZkW5S1tZAtNdInLtBI3cqM19x84jarxLzHH8ouzUYLg-meOA2qpg_T",
    alt: "Stunning model wearing a silk emerald green Kurti with intricate gold embroidery",
    category: "Kurtis",
  },
  {
    name: "Blush Zardosi Suit",
    price: "₹ 12,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0CmgzTjAHZk44pumXyVMeWnEuhJTaXzGPsayeAAuxsmNNy91sz6A17oM_yDtHQTtIprTa5_Lj1iJS_siDnc7hXVhk8ZAjhMGpstiTTwy6HiOsZRFbgcDh_2F0kC0MSPtaLkwCQ6eybwSzPx7ykhz1F0l6o4jpd3U_tUW3wp3YjIOfCFJKUSGjeU0rS463pMUSXbJwCHC19UGvzeuL4uT2C0ZXlV_3JPNOJHjgfZx0ubjCVcNU-TE_DFGZmyABRN4HSjy6AnY09uKh",
    alt: "Elegant blush pink suit with silver zardosi work on the neckline",
    category: "Suits",
  },
  {
    name: "Midnight Co-ord Set",
    price: "₹ 6,800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB36H9r_gahTa0K-KF7sBCPbkrYlWkHjBQCNyh10mNh5Fj2XBzqA_fRqUs-1DXYSyAUYU8o6wm5uKmFaxr6zrl9SGgjH7N8dzFNQv67MhQxsOmLudAqf3R8FsnPOesdzagfWSTtXmdqONILdm7PiI1gxJ2musiehzkNnfbvxjB1PXKPYOt4Zw7ilCxOk63IlZdFS8-wtTlj8bThQqg9YV8zM7_atfQThSnUnqCZzstYMugy4mMnSiIxz_B9-peHzWgqepVIw8h7kkS7",
    alt: "Modern co-ord set in midnight blue with abstract gold block prints",
    category: "Co-ords",
  },
  {
    name: "Crimson Heritage Set",
    price: "₹ 24,500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDame0ehyIqwu9iRZGOP1oDQI2GfEbd23_pOSO47w8yuNiWe_oQhpTRvScs9Jw2lYMOg-4mdnaHorherVPt01ZgLrwMJckkz_LvsFATaUhklyLhlKyPrWL-8kryoGqXD551R3ZEFqPOQHj4RDJjHtUqW6QAGx2OPRahXKAkAX1vsm43RaCDt0Q-mcviJkFtquMVps4dooVT1XU0wXgbBsajYs2oxXj4yGqNfZv9SPfeXI4PpHJqJhYlz3TQgnA7Wg0eROqFFvZrKbDR",
    alt: "Traditional red bridal festive wear with heavy kundan work",
    category: "Festive",
  },
  {
    name: "Ivory Meadow Kurti",
    price: "₹ 4,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC48bhSQiUIyhl2u4oZzPpQ9NT5jZP8OhsKEDPunuWp2ZUKm8REImkd_iSPa27yZwVI9BG63WRi-GSq9Qsy7M_B2H-rQG9d1gWwScGMKxrXcjQdjxt4IM3O-3MhsBLqJLuerK2Y3gRctKLOWr09RZOYpJyyn7it4pWCQTL8r9TFWt2rcK9fu3m1ePUNgsBdPLIlRDn4FqeOTRZ73aZYjKir7CvL18-fbKnjBnCPiUYFHyG_KpmWhLh4oA3Re5Tgr_vWlKdmLNgxnGFC",
    alt: "Light ivory cotton kurti with delicate pastel floral prints",
    category: "Kurtis",
  },
  {
    name: "Velvet Royal Suit",
    price: "₹ 15,999",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0-qJwYD-ehcWj-qOD4wW7tjt6SYWEy1bEqVxdrpXoDe3IXHwORS8LgeGJHeh73LO2eIfb90LfpFGk4AGeTSvLRsQJJDq1pMOc1MYvENYB5Ax7MScQLN99KDpQcUjLWrFLN8VGR4PVP3p_BzTP-xZdfAS73m-hHHx01y4FjrGRfgIFmPyU9RP--_dwCO9ujAeJeU-3Av8J5CMi3ZLxHXvcFi2N1ukyX5c0HfOOR0KeNpkXdB7xLqXRfkZmGetCXS0KXTnMhD-e8Slm",
    alt: "Deep violet velvet suit with silver gota patti borders",
    category: "Suits",
  },
];

export const filterCategories = [
  "All Ensembles",
  "Kurtis",
  "Suits",
  "Co-ords",
  "Festive",
];
