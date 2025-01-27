import { LayoutGrid, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CategoryButton } from "./CategoryButton";

const Navbar = () => {
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <Image
            alt="logo"
            src="/logo.png"
            width={150}
            height={150}
            className="cursor-pointer"
          ></Image>
        </Link>

        <CategoryButton />
        
        <div className="md:flex hidden gap-2 items-center border rounded-full p-2 px-5">
          <Search className="h-5 w-5" />
          <input placeholder="Ara.." className="rounded-full px-2 py-1" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingCart className="h-6 w-6" />
          <span className="bg-green-500 text-white rounded-full px-2">2</span>
        </h2>
        <Button className="bg-green-500 rounded-xl">Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
