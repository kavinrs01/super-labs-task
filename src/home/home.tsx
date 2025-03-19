import { Button } from "antd";
import { CategoryCard } from "./category-card";
import { OfferCard } from "./offer-card";
import { ProductCard } from "./product-card";


const Home: React.FC = () => {
  return (
    <div className="bg-white p-5">
      {/* <HomeCarousel /> */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[20px]">Chosen For You</h2>
        <Button type="link">See All</Button>
      </div>
      <CategoryCard />
      <ProductCard />
      <OfferCard />
    </div>
  );
};

export { Home };
