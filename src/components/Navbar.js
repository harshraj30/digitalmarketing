import React from 'react'

export const Navbar = () => {
    return (
        <div className='w-screen fixed top-0 bg-blue-950 flex px-16 py-3 justify-between'>
            <div className="">
                <h1 className='text-2xl cursor-pointer font-light text-white'>Logo<span className=' font-bold'>Lagalo</span></h1>
            </div>
            <div className="flex gap-10 text-lg text-gray-200 font-semibold items-center">
                {/* <div className="group:ho block ">
                <h1 className='hidden'>harsh</h1>
                </div> */}
                <div className="group">
                    <a className='' href="">about us</a>
                    <div className="absolute z-20 hidden group-hover:block -ml-10 mt-2 shadow-xl">
                        <div className=" h-4 -mt-3"></div>
                        <div className="flex flex-col bg-white text-black p-4 leading-loose rounded-lg text-sm">
                            <a className='hover:text-fuchsia-900' href="">PAID SOCIAL</a>
                            <a className='hover:text-fuchsia-900' href="">PAID SEARCH</a>
                            <a className='hover:text-fuchsia-900' href="">SEO</a>
                            <a className='hover:text-fuchsia-900' href="">CREATIVE</a>
                            <a className='hover:text-fuchsia-900' href="">CRO</a>
                            <a className='hover:text-fuchsia-900' href="">WEB DESIGN + DEVELOPMENT</a>
                            <a className='hover:text-fuchsia-900' href="">PRODUCTS</a>
                        </div>
                    </div>
                </div>
                <a href="">our teams</a>
                <div className="group">
                    <a href="">our projects</a>
                    <div className="absolute z-20 hidden group-hover:block  mt-2 shadow-xl">
                        <div className=" h-4 -mt-3"></div>
                        <div className="flex flex-col bg-white text-black p-4 leading-loose rounded-lg text-sm">
                            <a className='hover:text-fuchsia-900' href="">ABOUT US</a>
                            <a className='hover:text-fuchsia-900' href="">TEAM</a>
                            <a className='hover:text-fuchsia-900' href="">AWARDS</a>
                            <a className='hover:text-fuchsia-900' href="">CAREERS</a>
                        </div>
                    </div>
                </div>
                <div className="group">
                <a href="">Support</a>
                <div className="absolute z-20 hidden group-hover:block -ml-7  mt-2 shadow-xl">
                        <div className=" h-4 -mt-3"></div>
                        <div className="flex flex-col bg-white text-black p-4 leading-loose rounded-lg text-sm">
                            <a className='hover:text-fuchsia-900' href="">BLOG</a>
                            <a className='hover:text-fuchsia-900' href="">PODCAST</a>
                            <a className='hover:text-fuchsia-900' href="">NEWSLETTER</a>
                        </div>
                    </div>
                </div>
                <a className='bg-sky-700 px-5 text-white duration-200 py-0.5 rounded-tl-full hover:rounded-bl-full hover:rounded-tr-full rounded-br-full hover:rounded-none' href="">services</a>
            </div>











        </div>
    )
}
