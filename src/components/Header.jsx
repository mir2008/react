import React from 'react'
import user from '../assets/images/mdi_account-alert-outline.svg'
import search from '../assets/images/akar-icons_search.svg'
import heart from '../assets/images/akar-icons_heart.svg'
import shop from '../assets/images/ant-design_shopping-cart-outlined.svg'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>


            <nav class="bg-[#FBEBB5] border-gray-200 ">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto px-[20px] p-4">
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden  w-full md:block md:w-auto" id="navbar-default">
                        <div className='flex gap-24 flex-wrap items-center'>
                            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-black">
                                <Link to={'/'}>
                                    <li>
                                        <a href="#" class="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
                                    </li>
                                </Link>
                                <Link to={'/*'}>

                                    <li>
                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent">About</a>
                                    </li>
                                </Link>
                                <Link>

                                    <li>
                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent">Services</a>
                                    </li>
                                </Link>
                                <Link>

                                    <li>
                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent">Pricing</a>
                                    </li>
                                </Link>

                                <Link>

                                    <li>
                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent">Contact</a>
                                    </li>
                                </Link>

                            </ul>
                            <ul className='flex flex-wrap items-center gap-10'>
                                <Link to={'/user'}>
                                    <li>
                                        <a href=""><img src={user} alt="" /></a>
                                    </li>
                                </Link>
                                <Link to={'/search'}>
                                
                                <li>
                                    <a href=""><img src={search} alt="" /></a>
                                </li>
                                </Link>

                                <li>
                                    <a href=""><img src={heart} alt="" /></a>
                                </li>
                                <Link to={'/products/single-product'}>
                                    <li>
                                        <a href=""><img src={shop} alt="" /></a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header