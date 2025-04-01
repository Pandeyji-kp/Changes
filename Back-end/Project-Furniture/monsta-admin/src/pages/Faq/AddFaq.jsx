import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddFaq() {
  const navigate = useNavigate();
  let [faqDetails, setFaqDetails] = useState('');


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!updateIdState) {
      axios.post('http://localhost:5000/api/admin/faqs/add', {
        question: data.question,
        answer: data.answer,
        order: data.order
      })
        .then((result) => {
          if (result.data.status == true) {
            toast.success(result.data.message);
            navigate('/dashboard/Faq/view-Faq');
          } else {
            toast.error(result.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error('Something went wrong !!');
        })
    } else {
      axios.put(`http://localhost:5000/api/admin/faqs/update/${updateId}`, data)
        .then((result) => {
          if (result.data.status == true) {
            toast.success(result.data.message);
            navigate('/dashboard/Faq/view-Faq');
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

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   // alert(`Color Added: ${colorName} - ${color}`);
  // };

  // update work
  const [updateIdState, setUpdateIdState] = useState(false)
  let updateId = useParams().id
  useEffect(() => {
    if (updateId == undefined) {
      setUpdateIdState(false)
    }
    else {

      axios.post(`http://localhost:5000/api/admin/faqs/details/${updateId}`)
        .then((result) => {
          if (result.data.status == true) {
            setFaqDetails(result.data.data);
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
      <Breadcrumb path={"Faq"} link={"/faq/add-faq"} path2={"Faq"} slash={"/"} />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            {updateIdState ? "Update Faq" : "Add Faq"}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">

            <div className="">
              <div className="mb-5">
                <label
                  htmlFor="Question"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Question
                </label>
                <input
                  type="text"
                  {...register("question", { required: "question is required" })}
                  id="question"
                  name="question"
                  defaultValue={faqDetails.question}
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="question"
                />
                {errors.question && <p className="text-red-500">{errors.question.message}</p>}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="Answer"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Answer
                </label>
                <textarea

                  {...register("answer", { required: "answer is required" })}
                  id="answer"
                  name="answer"
                  defaultValue={faqDetails.answer}
                  className="text-[19px] h-[150px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="answer"
                ></textarea>
                {errors.answer && <p className="text-red-500">{errors.answer.message}</p>}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="order"
                  className="block mb-2 text-md font-medium text-gray-900"
                >
                  Order
                </label>
                <input
                  type="number"
                  {...register("order", { required: "order is required" })}
                  id="order"
                  name="order"
                  defaultValue={faqDetails.order}
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder="order"
                />
                {errors.order && <p className="text-red-500">{errors.order.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {updateIdState ? "Update Faq" : "Add Faq"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}