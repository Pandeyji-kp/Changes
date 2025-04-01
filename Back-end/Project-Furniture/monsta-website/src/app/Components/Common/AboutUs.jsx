import Image from "next/image";
import Link from "next/link";
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

export default function About() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">About Us</h3>
          <ul className="flex justify-center space-x-2 text-gray-600 text-sm mt-2">
            <li>
              <Link href="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>&gt;</li>
            <li className="text-gray-800 font-medium">About Us</li>
          </ul>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <Image 
            src="/images/983cc349-1718-4290-b7cd-c8eb20459536-1671213069 (1).jpg"
            alt="About Us"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold">Welcome to Monsta!</h1>
            <p className="mt-4 text-gray-600">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
            </p>
            <span className="block mt-4 italic text-gray-500">
              “There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”
            </span>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-8">Why Choose Us?</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Creative Design", image: "/images/smile.jpg" },
              { title: "100% Money Back Guarantee", image: "/images/home.jpg" },
              { title: "Online Support 24/7", image: "/images/mens.jpg" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Image 
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="mt-2 text-gray-600">Erat metus sodales eget dolor consectetuer, porta ut purus at et alias.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Gallery Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "What Do We Do?", image: "/images/girl.jpg" },
            { title: "Our Mission", image: "/images/makeup.jpg" },
            { title: "History Of Us", image: "/images/love.jpg" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image 
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="mx-auto rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="mt-2 text-gray-600">Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
            </div>
          ))}
        </div>
      </div>


 {/* what Our Gallery Section */}
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
    </>
  );
}
