import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="grid place-content-start grid-flow-col gap-x-6">
        <a href="/?nc=logo">
          <svg class="h-9 w-23">
            <use href="/bb2assets/flutter/bb-logo.svg#bb tata logo">
            </use>
          </svg>
        </a>
        <div class="Header___StyledQuickSearch2-sc-19kl9m3-0 gzbZOD">
          <div class="Backdrop___StyledDiv-sc-1mhwh2y-0 byswZs QuickSearch___StyledBackdrop-sc-rtz2vl-0 bVFfGW">
            <div class="relative h-full" data-headlessui-state=""><div class="QuickSearch___StyledMenuButton-sc-rtz2vl-1 dpuSIx">
              <svg class="mx-2.5 w-4 h-4 text-appleGreen-500 fill-appleGreen-500">
                <use href="/bb2assets/flutter/search.svg#search">
                </use>
              </svg>
              <input type="text" placeholder="Search for Products..." class="flex-1 w-full leading-md lg:text-sm xl:text-md placeholder-silverSurfer-700" value="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
