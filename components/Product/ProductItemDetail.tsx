"use client";
import { Products } from "@/types";
import React, { MouseEventHandler, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface ProductItemDetailProps {
  product: Products;
}

export const ProductItemDetail = ({ product }: ProductItemDetailProps) => {
  // Ürün miktarını kontrol eden state
  const [quantity, setQuantity] = useState<number>(1);

  // Miktarı artırma ve azaltma fonksiyonları
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Toplam fiyatı hesaplama
  const totalPrice = product.sellingPrice * quantity;

  const onAddCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(event);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Ürün Resmi */}
      <Image
        alt={product.name}
        src={
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          product.images.url.substring(1)
        }
        width={300}
        height={300}
        className="rounded-lg"
      />

      {/* Ürün Adı */}
      <h2 className="text-2xl font-bold text-green-700 mt-4">{product.name}</h2>

      {/* Ürün Fiyatları */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-green-600 font-bold text-xl">
          ${product.sellingPrice}
        </span>
        {product.sellingPrice < product.mrp && (
          <span className="line-through text-gray-500 ml-4">
            ${product.mrp}
          </span>
        )}
      </div>

      {/* Ürün Açıklaması */}
      <p className="text-sm text-gray-600 mt-4 text-center">
        {product.description}
      </p>

      {/* Miktar Ayarlama Bölümü */}
      <div className="flex items-center mt-4">
        <Button
          variant="outline"
          className="bg-red-500 text-white px-4 py-1 rounded-l-lg hover:bg-red-600"
          onClick={decreaseQuantity}
        >
          -
        </Button>
        <span className="px-4 py-1 text-lg font-semibold">{quantity}</span>
        <Button
          variant="outline"
          className="bg-green-500 text-white px-4 py-1 rounded-r-lg hover:bg-green-600"
          onClick={increaseQuantity}
        >
          +
        </Button>
      </div>

      {/* Dinamik Fiyatlandırma Aşağıdaki */}
      <div className="mt-4 text-lg font-semibold text-green-700">
        <span>Total Price: </span>
        <span className="text-xl text-green-600">${totalPrice.toFixed(2)}</span>
      </div>

      {/* Sepete Ekle Butonu */}
      <Button
        onClick={onAddCart}
        variant="outline"
        className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
      >
        Add to Cart ({quantity})
      </Button>
    </div>
  );
};
