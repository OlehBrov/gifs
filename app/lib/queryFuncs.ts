import axios from "axios";
const app_key = process.env.NEXT_PUBLIC_KLIPY_API_KEY;
const customer_id = process.env.NEXT_PUBLIC_KLIPY_CUSTOMER_ID;
const $axios = axios.create({
  // baseURL: "https://api.giphy.com/v1/gifs",
  baseURL: `https://api.klipy.com/api/v1/${app_key}/gifs`,
  timeout: 1000,
  params: {
    api_key: process.env.NEXT_PUBLIC_GIPHY_API_KEY,
  },
});

export const searchImages = async (
  query: string,
  filter: { [key: string]: boolean },
  limit = 25,
  page = 1,
) => {
  console.log("searchImages called with:", { query, filter, limit, page });
  const response = await $axios.get("/search", {
    params: {
      q: query,
      limit,
      page,
      per_page: limit,
      customer_id,
      locale: "uk-UA",
    },
  });
  return response.data;
};

export const getTrendingImages = async (limit = 25, offset = 0) => {
  const response = await $axios.get("/trending", {
    params: {
      limit,
      offset,
      rating: "G",
    },
  });
  return response.data;
};

export const getCategories = async () => {
  const response = await $axios.get("/categories", {
    params: { locale: "uk-UA" },
  });
  return response.data;
};


export const getImagesByCategory = async (
  category: string,
  limit = 25,
  page = 1,
) => {
  const response = await $axios.get("/category", {
    params: {
      q: category,
      limit,
      page,
      per_page: limit,
      customer_id,
      locale: "uk-UA",
    },
  });
  return response.data;
}

export const getSingleImage = async (id: string) => {
  const response = await $axios.get("/items", {
    params: {
      ids: id,
      customer_id,
    },
  });
  return response.data;
};
