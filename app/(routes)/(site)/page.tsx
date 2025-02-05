import { getCategories } from "@/actions/getCategories";
import { getProducts } from "@/actions/getProducts";
import { getSlider } from "@/actions/getSlider";
import { Categories } from "@/components/Categories";
import { ProductList } from "@/components/Product/ProductList";
import { Slider } from "@/components/Slider";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const sliderList = await getSlider();
  const categoriesList = await getCategories();
  const productList = await getProducts();
  return (
    <div className="px-6">
      <Slider sliderList={sliderList} />
      <Categories categoryList={categoriesList} />
      <ProductList productList={productList} />
    </div>
  );
}
