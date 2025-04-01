import React from 'react'

export default function
    () {
    return (
        <>
        
            <div class="max-w-[1220px] mx-auto py-5">
                <h3 class="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                    Add Size
                </h3>
                <form class="border border-t-0 p-3 rounded-b-md border-slate-400">
                    <div class="mb-5">
                        <label for="base-input" class="block mb-5 text-md font-medium text-gray-900"
                        >Size Name
                        </label>
                        <input type="text" name="sizeName" id="base-input" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 " placeholder="Side Name" />
                    </div>
                    <div class="pe-5 ps-1">
                        <span class="flex items-center gap-3">
                            Status :
                            <input id="link-radio" name="sizeStatus" type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " value="" />
                            Active
                            <input id="link-radio" name="sizeStatus" type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " value="" />
                            Deactive
                            <button type="submit" class="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                                Add Size
                            </button>
                        </span>
                    </div>
                </form>
            </div>

        </>
    )
}
