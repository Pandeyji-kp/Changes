import { AiOutlineGlobal } from "react-icons/ai";
import { SiVerizon } from "react-icons/si";
import { CiTimer } from "react-icons/ci";
const testimonials = [
    {
        name: "Kathy Young",
        role: "CEO of SunPark",
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg",
        review:
            "These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!",
        rating: 3,
    },
    {
        name: "John Doe",
        role: "Founder of TechWorld",
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png",
        review:
            "These guys have been absolutely outstanding. Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!",
        rating: 4,
    },
    {
        name: "Jane Smith",
        role: "CTO of InnovateX",
        image:
            "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg",
        review:
            "Amazing service and top-notch themes! The design flexibility is incredible. Very satisfied with the outcome!",
        rating: 5,
    },
];



export default function SecondLast() {
    return (
        <>
            <div className="bg-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

                        {/* Free Shipping */}
                        <div className="flex flex-col items-center  p-6 rounded-lg">
                            <div className="w-12 h-12 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                                <AiOutlineGlobal className="text-2xl text-gray-700" />
                            </div>
                            <h3 className="text-lg font-semibold">Free Shipping</h3>
                            <p className="text-gray-600">Free shipping on all orders</p>
                        </div>

                        {/* Money Return */}
                        <div className="flex flex-col items-center  p-6 rounded-lg">
                            <div className="w-12 h-12 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                                <SiVerizon className="text-2xl text-gray-700" />
                            </div>
                            <h3 className="text-lg font-semibold">Money Return</h3>
                            <p className="text-gray-600">Back guarantee under 7 days</p>
                        </div>


                        {/* Online Support */}
                        <div className="flex flex-col items-center  p-6 rounded-lg">
                            <div className="w-12 h-12 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                                <CiTimer className="text-2xl text-gray-700" />
                            </div>
                            <h3 className="text-lg font-semibold">Online Support</h3>
                            <p className="text-gray-600">Support online 24 hours a day</p>
                        </div>


                    </div>
                </div>
            </div>
            
            <section className="py-10 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">What Our Customers Say?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <p className="text-gray-700 italic">"{testimonial.review}"</p>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full mx-auto my-4"
                                />
                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                <p className="text-gray-500">{testimonial.role}</p>
                                <div className="flex justify-center mt-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">&#9733;</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center justify-center text-center py-10">
                <h2 className="text-2xl font-bold">Our Newsletter</h2>
                <p className="text-gray-600 mt-2">Get E-mail updates about our latest shop and special offers.</p>

                <form className="flex h-10 w-full max-w-md items-center border mt-4 md:w-2/5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="mx-3 h-5 w-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>

                    <input
                        className="w-full outline-none text-sm px-2"
                        type="email"
                        placeholder="Enter your email..."
                    />

                    <button className="ml-auto h-full bg-amber-400 px-4 text-white hover:bg-yellow-300">
                        Subscribe
                    </button>
                </form>
            </div>



        </>
    )
}
