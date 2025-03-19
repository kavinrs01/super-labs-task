import { Button, Rate } from "antd";
import "./styles.less";

const ProductCard: React.FC = () => {
  return (
    <div className=" cursor-pointer relative w-[200px] h-[315px] shadow-[0px_0px_6px_rgba(0,0,0,0.2)] rounded-lg p-5 m-3 bg-white transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col gap-1">
      <div className="absolute top-0 right-0 z-40  bg-black text-white text-base font-semibold p-6 clip-triangle rounded-tr-lg ">
        <span className="absolute top-1 right-1 z-41"> #3</span>
      </div>

      <div className="absolute top-4 left-4 text-white text-[10px] flex flex-col gap-2 uppercase w-fit z-40">
        <div>
          <span className="p-0.5 px-1 bg-[#000] rounded">New</span>
        </div>
        <div>
          <span className="p-0.5 px-1 bg-[#000] rounded">Limited edition</span>
        </div>
        <div>
          <span className="p-0.5 px-1 bg-[#000] rounded">Online only</span>
        </div>
      </div>
      <div className="relative group">
        <img
          src="https://www.sephora.com/productimages/sku/s2842441-main-zoom.jpg?imwidth=332"
          alt="Product"
          className="w-full h-[160px] object-contain"
        />
        <Button
          type="primary"
          block
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/75 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Quick Look
        </Button>
      </div>
      <span className="text-[12px] font-bold">Fenty Beauty</span>
      <span className="text-[14px] ">
        Pro Filt'r Soft Matte Powder Foundation
      </span>
      <span className="text-[14px] font-bold">$36.00</span>
      <div className="flex items-center gap-2">
        <Rate allowHalf defaultValue={2.5} className="text-black text-[15px]" />
        <span>2k</span>
      </div>
    </div>
  );
};

export { ProductCard };
