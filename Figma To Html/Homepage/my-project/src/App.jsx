import './index.css'
import { IoIosHome } from "react-icons/io";

function App() {
  return (
    <>
      <header class="bg-[#D1B48C]">
        <nav class="mx-auto flex max-w-10xl items-center justify-between p-3 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-[36px] w-auto" src="src/assets/logo.png" alt="" />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Open main menu</span>
              <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="flex items-center space-x-4 p-4">
            <img src="src\assets\House.png" alt="" />
          </div>
          <img src="src\assets\Line 1794.png" alt="" />
          <div class="flex items-center space-x-4 ">
            <img src="src\assets\form.png" alt="" />
          </div>
          <img src="src\assets\Line 1794.png" alt="" />
          <div class="flex items-center space-x-4 p-4">
            <img src="src\assets\notification.png" alt="" />
          </div>
          <img src="src\assets\Line 1794.png" alt="" />
          <div class="flex items-center space-x-4 p-4">
            <img src="src\assets\discussion.png" alt="" />
          </div>
          <img src="src\assets\Line 1794.png" alt="" />
          <div class="flex items-center space-x-4 p-4">
            <img src="src\assets\add stock.png" alt="" />
          </div>
          <img src="src\assets\Line 1794.png" alt="" />
          <div class="flex items-center space-x-4 p-4">
            <img src="src\assets\Union 1.png" alt="" />
          </div>
          <img src="src\assets\Line 1794.png" alt="" />
          <div class="flex items-center space-x-4 p-4">
            <img src="src\assets\Member23786.png" alt="" />
          </div>
        </nav>
      </header>

      <div className='bg-[#E5D7C3] '>
        <div class="grid grid-cols-5 w-5/6 m-auto">
          <div class="col-span-4 bg-white font-bold mt-6 p-6 rounded-md">Top Movers
            <img src="src/assets/Frame.png" alt="" className='m-3'/>
          </div>
          <div class="col-span-1 bg-green-500 text-white ml-6 p-6">20% Width Sidebar</div>
        </div>

      </div>

    </>
  )
}

export default App
