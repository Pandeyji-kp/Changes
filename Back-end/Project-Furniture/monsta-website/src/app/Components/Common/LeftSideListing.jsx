
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function LeftSideListing() {
    const [meterials, setMeterials] = useState([]);
    const [colors, setColors] = useState([]);


    useEffect(() => {
        axios.post('http://localhost:5000/api/website/materials/view')
            .then((response) => {
                setMeterials(response.data.data);

            })
            .catch(() => [
                toast.error('Something went wrong !!')
            ])
    }, []);

    useEffect(() => {
        axios.post('http://localhost:5000/api/website/color/view')
            .then((response) => {
                setColors(response.data.data);

            })
            .catch(() => [
                toast.error('Something went wrong !!')
            ])
    }, []);


    return (
        <><section class="hidden w-[300px] flex-shrink-0 px-4 lg:block">
            <div class="flex border-b pb-5">
                <div class="w-full">
                    <p class="mb-3 font-medium">CATEGORIES</p>
                    <div class="flex w-full justify-between">
                        <div class="flex justify-center items-center">
                            <input type="checkbox" />
                            <p class="ml-4">Bedroom</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(12)</p>
                        </div>
                    </div>
                    <div class="flex w-full justify-between">
                        <div class="flex justify-center items-center">
                            <input type="checkbox" />
                            <p class="ml-4">Sofa</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(15)</p>
                        </div>
                    </div>
                    <div class="flex w-full justify-between">
                        <div class="flex justify-center items-center">
                            <input type="checkbox" />
                            <p class="ml-4">Office</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(14)</p>
                        </div>
                    </div>
                    <div class="flex w-full justify-between">
                        <div class="flex justify-center items-center">
                            <input type="checkbox" />
                            <p class="ml-4">Outdoor</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(124)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex border-b py-5">
                <div class="w-full">
                    <p class="mb-3 font-medium">BRANDS</p>
                    <div class="flex w-full justify-between">
                        <div class="flex justify-center items-center">
                            <input type="checkbox" />
                            <p class="ml-4">APEX</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(12)</p>
                        </div>
                    </div>
                    <div class="flex w-full justify-between">
                        <div class="flex justify-center items-center">
                            <input type="checkbox" />
                            <p class="ml-4">Call of SOFA</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(15)</p>
                        </div>
                    </div>
                    <div class="flex w-full justify-between">
                        <div class="flex justify-center items-center">
                            <input type="checkbox" />
                            <p class="ml-4">Puff B&amp;G</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(14)</p>
                        </div>
                    </div>
                    <div class="flex w-full justify-between">
                        <div class="flex justify-center items-center">
                            <input type="checkbox" />
                            <p class="ml-4">Fornighte</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(124)</p>
                        </div>
                    </div></div>
            </div>
            <div class="flex border-b pb-5">
                <div class="w-full">
                    <p class="mb-3 font-large">METERIALS</p>
                    {
                        meterials.map((v,i)=>{
                            return(
                                <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center m-3">
                                    <input type="checkbox" />
                                    <p class="ml-4">{v.name}</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">{v.order}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                   
                   
                </div>
            </div>
            <div class="flex border-b pb-5">
                <div class="w-full">
                    <p class="mb-3 font-large">Color</p>
                    {
                        colors.map((v,i)=>{
                            return(
                                <div class="flex w-full justify-between">
                                <div class="flex justify-center items-center m-3">
                                    <input type="checkbox" />
                                    <p class="ml-4">{v.name}</p>
                                </div>
                                <div>
                                    <p class="text-gray-500">{v.order}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                   
                   
                </div>
            </div>
            <div class="flex border-b py-5">
                <div class="w-full"><p class="mb-3 font-medium">PRICE</p>
                    <div class="flex w-full"><div class="flex justify-between">
                        <input x-mask="99999" min="50" class="h-8 w-[90px] border pl-2" placeholder="50" type="number" />
                        <span class="px-3">-</span>
                        <input x-mask="999999" max="999999" class="h-8 w-[90px] border pl-2" placeholder="99999" type="number" />
                    </div>
                    </div>
                </div>
            </div>
            <div class="flex border-b py-5">
                <div class="w-full">
                    <p class="mb-3 font-medium">SIZE</p>
                    <div class="flex gap-2">
                        <div class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">XS</div>
                        <div class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">S</div>
                        <div class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">M</div>
                        <div class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">L</div>
                        <div class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">XL</div>
                    </div>
                </div>
            </div>
            <div class="flex py-5">
                <div class="w-full">
                    <p class="mb-3 font-medium">COLOR</p>
                    <div class="flex gap-2">
                        <div class="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                        </div>
                        <div class="h-8 w-8 cursor-pointer border border-white bg-violet-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                        </div>
                        <div class="h-8 w-8 cursor-pointer border border-white bg-red-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}