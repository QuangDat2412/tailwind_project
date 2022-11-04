import React from 'react';
import { Transition, Tab } from '@headlessui/react';
function Home() {
    const [darkToggle, setDarkToggle] = React.useState(false);
    const [isOpen, setOpen] = React.useState(false);
    return (
        <>
            {/* <div className={`h-screen w-full flex items-center justify-center bg-[#b5e908] flex-col ${darkToggle && 'dark'}`}>
                <label className="toggleDarkBtn">
                    <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                    <span className="slideBtnTg round"></span>
                </label>
                <div className="max-w-sm overflow-hidden bg-gray-100 p-5 rounded-lg mt-4 text-white dark:bg-gray-900">
                    <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-800 dark:text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                            exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="hover:text-white hover:bg-gray-800 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                            #photography
                        </span>
                        <span className="hover:text-white hover:bg-gray-800 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                            #travel
                        </span>
                        <span className="hover:text-white hover:bg-gray-800 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                            #winter
                        </span>
                    </div>
                </div>
            </div> */}
            {/* <div className="flex h-64 ">
                <div className="w-1/2 bg-grey-500"></div>
                <div className="w-1/2 bg-pink-500"></div>
            </div> */}
            {/* <div className="flex h-64 flex-col">
                <div className="h-1/3 bg-grey-500"></div>
                <div className="h-1/3 bg-pink-500"></div>
                <div className="h-1/3 bg-grey-500"></div>
            </div> */}
            <div className="card relative bg-slate-900 text-slate-50 flex justify-center ">
                <Tab.Group>
                    <Tab
                        type="button"
                        className="bg-red-400"
                        onClick={() => {
                            setOpen((x) => !x);
                        }}
                    >
                        Dropdown
                    </Tab>
                    <Tab
                        type="button"
                        className="bg-red-400"
                        onClick={() => {
                            setOpen((x) => !x);
                        }}
                    >
                        Dropdown
                    </Tab>
                </Tab.Group>
                <Transition
                    show={isOpen}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="origin-bottom-right absolute right-[calc(50% - 7rem)] bottom-[-150%] mt-2 w-56 rounded-md shadow-lg "
                >
                    <div className="rounded-md bg-white shadow-xs text-blue-700 p-10">Hello</div>
                </Transition>
            </div>
        </>
    );
}
export default Home;
