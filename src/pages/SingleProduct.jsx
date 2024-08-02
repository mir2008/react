import React from 'react'
import group94 from '../assets/images/Group 94.png'
import group96 from '../assets/images/Group 96.png'
import group97 from '../assets/images/Group 97.png'
import group95 from '../assets/images/Group 95.png'
import star from '../assets/images/Group 88.png'
import size from '../assets/images/Group 92.png'
import blue from '../assets/images/Rectangle 42.png'
import black from '../assets/images/Rectangle 43.png'
import orange from '../assets/images/Rectangle 44.png'
import tablec1 from '../assets/images/Trenton modular sofa_3 1.png'
import tablec2 from '../assets/images/Granite dining table with dining chair 1.png'
import tablec3 from '../assets/images/Trenton modular sofa_3 1.png'
import tablec4 from '../assets/images/Plain console with teak mirror 1.png'
const SingleProduct = ({count,increment,decrement}) => {
    return (
        <>
            <div className='grid container mx-auto grid-cols-3'>
                <div className="container mx-auto my-[50px]">
                    <div className="path">
                        <a href="">Home /</a>
                        <a href="">Shop |</a>
                        <a href="">Asagaard safa</a>
                    </div>
                    <div className="card">
                        <div className="left_img grid gap-5">
                            <img src={group94} alt="" />
                            <img src={group96} alt="" />
                            <img src={group97} alt="" />
                            <img src={group94} alt="" />
                        </div>
                    </div>
                </div>
                <div className="relative right-80 main_img my-[75px] ">
                    <img src={group95} alt="" />
                </div>
                <div className='my-[75px] relative right-56'>
                    <h2>Asgaard sofa</h2>
                    <h3>Rs. 250,000.00</h3>
                    <div className="star flex mb-5">
                        <img src={star} alt="" /> |
                        <span>5 Customer Review</span>
                    </div>
                    <p className='mb-8'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                    <img src={size} alt="" />
                    <div className='mb-8'>
                        <span>Color</span>
                        <div className='flex gap-5'>
                            <img src={blue} alt="" />
                            <img src={black} alt="" />
                            <img src={orange} alt="" />
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-3'>
                        <div>
                            <button onClick={()=>decrement()} className='text-2xl border  p-5 py-2'>-</button>
                            <button className='text-2xl border  p-5 py-2'>{count}</button>
                            <button onClick={() => increment()} className='text-2xl border  p-5 py-2'>+</button>
                        </div>
                        <button className='p-2 px-20 rounded-lg border'>Add to Cart</button>
                    </div>
                </div>
            </div>

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
git         </>
    )
}

export default SingleProduct