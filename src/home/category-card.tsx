const CategoryCard: React.FC<{ name: string; img: string }> = ({
  name,
  img,
}) => {
  return (
    <div className="cursor-pointer w-[110px] h-[130px] relative flex flex-col  shadow-[0px_0px_6px_rgba(0,0,0,0.2)] rounded-lg p-1 m-3 bg-white transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <p className="p-1 text-[12px] font-medium">{name}</p>
      <div className="w-[50px] h-[50px] absolute bottom-2 right-2">
        <img src={img} alt="category" />
      </div>
    </div>
  );
};

export { CategoryCard };
