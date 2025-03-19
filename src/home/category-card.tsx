const CategoryCard: React.FC = () => {
  return (
    <div className="w-[110px] h-[130px] relative flex flex-col  shadow-[0px_0px_6px_rgba(0,0,0,0.2)] rounded-lg p-1 m-3 bg-white transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <p className="p-1 text-[12px] font-medium">Women's History Month</p>
      <div className="w-[50px] h-[50px] absolute bottom-2 right-2">
        <img
          src="https://www.sephora.com/contentimages/2025_Months-of-Focus_Icon-2980.svg"
          alt="category"
        />
      </div>
    </div>
  );
};

export { CategoryCard };
