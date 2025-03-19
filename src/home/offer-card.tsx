import { Button } from "antd";

const OfferCard: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div className=" cursor-pointer w-[240px] min-w-[240px] h-[400px] shadow-[0px_0px_6px_rgba(0,0,0,0.2)] rounded-lg  m-3 bg-white transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col gap-1">
      <img
        className="w-full h-[180px] object-contain rounded-t-lg"
        src={img}
      ></img>
      <div className="p-4 flex flex-col justify-between h-full ">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-bold">Get 50% Off(a)</h3>
          <p className="font-medium">
            Score can’t-miss deals on select beauty. New deals every day!
          </p>
          <p className="font-thin text-[12px]">No promo code needed.</p>
          <p className="font-thin text-[12px]">
            In store &amp; online • Ends 3/27/2025
          </p>
          <p className="font-thin text-[12px]">(a)Exclusions/terms apply.</p>
        </div>

        <Button className=" rounded-full border border-black w-1/2">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export { OfferCard };
