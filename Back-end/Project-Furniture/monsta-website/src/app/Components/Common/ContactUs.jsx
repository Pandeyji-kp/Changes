import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
          <ul className="flex justify-center space-x-2 text-gray-600 text-sm mt-2">
            <li>
              <Link href="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>&gt;</li>
            <li className="text-gray-800 font-medium">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="container mx-auto px-4 my-8">
        <h3 className="text-2xl font-semibold text-center mb-4">Find Us on the Map</h3>
        <div className="flex justify-center">
          <iframe
            className="w-full md:w-[80%] h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508709!2d144.9537363156807!3d-37.81720974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1615894312491!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-700">
            <hr />
            <li className="flex items-center gap-2">
              <i className="fa fa-map-marker text-blue-500"></i>
              Address: Claritas est etiam processus dynamicus
            </li>
            <hr />
            <li className="flex items-center gap-2">
              <i className="fa fa-phone text-blue-500"></i>
              9781234560
            </li>
            <hr />
            <li className="flex items-center gap-2">
              <i className="fa fa-envelope text-blue-500"></i>
              furniture@gmail.com
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Tell us your question</h3>
          <form method="POST" action="/contact-us" className="space-y-4">
            <div>
              <label className="block font-medium">Your Name (required)</label>
              <input type="text" name="name" placeholder="Name *" className="w-full p-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block font-medium">Your Email (required)</label>
              <input type="email" name="email" placeholder="Email *" className="w-full p-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block font-medium">Your Mobile Number (required)</label>
              <input type="text" name="mobile" placeholder="Mobile Number *" className="w-full p-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block font-medium">Subject</label>
              <input type="text" name="subject" placeholder="Subject *" className="w-full p-2 border rounded-lg" required />
            </div>
            <div>
              <label className="block font-medium">Your Message</label>
              <textarea name="message" placeholder="Message *" className="w-full p-2 border rounded-lg h-24" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
