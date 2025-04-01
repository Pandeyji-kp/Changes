import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 py-6">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Privacy Policy</h3>
        <ul className="flex justify-center space-x-2 text-gray-600 text-sm mt-2">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>&gt;</li>
          <li className="text-gray-800 font-medium">Privacy Policy</li>
        </ul>
      </div>

      {/* Privacy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900">Who we are</h2>
          <p className="text-gray-700">
            Our website address is: <Link href="/" className="text-blue-500">http://localhost/furniture</Link>
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-6">What personal data we collect and why we collect it</h2>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">Comments</h3>
          <p className="text-gray-700">
            When visitors leave comments, we collect the data shown in the form, along with the visitor’s IP address and
            browser user agent string to help spam detection.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Media</h3>
          <p className="text-gray-700">
            If you upload images, avoid including embedded location data (EXIF GPS), as visitors can extract location data
            from images.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Cookies</h3>
          <p className="text-gray-700">
            If you leave a comment, you may opt-in to saving your details in cookies. These last for one year for convenience.
          </p>
          <p className="text-gray-700">
            Login cookies last two days, while screen option cookies last a year. If "Remember Me" is selected, login persists
            for two weeks.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Embedded content from other websites</h3>
          <p className="text-gray-700">
            Articles may include embedded content (videos, images, articles, etc.) which behaves similarly to visiting the
            original site.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-6">How long we retain your data</h2>
          <p className="text-gray-700">
            Comments and their metadata are retained indefinitely for follow-up approvals.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-6">What rights you have over your data</h2>
          <p className="text-gray-700">
            If you have an account or have left comments, you can request an exported file of your data. You can also request
            data deletion, excluding mandatory records.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-6">Where we send your data</h2>
          <p className="text-gray-700">Visitor comments may be checked through an automated spam detection service.</p>
        </div>
      </div>
    </div>
  );
}
