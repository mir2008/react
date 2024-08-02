import React from 'react'
import home_img from '../assets/images/Rocket single seater 1.png'
import table from '../assets/images/Granite square side table 1.png'
import divan from '../assets/images/Cloud sofa three seater + ottoman_3 1.png'
import tablec1 from '../assets/images/Trenton modular sofa_3 1.png'
import tablec2 from '../assets/images/Granite dining table with dining chair 1.png'
import tablec3 from '../assets/images/Trenton modular sofa_3 1.png'
import tablec4 from '../assets/images/Plain console with teak mirror 1.png'
import divane from '../assets/images/Asgaard sofa 1.png'
import comp from '../assets/images/Rectangle 13.png'
import rect14 from '../assets/images/Rectangle 14.png'
import rect15 from '../assets/images/Rectangle 15.png'
import group37 from '../assets/images/Group 37.png'
import bg_img from '../assets/images/Group 47.png'

const Home = () => {
    return (
        <div>
            <main>
                <section className='hero w-full h-[900px] bg-[#FBEBB5]'>
                    <div className='container mx-auto px-[130px] py-[130px] flex '>
                        <div className="title w-full mt-[150px]">
                            <h1 className='text-5xl home_title font-semibold mb-20'>Rocket single <br />seater</h1>
                            <a href="" className='underline'>Shop Now</a>
                        </div>

                        <div className='w-full h-full'>
                            <img className='w-full h-full' src={home_img} alt="" />
                        </div>
                    </div>
                </section>
                <section className='cards w-full h-[672px] bg-[#FAFAF4]'>
                    <div className='container flex flex-row justify-between gap-[20px] mx-auto px-[50px] py-[30px]'>
                        <div className="card">
                            <img src={table} alt="" />
                            <h2 className='text-2xl mx-[150px]'>Side table</h2>
                            <p className='underline text-xl mx-[150px]'>View More</p>
                        </div>
                        <div className="card">
                            <img src={divan} alt="" />
                            <h2 className='text-2xl mx-[150px]'>Side table</h2>
                            <p className='underline text-xl mx-[150px]'>View More</p>
                        </div>
                    </div>
                </section>
                <section className='foryou w-full h-[777px]'>
                    <div className="container mx-auto px-[50px] py-[30px]">
                        <div className="title flex w-full justify-center items-center flex-col">
                            <h2 className='text-black text-3xl font-semibold mb-4'>Top Picks For You</h2>
                            <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
                        </div>
                        <div className='cardes flex flex-wrap gap-5 justify-center'>


                            <div class="max-w-sm bg-white  rounded-lg  text-black">
                                <a href="#" className=' flex flex-wrap justify-center'>
                                    <img class="rounded-t-lg" src={tablec1} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Trenton modular sofa_3</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black">
                                        Rs. 25,000.00
                                    </a>
                                </div>
                            </div>
                            <div class="max-w-sm bg-white rounded-lg  text-black">
                                <a href="#" className=' flex flex-wrap justify-center'>
                                    <img class="rounded-t-lg  mb-28" src={tablec2} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Granite dining table with dining chair</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black">
                                        Rs. 25,000.00
                                    </a>
                                </div>
                            </div>
                            <div class="max-w-sm bg-white  rounded-lg  text-black">
                                <a href="#" className=' flex flex-wrap justify-center'>
                                    <img class="rounded-t-lg " src={tablec3} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Outdoor bar table and stool</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black">
                                        Rs. 25,000.00
                                    </a>
                                </div>
                            </div>
                            <div class="max-w-sm bg-white  rounded-lg  text-black">
                                <a href="#" className=' flex flex-wrap justify-center'>
                                    <img class="rounded-t-lg h-full mb-28" src={tablec4} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Outdoor bar table and stool</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black">
                                        Rs. 25,000.00
                                    </a>
                                </div>
                            </div>  

                        </div>
                    </div>
                    <div className="end flex flex-wrap justify-center">
                        <a href="" className='underline text-xl'>View more</a>
                    </div>
                </section>
                <section className='ordering w-full h-[639px] bg-[#FFF9E5]'>
                    <div className='flex gap-2 container mx-auto px-[50px] py-[30px]'>
                        <div>
                            <img src={divane} alt="" />
                        </div>
                        <div className='w-[50%] flex flex-col items-center justify-center py-[40px]'>
                            <p className='text-xl'>New Arrivals</p>
                            <h2 className='text-5xl font-bold'> Asgaard sofa</h2>
                            <button className='mt-5 border border-black hover:bg-black hover:text-white p-3 px-10'>Order Now</button>
                        </div>
                    </div>
                </section>
                <section className='blog w-full h-[944px]'>
                <div className="container mx-auto px-[50px] py-[30px]">
                        <div className="title flex w-full mb-5 justify-center items-center flex-col">
                            <h2 className='text-black text-3xl font-semibold mb-4'>Our Blogs</h2>
                            <p>Find a bright ideal to suit your taste with our great selection</p>
                        </div>
                        <div className='cardes flex flex-wrap gap-3 justify-center'>


                            <div class="max-w-sm bg-white  rounded-lg  text-black">
                                <a href="#" className=' flex flex-wrap justify-center'>
                                    <img class="rounded-t-lg" src={comp} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Going all-in with millennial design</p>
                                    <a href="#" class="inline-flex underline  items-center px-3 py-2 text-sm font-medium text-center text-black">
                                        Read More
                                    </a>
                                    <img src={group37} alt="" />
                                </div>
                            </div>
                            
                            <div class="max-w-sm bg-white rounded-lg  text-black">
                                <a href="#" className=' flex flex-wrap justify-center'>
                                    <img class="rounded-t-lg " src={rect14} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Going all-in with millennial design</p>
                                    <a href="#" class="inline-flex underline  items-center px-3 py-2 text-sm font-medium text-center text-black">
                                        Read More
                                    </a>
                                    <img src={group37} alt="" />
                                </div>
                            </div>

                            <div class="max-w-sm bg-white  rounded-lg  text-black">
                                <a href="#" className=' flex flex-wrap justify-center'>
                                    <img class="rounded-t-lg " src={rect15} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Going all-in with millennial design</p>
                                    <a href="#" class="inline-flex underline  items-center px-3 py-2 text-sm font-medium text-center text-black">
                                        Read More
                                    </a>
                                    <img className='width-10' src={group37} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="end flex flex-wrap justify-center">
                        <a href="" className='underline text-xl'>View more</a>
                    </div>
                    </div>
                </section>
                <section className='relative w-full h-[450px]'>
                    <img className='' src={bg_img} alt="" />
                    <button className='w-[245px] h-[56px] bg-red-100 font-bold border rounded-full absolute top-[55%] left-[41%]'>Follow Us</button>
                </section>
            </main>
        </div>
    )
}

export default Home