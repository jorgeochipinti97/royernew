export const sortProductsByTerm = (products, palabra) => {
  return products.sort((a, b) => {
    if (a.slug.indexOf(palabra) < b.slug.indexOf(palabra)) {
      return 1;
    } else if (a.slug.indexOf(palabra) > b.slug.indexOf(palabra)) {
      return -1;
    }
    return 0;
  });
};
