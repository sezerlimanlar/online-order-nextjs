import { getCategories } from "@/actions/getCategories";
import { getSlider } from "@/actions/getSlider";
import { Categories } from "@/components/Categories";
import { Slider } from "@/components/Slider";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const sliderList = await getSlider();
  const categoriesList = await getCategories();
  return (
    <div className="px-6">
     <Slider sliderList={sliderList}/>
     <Categories categoryList={categoriesList}/>
    </div>
  );
}
