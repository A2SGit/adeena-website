export interface Store {
  name: string;
  badge: string;
  address: string;
  hours: string;
  image: string;
  imageAlt: string;
  mapImage: string;
}

export const stores: Store[] = [
  {
    name: "Tolichowki",
    badge: "Est. 2018",
    address:
      "H.No 9-4-84/2, Opposite Galaxy Theatre, Tolichowki Main Road, Hyderabad, 500008",
    hours: "Mon - Sat: 11:00 AM - 10:00 PM\nSun: 12:00 PM - 09:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrWQNYKUZN70lkKlLV5fVwUhwxDVVxQwOqngYsOcEZbtBbNKsL4DY7EFJC4gofftrFCwelQw7585HSYc75vx1QkVAqaOyGFnEbLBHDU4SqXFWRcQUeZkmkj4aHScIu1j7dMcxdkFIfgkDAdKgY-XowqvdiP-7pUnmnZFAcaZg3D4IL_3UGIu112A9g4yW9nTk4GeFyz3k7SD-zDpTo6ziCADWGydrp58DjouTSLTxgkh-5IjPOTsyzE1MOMkWnzFFtHPq6ELsqDRtH",
    imageAlt:
      "Luxurious boutique interior with warm golden lighting in Tolichowki",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2khwYGe44EnFfuHXDhiWpRMABaabgK0xk2lyej2Wk-RxZVSBvlt8vOXc2gHyAVCSUCD7wvRZX1UKLNm0nCI5-quJfMEPw-ZpG5uiVo9HfBv8pI1esRqw1rdr9T_d6fyRxUBbTnEDDixb_ZRS1oZebrGihLDrpvr5EBv_Pw3aeoo17P4g9EU7BTc5cRVuYNHEFW2KYAlTEehg_1hzvZYDLoOB7zdg1t4EXNV38gynJJ_Lw7zhnMZQAZeUkbIxL-OCxwpJOL-ZyGtQY",
  },
  {
    name: "Nampally",
    badge: "Flagship",
    address:
      "Station Road, Nampally Market Area, Adjacent to Heritage Building, Hyderabad, 500001",
    hours: "Mon - Sat: 10:30 AM - 10:00 PM\nSun: 01:00 PM - 09:30 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdZwQA-fbOCSEoA_4iSi8d2OQDZsEn2S089BsPLSsTMIplKYwYPWsSyFItlALrnIB70AnpNSlYaRDMv56gRmxss4h1U1tyTQ9ItW7kdPEsmnSwX4GIpQGAIMWtrOTuJM9x90HJhlzW0AaBYwBzWBN26ab9ftXQ_PRsQIGZCsQ_DqLk96_7gFx9S_vkVIEYFBRcANCQzD0XygYYEB9FM09MOFypAfBm0uV-OS1xcWxZy3MGwm4RsL3LCvVmxwYKUWQ0DAqbZrLq0Yhn",
    imageAlt:
      "Elegant heritage store interior in Nampally with archways and premium ethnic wear collections",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC71a5mH2bDHi7wpSwPmlG14h8JKzN3ycbl90fhwZJvW_7xXg5YyYfhoMTEH3JxERymsMdkxJIw9jf96bojmsxycOXA2yD6WeEl8B1ERlfAzRxBEMe0e3VuUa4-RpDDmghsBEs23Sv5ER0_buK4BnJYZgPX1LKcLfVbSbZVVL53Q_M5ut3tsZSnN0mCO6NgJVBICfQFeTjqSf6rXvgjac26Lv2GjiXVvtOLF0Xsk-laYryW7XB9gRr3CLYBqYUoT8K2I99nZHbASoUd",
  },
  {
    name: "Charminar",
    badge: "Heritage",
    address:
      "Laad Bazaar, Near Charminar Entrance, Historic District, Hyderabad, 500002",
    hours: "Mon - Sat: 11:30 AM - 11:00 PM\nSun: 03:00 PM - 10:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjOORnUpoC1DbFwyWe6xN-QbdUMUsU5lgnx74UfMuIqZS4I8wHEkgEknaywevQ3Sb4T6OcBTbU9pRjMKT7PBcbl7jNEVA2LBhMs6K1ylHGQR7HicQmtn6etfaY0kyMv6gfcBaHawKo4Olbs5qdty3RAXWHy6hZtHwXnc-2l4-z3Lm3gx6_KgtAu0E5uxG359-BcqPxl2i1JddKpAZo871xUlWoABXZpA62dtL7AOJ7NGH9m34nlUEo58UnDAPQgB9tZtZndv_Bmgtc",
    imageAlt:
      "Bustling luxury outlet near Charminar with traditional Hyderabadi architecture",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM2x4l8fOnXxeDyp1jbnIg39sYsrH-ZWXDzFaxHjqWKjhHcgY1x77xFh9ziCq7LK9_95gGhdfbeiu3tDLA4S5LFDiFKU7TdCFjET0iNlh-CqNOCIDNselMpwT8Ug3rCUqZxcwkeAVc6SL-GKsKvX_Si2lQd38WJ9-6uz_otYNlD4IW4PJ4eP0K1XzrwZQJkbZcFEQIql5FIDIzjUwpN-B3p3IS6ZSPgBX75UiuTQQc0ne-T39YSNNGPvowR0w8Db3z-HYaRvCZX_qw",
  },
  {
    name: "Abids",
    badge: "Modern",
    address:
      "Gunfoundry Road, Abids Shopping Complex, Level 1, Hyderabad, 500001",
    hours: "Mon - Sat: 11:00 AM - 10:00 PM\nSun: 11:00 AM - 09:00 PM",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqy6hjsBEg-MmHg8pfixt3tMqiogCeHgrIHo8Fx8my4plt7iEAQCEB0ohrowTXx8uyj8lZ7ow2GYU2jaZEZBnxaZ2FRzTUYI_Y1kuQGiQ9YJk9Mfx-YP5SoTp2wIec-5CS0at6S_Ar0z39SWnmDpvLFH2hRkDi8qJySFpiB4oCtOwg4gCzP3eUvgJKjINYJw0Dn6f7CoFs_UYZndWgq2QdCId4nGxqetj4W8vaTgdQxykHn0ymUqTKeasxo0_ZiVLmzbG2I-nY23cy",
    imageAlt:
      "Modern high-end retail space in Abids with marble floors and spotlight displays",
    mapImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtBgLV8GKykz4o9YDWB8O5FmsUrMizp_iPz7aPSF0rY1vBwYnG82igekjbe5DJ3YtWfS72VfAuygSHz2PHN_9WMZ3PQJiJ-c1aj2nb100I2L-nZoFEKpLyv-iLbJLdoa74kl_4C7Dsq0qh1q4QEPevfm7GoWTm6t_otZzO2otk3F6dz7kceAICui8rnwwreYHTWhBDr_r_Whum_lvztfXL3s3Pv2GTxnKSeaiVW_PMxZuO-Zs9D98IFIWQY_n21atbzCpmjjk4dLG6",
  },
];
