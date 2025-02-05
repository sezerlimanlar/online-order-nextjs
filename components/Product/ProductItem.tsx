import { Products } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ProductItemDetail } from "./ProductItemDetail";

interface ProductItemProps {
  product: Products;
  index:number;
  
}
export const ProductItem = ({ product,index }: ProductItemProps) => {
  return (
    <div key={index}
      className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Ürün Resmi */}
      <div
        className="items-center flex flex-col bg-green-200 rounded-2xl group p-4 gap-2"
      >
        <Image
          alt="icon"
          width={200}
          height={200}
          unoptimized={true}
          src={
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
            product.images.url.substring(1)
          }
        />
        <h2 className="text-green-700">
          {product.name}
        </h2>
      </div>

      {/* Ürün Adı */}
      <h3 className="text-lg font-semibold mt-4 text-gray-800">
        {product.name}
      </h3>

      {/* Ürün Fiyat Bilgileri */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-green-600 font-bold text-xl">
          ${product.sellingPrice}
        </span>
        {product.sellingPrice < product.mrp && (
          <span className="line-through text-gray-500">${product.mrp}</span>
        )}
      </div>

      {/* Miktar Tipi */}
      <p className="text-sm text-gray-600 mt-2">1 {product.itemQuantityType}</p>

      {/* Sepete Ekle Butonu */}
      <Dialog>
        <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full bg-green-600  text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Add To Cart
            </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                <ProductItemDetail product={product}/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
