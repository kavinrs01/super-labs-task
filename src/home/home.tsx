import { Button } from "antd";
import { CategoryCard } from "./category-card";
import { Carousel, HomeCarousel } from "./home-carousel ";
import { HomeFooter } from "./home-footer";
import { OfferCard } from "./offer-card";
import { ProductCard } from "./product-card";

const categories = [
  {
    name: "Women's History Month",
    img: "https://www.sephora.com/contentimages/2025_Months-of-Focus_Icon-2980.svg",
  },
  {
    name: "Blush",
    img: "https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/blush.png?imwidth=106",
  },
  {
    name: "Serums",
    img: "https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106",
  },
  {
    name: "Lip",
    img: "https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_makeup_mascara_lipstick_us_ca_rwd_slice.jpg?imwidth=106",
  },
  {
    name: "Setting Spray and Powder",
    img: "https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_quiz_us_ca_rwd_slice.png?imwidth=106",
  },
  {
    name: "Foundation",
    img: "https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_samples_32_us_ca_rwd_slice.png?imwidth=106",
  },
  {
    name: "Trending on Social",
    img: "https://www.sephora.com/contentimages/homepage/010124/star%20trending.JPG?imwidth=106",
  },
];

const productSampleData = [
  {
    isNew: false,
    isLimited: false,
    isOnlineOnly: false,
    img: "https://www.sephora.com/productimages/sku/s2843183-main-zoom.jpg?pb=clean-at-sephora&imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
  {
    isNew: false,
    isLimited: false,
    isOnlineOnly: false,
    img: "https://www.sephora.com/productimages/sku/s2837185-main-zoom.jpg?imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36.0,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
  {
    isNew: true,
    isLimited: false,
    isOnlineOnly: false,
    img: "https://www.sephora.com/productimages/sku/s1488337-main-zoom.jpg?imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36.0,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
  {
    isNew: false,
    isLimited: true,
    isOnlineOnly: true,
    img: "https://www.sephora.com/productimages/sku/s1378215-main-zoom.jpg?pb=clean-at-sephora&imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36.0,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
  {
    isNew: false,
    isLimited: true,
    isOnlineOnly: false,
    img: "https://www.sephora.com/productimages/sku/s2834398-main-zoom.jpg?imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36.0,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
  {
    isNew: false,
    isLimited: true,
    isOnlineOnly: false,
    img: "https://www.sephora.com/productimages/sku/s2869220-main-zoom.jpg?imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36.0,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
  {
    isNew: false,
    isLimited: true,
    isOnlineOnly: false,
    img: "https://www.sephora.com/productimages/sku/s2869220-main-zoom.jpg?imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36.0,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
  {
    isNew: false,
    isLimited: true,
    isOnlineOnly: false,
    img: "https://www.sephora.com/productimages/sku/s2869220-main-zoom.jpg?imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36.0,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
  {
    isNew: false,
    isLimited: true,
    isOnlineOnly: false,
    img: "https://www.sephora.com/productimages/sku/s2863405-main-zoom.jpg?imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36.0,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
  {
    isNew: false,
    isLimited: true,
    isOnlineOnly: false,
    img: "https://www.sephora.com/productimages/sku/s2452183-main-zoom.jpg?imwidth=332",
    brand: "MILK MAKEUP",
    name: "Hydro Grip 12-Hour ",
    price: 36.0,
    rating: 2.5,
    ratingCount: 50,
    trendingCount: 3,
  },
];

const OfferSampleData = [
  {
    img: "https://www.sephora.com/contentimages/promo/beautyoffers/2025/March/2025-march-oh-snap-site-desktop-mobile-app-beauty-offers-page-banner-generic-1000x750-us-2821.jpg?imwidth=480",
  },
  {
    img: "https://www.sephora.com/contentimages/promo/beautyoffers/2025/March/2025-3-17-march-hair-challenge-site-desktop-mobile-app-beauty-offers-banner-en-us-2821.jpg?imwidth=480",
  },
  {
    img: "https://www.sephora.com/contentimages/promo/bpme/2025/March/2025-3-13-march-bpme-site-desktop-mobile-app-beauty-offers-page-banner-lawless-en-us-can.jpg?imwidth=480",
  },
  {
    img: "https://www.sephora.com/contentimages/promo/bpme/2025/March/2025-3-13-march-bpme-site-desktop-mobile-app-beauty-offers-page-banner-glow-recipe-en-us-can.jpg?imwidth=480",
  },
  {
    img: "https://www.sephora.com/contentimages/promo/bpme/2025/March/2025-3-13-march-bpme-site-desktop-mobile-app-beauty-offers-page-banner-urban-decay-en-us-can.jpg?imwidth=480",
  },
  {
    img: "https://www.sephora.com/contentimages/promo/beautyoffers/2025/March/2025-3-15-march-skincare-challenge-dr-dennis-gross-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can-2821.jpg?imwidth=480",
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-white ">
      <HomeCarousel />
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[20px]">Chooen For You</h2>
        </div>
        <Carousel>
          {productSampleData.map((data) => (
            <ProductCard
              img={data.img}
              brand={data.brand}
              name={data.name}
              price={data.price}
              rating={data.rating}
              ratingCount={data.ratingCount}
              isLimited={data.isLimited}
              isOnlineOnly={data.isOnlineOnly}
              isNew={true}
              trendingCount={0}
            />
          ))}
        </Carousel>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[20px]">New Arrivals</h2>
          <Button type="link">Show more</Button>
        </div>
        <Carousel>
          {productSampleData.map((data) => (
            <ProductCard
              img={data.img}
              brand={data.brand}
              name={data.name}
              price={data.price}
              rating={data.rating}
              ratingCount={data.ratingCount}
              isLimited={data.isLimited}
              isOnlineOnly={data.isOnlineOnly}
              isNew={true}
              trendingCount={0}
            />
          ))}
        </Carousel>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[20px]">Beauty Offers (15)</h2>{" "}
          <Button type="link">Vew All</Button>
        </div>
        <Carousel>
          {OfferSampleData?.map((data) => (
            <OfferCard img={data.img} />
          ))}
        </Carousel>
        <HomeCarousel />
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[20px]">Your Trending Picks</h2>
        </div>
        <Carousel>
          {productSampleData.map((data, index) => (
            <ProductCard
              img={data.img}
              brand={data.brand}
              name={data.name}
              price={data.price}
              rating={data.rating}
              ratingCount={data.ratingCount}
              isLimited={data.isLimited}
              isOnlineOnly={data.isOnlineOnly}
              isNew={data.isNew}
              trendingCount={index + 1}
            />
          ))}
        </Carousel>

        <div className="flex flex-row gap-0 ">
          <div className="p-3">
            <h2 className="font-bold text-[20px]">Need a Little Guidance?</h2>
            <p>Check out what's popular now.</p>
          </div>
          {categories?.map((item) => (
            <CategoryCard name={item.name} img={item.img} />
          ))}
        </div>
      </div>
      <HomeCarousel />
      <div className="w-full border-b my-4 mx-4"></div>
      <HomeFooter />
    </div>
  );
};

export { Home };
