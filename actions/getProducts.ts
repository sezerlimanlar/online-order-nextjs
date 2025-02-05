import { Products } from "@/types";
import axios from "axios";

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products?populate=*`;

export const getProducts = async (): Promise<Products[]> => {
  const res = await axios.get(Urls);
  const data = res.data.data;
  return data;
};
