import { Category } from "@/types";
import { create } from "zustand";
import axios from "axios";

export type CategoryState = {
  categories: Category[];
  fetchCategories: () => Promise<void>;
};

export const useCategoriesStore = create<CategoryState>((set) => ({
  categories: [],
  fetchCategories: async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/categories?sort[0]=name:asc&populate=*"
      );
      const categories = response.data.data.map((category: any) => category);
      console.log("Fetched Categories:", categories);
      set({
        categories: categories,
      });
    } catch (error) {
      console.log("Error fetching categories");
    }
  },
}));
