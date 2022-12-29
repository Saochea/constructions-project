import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

import { AiOutlineSearch } from "react-icons//ai";
import {
  AiFillDelete,
  AiFillPlusCircle,
} from "react-icons/ai";

import Cart from "./Cart";
import data from "../../data";
import Main from "./Main";

const Sale = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div className="grid grid-cols-5 gap-4 ml-4 mr-4 w-auto h-screen">
            <div className="col-span-2 bg-slate-300 mr-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4 h-24">
                  <div className="flex justify-between items-center border pt-1 pb-1 h-24">
                    <span className="ml-3 text-sm text-slate-400">
                      សួរស្ដី
                    </span>
                    <div className="flex  text-slate-400">
                      <AiFillPlusCircle className="border mr-1" size={24} />
                    </div>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-4 flex justify-between bg-[#92A9BD] p-2 items-center text-slate-300">
                      <span className="ml-6">Product</span>
                      <span>Qty</span>
                      <span>Price</span>
                      <span className="text-slate-300 mr-8">
                        <AiFillDelete size={22} />
                      </span>
                    </div>
                    <Cart
                      cartItems={cartItems}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3 bg-slate-300 -ml-6 overflow-auto scrollbar">
              <div className="bg-[#92A9BD] h-16 flex justify-between items-center">
                <div className="text-slate-200 ml-6 flex flex-row items-center border-gray-200 border p-[2px] cursor-pointer">
                  <span className="mr-2">Search</span>
                  <AiOutlineSearch size={18} />
                </div>
                <div>
                  <select className="bg-slate-400 outline-none border-gray-200 text-slate-200 text-sm border block w-24 mr-6 h-7">
                    <option>Category</option>
                    <option value="US">All</option>
                    <option value="CA">Stell</option>
                    <option value="FR">Concrete</option>
                    <option value="DE">Brick</option>
                  </select>
                </div>
              </div>
              <Main products={products} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
