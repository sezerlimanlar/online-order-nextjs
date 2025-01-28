import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoriesProps {
  categoryList: Category[];
}
export const Categories = ({ categoryList }: CategoriesProps) => {
  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">Shop By Category</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 mt-2">
        {categoryList.map((category, index) => (
          <Link href={"/product-category/" + category.name} key={index} className="items-center flex flex-col cursor-pointer hover:bg-green-500 bg-green-200 rounded-2xl group p-4 gap-2">
            <Image
              alt="icon"
              width={200}
              height={200}
              unoptimized={true}
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                category?.icon?.url?.substring(1)
              }
            />
            <h2 className="text-green-700 group-hover:text-white">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
