const apiKey = "29881204-056d9bfecd2a6e01ecc5be958";

export const baseApiUrl = `https://pixabay.com/api/?key=${apiKey}&per_page=24&image_type=photo`;

export const getSearchUrl = (query: string) => {
  return `${baseApiUrl}&q=${encodeURIComponent(query)}`;
};
