import React from 'react'

export default function SliderDetails() {
    return (
        <>
            <div class="max-w-[1220px] mx-auto py-5">
                <h3 class="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">Add Slider</h3>
                <form class="border border-t-0 p-3 rounded-b-md border-slate-400">
                    <div class="mb-5">
                        <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Slider Name</label>
                        <input type="text" name="sliderName" id="base-input" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 " placeholder="Slider Name" />
                    </div>
                    <div class="mb-5">
                        <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Heading</label>
                        <input type="text" name="sliderHeading" id="base-input" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 " placeholder="Heading" />
                    </div>
                    <div class="mb-5">
                        <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Sub Heading</label>
                        <input type="text" name="sliderSubHeading" id="base-input" class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 " placeholder="Sub Heading" />
                    </div>
                    <div class="mb-5">
                        <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Slider Images</label>
                        <form class="max-w-full"><label for="file-input" class="sr-only">Choose file</label>
                            <input type="file" name="sliderImgs-input" id="file-input" class="block w-full border-2 border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4" multiple="" />
                        </form>
                    </div>
                    <div class="pe-5 ps-1">
                        <span class="flex items-center gap-3">Status :
                            <input id="link-radio" name="status" type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " value="" />
                            Active
                            <input id="link-radio" name="status" type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " value="" />
                            Deactive
                        </span>
                    </div>
                    <button type="submit" class="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                        Add Slider
                    </button>
                </form>
            </div>

        </>
    )
}
