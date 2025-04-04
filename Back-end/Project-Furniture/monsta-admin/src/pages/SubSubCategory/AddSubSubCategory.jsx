import React, { useEffect, useState } from "react";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import axios, { toFormData } from "axios";
import { toast } from "react-toastify";

export default function AddSubSubCategory() {
    const navigate = useNavigate();
    let [subSubCategoryDatails, setSubSubCategoryDatails] = useState('');
    useEffect(() => {
        $(".dropify").dropify({
            messages: {
                default: "Drag and drop ",
                replace: "Drag and drop ",
                remove: "Remove",
                error: "Oops, something went wrong"
            }
        });
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        if (data.image && data.image.length > 0) {
            data.image = data.image[0];
        }

        if (!updateIdState) {
            axios.post('http://localhost:5000/api/admin/sub-subcategories/add', toFormData(data))
                .then((result) => {
                    if (result.data.status == true) {
                        toast.success(result.data.message);
                        navigate('/dashboard/subsubcategory/view-subsubcategory');
                    } else {
                        toast.error(result.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('Something went wrong !!');
                })
        } else {
            axios.put(`http://localhost:5000/api/admin/sub-subcategories/update/${updateId}`, data)
                .then((result) => {
                    if (result.data.status == true) {
                        toast.success(result.data.message);
                        navigate('/dashboard/subsubcategory/view-subsubcategory');
                    } else {
                        toast.error(result.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('Something went wrong !!');
                })
        }
    };


    const [updateIdState, setUpdateIdState] = useState(false)

    let updateId = useParams().id

    useEffect(() => {
        if (updateId == undefined) {
            setUpdateIdState(false)
        }
        else {
            axios.post(`http://localhost:5000/api/admin/sub-subcategories/details/${updateId}`)
                .then((result) => {
                    if (result.data.status == true) {
                        setSubSubCategoryDatails(result.data.data);
                    } else {
                        toast.error(result.data.message);
                    }

                })
                .catch((error) => {
                    toast.error('Something went wrong !!');
                })
            setUpdateIdState(true)
        }
    }, [updateId])

    return (
        <section className="w-full">
            <Breadcrumb path={"Sub Category"} link={'/category/sub-subcategory/view'} path2={"Add"} slash={"/"} />
            <div className="w-full min-h-[610px]">
                <div className="max-w-[1220px] mx-auto py-5">
                    <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                        Add Sub Category
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
                        <div className="flex gap-5">
                            <div className="w-1/3">
                                <label
                                    htmlFor="categoryImage"
                                    className="block  text-md font-medium text-gray-900"
                                >
                                    Category Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="image"
                                    {...register("image", { required: "Category image is required" })}
                                    id="image"
                                    className="dropify"
                                    data-height="230"
                                />
                                {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                            </div>

                            <div className="w-2/3">
                                {/* Parent Category Dropdown */}
                                <div className="mb-5">
                                    <label className="block  text-md font-medium text-gray-900">
                                        Parent Category Name
                                    </label>
                                    <select
                                        name="parentCatSelectBox"
                                        className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Mens">Men's</option>
                                        <option value="Women">Women</option>
                                        <option value="Sale">Sale</option>
                                    </select>
                                </div>
                                {/* Parent Category Dropdown */}
                                <div className="mb-5">
                                    <label className="block mb-5 text-md font-medium text-gray-900">
                                        Sub Category Name
                                    </label>
                                    <select
                                        name="parentCatSelectBox"
                                        className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Mens">Men's</option>
                                        <option value="Women">Women</option>
                                        <option value="Sale">Sale</option>
                                    </select>
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="categoryName"
                                        className="block  text-md font-medium text-gray-900"
                                    >
                                        Category Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        {...register("name", { required: "Category name is required" })}
                                        id="name"
                                        className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                        placeholder="Category Name" defaultValue={subSubCategoryDatails.name}
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="categoryName"
                                        className="block  text-md font-medium text-gray-900"
                                    >
                                        Order
                                    </label>
                                    <input
                                        type="text"
                                        name="order"
                                        {...register("Order", { required: "Category Order is required" })}
                                        id="categoryName" defaultValue={subSubCategoryDatails.order}
                                        className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                        placeholder="Category Order"
                                    />
                                    {errors.order && <p className="text-red-500">{errors.order.message}</p>}
                                </div>

                            </div>u7


                        </div>
                        <button
                            type="submit"
                            className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            {updateIdState ? "Update Sub Category" : "Add Sub Category"}
                        </button>
                    </form>


                </div>
            </div>
        </section>
    );
}