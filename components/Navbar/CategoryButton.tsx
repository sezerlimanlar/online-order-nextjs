"use client";
import { useCategoriesStore } from "@/hooks/useCategoriesStore";
import { LayoutGrid } from "lucide-react";
import React, { useState } from "react";

export const CategoryButton = () => {
  const { categories, fetchCategories } = useCategoriesStore();
  const [fetched, setFetched] = useState(false);
  if (!fetched) {
    fetchCategories();
    setFetched(true);
  }

  return (
    <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
      <LayoutGrid className="w-5 h-5" /> Category
    </h2>
  );
};
