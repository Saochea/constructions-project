import React from "react";

const SaleItems = (props) => {
  const { product, onAdd } = props;
  return (
    <div
      className="row-span-1 border border-slate-500 cursor-pointer overflow-hidden rounded-sm shadow-md"
      onClick={() => onAdd(product)}
    >
      <img
        src={product.image}
        alt="img"
        className="bg-[#92A9BD] rounded-sm object-cover h-[180px] w-[200px] hover:scale-105 duration-300"
      />
      <div className="bg-[#92A9BD] p-1 mt-[2px] rounded-sm flex justify-center overflow-hidden z-20">
        <span className="font-semibold text-[#000000]">{product.name}</span>
      </div>
    </div>
  );
};

export default SaleItems;
