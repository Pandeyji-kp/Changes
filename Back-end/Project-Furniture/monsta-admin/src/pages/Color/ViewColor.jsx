import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdFilterAltOff, MdModeEdit, MdModeEditOutline } from 'react-icons/md';
import { FaFilter } from 'react-icons/fa';
import axios from 'axios'
import Breadcrumb from '../../Components/Breadcrumb';
import { Checkbox, Select } from 'flowbite-react';
import { toast } from 'react-toastify';

export default function ViewCategory() {


  // let [orderModal, setOrderModal] = useState(false);\
  let [activeFilter, setactiveFilter] = useState(true);
  let [colorData, setColorData] = useState([]);
  let [searchName, setSearchName] = useState('');
  let [checkBoxValue, setcheckBoxValue] = useState([]);
  let [status, setstatus] = useState(false);


  useEffect(() => {
    axios.post('http://localhost:5000/api/admin/colors/view', {
      name: searchName
    })
      .then((result) => {
        setColorData(result.data.data);
      })
      .catch((error) => {
        toast.error('Something went wrong !!');
      })

  }, [searchName,status]);

  const search = (event) => {
    event.preventDefault();
    setSearchName(event.target.name.value);
  }

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
    colorData.forEach((v) => {
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
            axios.post('http://localhost:5000/api/admin/colors/change-status', {
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
            axios.post('http://localhost:5000/api/admin/colors/delete', {
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

      <Breadcrumb path={"Color"} link={"/colors/view-color"} path2={"View"} slash={"/"} />

      <div className={`bg-gray-50 px-2 py-5 max-w-[1220px] duration-[1s] mx-auto mt-10 ${activeFilter ? "hidden" : "block"}`}>

        <form className="flex max-w-sm" onSubmit={search}>
          <div className="relative w-full">
            <input
              type="text" name='name'
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search  name..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>


      </div>
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <div className='flex item-center justify-between bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400'>
            <h3 className="text-[26px] font-semibold" >
              View Color
            </h3>
            <div className='flex justify-between '>
              <div onClick={() => setactiveFilter(!activeFilter)} className="cursor-pointer text-white mx-3 rounded-[50%] w-[40px] h-[40px] flex items-center justify-center bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {activeFilter ? <FaFilter className='text-[18px]' /> : <MdFilterAltOff className='text-[18px]' />}
              </div>

              <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={changeStatus} >  Change Status</button>
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={destroy} > Delete </button>
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
                          <input id="checkbox-all-search"
                            type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={selectAll} 
                            checked={

                            (colorData.length > 0) 
                            ?
                              (checkBoxValue.length == colorData.length) ? "checked" : ''
                              :

                              ''
                            } />
                          <label for="checkbox-all-search" class="sr-only"  >checkbox</label>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color Name
                      </th>
                      <th scope="col" class=" w-[10%] ">
                        Code
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
                      (colorData.length > 0)

                        ?
                        colorData.map((v, i) => {
                          return (
                            <tr key={i} class="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                              <td class="p-4 w-4">
                                <div class="flex items-center">
                                  <input id="checkbox-table-search-1" onClick={() => Checkbox(v._id)} checked={(checkBoxValue.includes(v._id)) ? "checked" : ''} type="checkbox" class="bg-gray-100 border-gray-300 h-4 rounded-sm text-blue-600 w-4 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800 dark:ring-offset-gray-800 focus:ring-2 focus:ring-blue-500" />
                                  <label for="checkbox-table-search-1" class="sr-only"  >checkbox</label>
                                </div>
                              </td>
                              <td class="px-6 py-4">
                                {v.name}
                              </td>
                              <td class="py-4">
                                {v.code}
                              </td>

                              <td class="px-6 py-4">
                                {v.order}
                              </td>
                              <td class="py-4">
                                {
                                  v.status
                                    ?
                                    <button type="button" class="bg-gradient-to-r rounded-lg text-center text-sm text-white dark:focus:ring-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium from-green-400 hover:bg-gradient-to-br mb-2 me-2 px-5 py-1.5 to-green-600 via-green-500">Active</button>
                                    :
                                    <button type="button" class="bg-gradient-to-r rounded-lg text-center text-sm text-white dark:focus:ring-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium from-red-400 hover:bg-gradient-to-br mb-2 me-2 px-5 py-1.5 to-red-600 via-red-500">Deactive</button>

                                }

                              </td>
                              <td class="py-4">

                                <Link to={`/dashboard/color/update/${v._id}`} >
                                  <div className="flex bg-blue-700 border border-blue-700 h-[40px] justify-center rounded-[50%] text-white w-[40px] dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 items-center">
                                    <MdModeEdit className='text-[18px]' />
                                  </div>
                                </Link>
                              </td>
                            </tr>
                          )
                        })


                        :
                        <tr class="bg-white border-gray-200 text-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:bg-gray-50">
                          <td class="p-4 w-4" colSpan={6}>
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