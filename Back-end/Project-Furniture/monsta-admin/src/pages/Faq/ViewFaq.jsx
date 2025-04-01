import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdFilterAltOff, MdModeEdit, MdModeEditOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FaFilter } from 'react-icons/fa';
import Breadcrumb from '../../Components/Breadcrumb';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function ViewFaq() {


  let [FaqData, setFaqData] = useState([]);
  let [checkBoxValue, setcheckBoxValue] = useState([]);
  let [status, setstatus] = useState(false);

  useEffect(() => {
    axios.post('http://localhost:5000/api/admin/faqs/view')
      .then((result) => {
        setFaqData(result.data.data);
      })
      .catch((error) => {
        toast.error('Something went wrong !!');
      })

  }, [status]);

  const Checkbox = (id) => {
    if (checkBoxValue.includes(id)) {
      var dataFilter = checkBoxValue.filter((v) => {
        if (v != id) {
          return v;
        }
      })
      setcheckBoxValue([...dataFilter])

    } else {
      checkBoxValue.push(id);
      setcheckBoxValue([...checkBoxValue])
    }

    console.log(checkBoxValue);
  }

  const selectAll = () => {
    FaqData.forEach((v) => {
      if (checkBoxValue.includes(v._id)) {

      } else {
        checkBoxValue.push(v._id);
        setcheckBoxValue([...checkBoxValue])
      }
    })
  }

  const changeStatus = () => {
    if (checkBoxValue.length > 0) {
        if (confirm('Are you sure you want to change status ?')) {
            axios.post('http://localhost:5000/api/admin/faqs/change-status', {
                ids: checkBoxValue
            })
                .then((result) => {
                    toast.success(result.data.message)
                    setcheckBoxValue([]);
                    setstatus(!status);
                })
                .catch((error) => {
                    toast.error('Something went wrong !!');
                })

        }
    }

}
const destroy = () => {
    if (checkBoxValue.length > 0) {
        if (confirm('Are you sure you want to Delete ?')) {
            axios.post('http://localhost:5000/api/admin/faqs/delete', {
                ids: checkBoxValue
            })
                .then((result) => {
                    toast.success(result.data.message)
                    setcheckBoxValue([]);
                    setstatus(!status);
                })
                .catch((error) => {
                    toast.error('Something went wrong !!');
                })

        }

    }


}

  return (
    <section className="w-full">

      <Breadcrumb path={"Faq"} link={"/faq/view-faq"} path2={"Faq"} slash={"/"} />


      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <div className='flex item-center justify-between bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400'>
            <h3 className="text-[26px] font-semibold" >
              View Country
            </h3>
            <div className='flex justify-between '>


              <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={changeStatus}> Change Status</button>
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"onClick={destroy}>Delete </button>
            </div>
          </div>
          <div className="border border-t-0 rounded-b-md border-slate-400">

            {/* border-2 border-[red] */}
            <div className="relative overflow-x-auto">


              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="p-4">
                        <div class="flex items-center">
                          <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={selectAll} 
                            checked={

                            (FaqData.length > 0) 
                            ?
                              (checkBoxValue.length == FaqData.length) ? "checked" : ''
                              :

                              ''
                            }/>
                          <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Question
                      </th>

                      <th scope="col" class=" w-[40%] ">
                        Answer
                      </th>
                      <th scope="col" class=" w-[8%] ">
                        Order
                      </th>
                      <th scope="col" class="w-[11%]">
                        Status
                      </th>
                      <th scope="col" class="w-[6%]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      (FaqData.length > 0)
                        ?
                        FaqData.map((v, i) => {
                          return (
                            <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td class="w-4 p-4">
                                <div class="flex items-center">
                                  <input id="checkbox-table-search-1" onClick={() => Checkbox(v._id)} checked={(checkBoxValue.includes(v._id)) ? "checked" : ''} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                              </td>
                              <th scope="row" class="flex items-center px-6 py-4 text-gray-900  dark:text-white">

                                <div class="py-4">
                                  <div class="text-base font-semibold">{v.question}</div>

                                </div>
                              </th>

                              <td class=" py-4 mr-10">
                                {v.answer}
                              </td>
                              <td class=" py-4">
                                {v.order}
                              </td>
                              <td class=" py-4">

                              {
                                  v.status
                                    ?
                                    <button type="button" class="bg-gradient-to-r rounded-lg text-center text-sm text-white dark:focus:ring-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium from-green-400 hover:bg-gradient-to-br mb-2 me-2 px-5 py-1.5 to-green-600 via-green-500">Active</button>
                                    :
                                    <button type="button" class="bg-gradient-to-r rounded-lg text-center text-sm text-white dark:focus:ring-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium from-red-400 hover:bg-gradient-to-br mb-2 me-2 px-5 py-1.5 to-red-600 via-red-500">Deactive</button>

                                }
                              </td>
                              <td class=" py-4">

                                <Link to={`/dashboard/Faq/update/${v._id}`} >
                                  <div className="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <MdModeEdit className='text-[18px]' />
                                  </div>
                                </Link>
                              </td>
                            </tr>
                          )

                        })
                        :
                        <tr class="bg-white border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                          <td class="p-4 w-4" colSpan={5}>
                            No Record Found
                          </td>
                        </tr>
                    }






                  </tbody>
                </table>
              </div>


            </div>

          </div>
        </div>
      </div>



    </section>
  )
}