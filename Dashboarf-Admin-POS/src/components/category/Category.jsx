import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Model from '../models/Modal'

import axios from "axios";

const Category = () => {

  const [showModal, setShowModal] = React.useState(false);
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({
    id: "",
    categoryName: "",
    desc: "",
    image: "",
  });

  // show update model

  const [showUpdateModel, setShowUpdateModel] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {

      let formData = new FormData();
      formData.append("categoryName", category.categoryName)
      formData.append("desc", category.desc)
      formData.append("image", category.image);

      const res = await axios.post(
        "http://localhost:3001/categories",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }

      );
      console.log(res)
    } catch (err) {

      console.log(err);

    }
  };

  const handleChange = (e) => {
    setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(category);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:3001/categories");
    // console.log(res);

    setCategories(res.data);
  };
  // update category function 
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("categoryName", category.categoryName)
      formData.append("desc", category.desc)
      formData.append("image", category.image);

      const res = await axios.put(
        `http://localhost:3001/categories/${category.id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }

      );
      //console.log(res)
      if (res.status === 201) {
        fetchCategories();
      }
    } catch (err) {

      console.log(err);

    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 bg-[#92A9BD] h-20 flex justify-between items-center">
              <div className="flex items-center h-20 ml-4">
                <input
                  type="search"
                  className="w-28 p-1 mt-6 border outline-none text-sm rounded-sm"
                  placeholder="Search-Item"
                />
                <div className="flex flex-col ml-6">
                  <span className="mb-1 text-sm">Fields:</span>
                  <select
                    name=""
                    id=""
                    className="text-sm outline-none border h-[29px] rounded-sm"
                  >
                    <option>All</option>
                    <option value="">Home</option>
                    <option value="">About</option>
                    <option value="">Skill</option>
                    <option value="">Content</option>
                    <option value="">Product</option>
                  </select>
                </div>
                <div className="flex flex-col ml-6">
                  <span className="mb-1 text-sm">Fields:</span>
                  <select
                    name=""
                    id=""
                    className="text-sm outline-none border h-[29px] rounded-sm"
                  >
                    <option>All</option>
                    <option value="">Home</option>
                    <option value="">About</option>
                    <option value="">Skill</option>
                    <option value="">Content</option>
                    <option value="">Product</option>
                  </select>
                </div>
              </div>
              <div
                className="flex mr-12 bg-slate-50 p-1 pl-3 pr-3 mt-4 rounded-sm"
                onClick={() => setShowModal(true)}
              >
                <button>Add Item</button>
              </div>
            </div>
            <div className="col-span-4 bg-white h-[600px] m-2 overflow-auto scrollbar">
              <div className="flex flex-col">
                <div className="o sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border text-center">
                        <thead className="border-b">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-bold text-gray-900 px-8 py-4 "
                            >
                              Cate-Name
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-bold text-gray-900 px-6 py-4 "
                            >
                              Description
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-bold text-gray-900 px-6 py-4 "
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-bold text-gray-900 px-6 py-4"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((cate, index) => {
                            return (
                              <tr
                                key={index + 1}
                                className="border-b bg-slate-300"
                              >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                                  {cate.categoryName}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                                  {cate.desc}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-8 py-1 whitespace-nowrap flex justify-center">
                                  <img
                                    src={cate.photo && `http://localhost:3001/${cate.photo}`}
                                    alt=""
                                    className="h-12 w-12 object-cover mt-[2px]"
                                  />
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <div className="flex justify-center items-center">
                                    <div
                                      className="bg-blue-400 p-1 mr-2 rounded-md text-blue-100 cursor-pointer"
                                      onClick={async () => {
                                        //console.log(cate.id)
                                        const res = await axios.get(`http://localhost:3001/categories/${cate.id}`)
                                        setCategory(res.data[0])
                                        setShowUpdateModel(true)
                                      }}
                                    >
                                      <HiOutlinePencilAlt size={20} />
                                    </div>
                                    <AiFillDelete
                                      size={28}
                                      className="bg-red-400 p-[4px] text-[#ffffff] rounded-md cursor-pointer"
                                    />
                                    <Model
                                      isVisible={showUpdateModel}
                                      onClose={() => {
                                        setShowUpdateModel(false)
                                      }}
                                    >

                                      <form className="p-5">
                                        <div className="mb-6">
                                          <h1 className="text-center">Update Category</h1>
                                        </div>
                                        <div className="mb-6">
                                          <label

                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                          >
                                            Category Name
                                          </label>
                                          <input
                                            type="text"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            placeholder="Category Name"
                                            value={category.categoryName}
                                            name="categoryName"
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="mb-6">
                                          <label

                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                          >
                                            Description
                                          </label>
                                          <textarea
                                            onChange={handleChange}
                                            value={category.desc}
                                            name="desc"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          />
                                        </div>
                                        <div className="mb-6">
                                          <label
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                          >
                                            Image
                                          </label>
                                          <input
                                            onChange={(e) => {
                                              setCategory((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
                                            }}
                                            type="file"
                                            id=""
                                            name="image"
                                            accept="image/png, image/jpeg"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          />
                                        </div>
                                        <button
                                          onClick={handleUpdate}
                                          type="submit"
                                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                          Update
                                        </button>
                                      </form>
                                    </Model>
                                  </div>
                                </td>
                              </tr>

                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-lg font-semibold uppercase">
                        Update Category
                      </h3>
                      <button
                        className="p-1 ml-auto border-0 text-black -mt-3 float-right text-6xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-red-300 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <section className="my-6 mx-auto p-2 lg:p-10 bg-white rounded-lg shadow sm:p-10 h-auto w-full">
                      <form>
                        <div className="mb-2">
                          <label
                            html="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400 mt-4"
                          >
                            Category Name
                          </label>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-3 outline-none"
                            type="text"
                            name="categoryName"
                            id="title"
                            required
                            onChange={handleChange}
                          />
                          <span className="text-red-400 font-sm"></span>
                        </div>
                        <div className="mb-2">
                          <label
                            html="date"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400"
                          >
                            Description
                          </label>
                          <textarea
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-3 outline-none"
                            name="desc"
                            id="desc"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            html="author"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400"
                          >
                            Image
                          </label>
                          <div className="flex">
                            <input
                              type="file"
                              name="image"
                              onChange={(e) => {
                                setCategory((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
                              }}
                            />
                            <img
                              src={image}
                              alt="image"
                              name="image"
                              className="w-26 h-24 object-cover"
                            />
                          </div>
                        </div>
                      </form>
                    </section>
                    {/*footer*/}
                    <div className="flex items-center flex-col p-6 pt-0 border-t border-solid border-slate-200">
                      <div
                        className="flex bg-emerald-500 mt-2 w-full justify-center cursor-pointer"
                      >
                        <button
                          onClick={handleClick}
                          className="text-white font-bold uppercase text-sm p-2 mt-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Category;
