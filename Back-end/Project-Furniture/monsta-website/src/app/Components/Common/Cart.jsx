import Link from 'next/link';

export default function ShoppingCart() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Shopping Cart</h3>
          <ul className="flex justify-center space-x-2 text-gray-600 text-sm mt-2">
            <li>
              <Link href="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>&gt;</li>
            <li className="text-gray-800 font-medium">Shopping Cart</li>
          </ul>
        </div>
      </div>

      {/* Empty Cart Message */}
      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        <img 
          src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg" 
          alt="Empty Cart"
          className="w-64 h-64 mb-6"
        />
        <p className="text-lg text-gray-700">Your shopping cart is empty!</p>
      </div>
    </>
  );
}
