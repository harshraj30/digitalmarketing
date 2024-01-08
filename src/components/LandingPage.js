import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export const LandingPage = () => {
    const [countOn, setCounterOn] = useState(false)
    return (
        <div className="">

            <div className="bg-blue-950 w-screen flex h-screen mt-14" style={{ backgroundImage: "url(https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/wmx-hero-bg-2.webp)" }}>
                <div className="w-[50%]  h-full items-center  flex">
                    <h1 className='text-white text-6xl font-bold px-24 leading-snug'>Drive growth at scale for your brand.</h1>
                </div>
                <div className="w-[50%]">
                    <div className="flex h-full items-center">
                        <div className="bg-white w-fit p-7 rounded-2xl">
                            <h1 className='text-3xl font-semibold'>What are you interested in?*</h1>
                            <p className='text-sm text-center'>SELECT ALL THAT APPLY</p>
                            <div className="grid grid-cols-3 mt-9 gap-5 text-sm font-semibold">
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none py-3'>Paid Social</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none py-3'>Paid Search</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none py-3'>SEO</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none '>Creative</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none '>CRO</button>
                                <button className='rounded-lg hover:bg-fuchsia-900 hover:text-white focus:bg-fuchsia-900 focus:text-white border outline-none p-1'>Web Design + <br />Development</button>
                            </div>
                            <div className="leading-10 text-sm text-red-600 my-2">
                                <p>Please select at least one option.</p>
                                <p>Please complete all required fields.</p>
                            </div>
                            <div className="w-full flex justify-center mt-5">
                                <button className='bg-sky-700 px-10 text-white duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-screen h-screen items-center justify-center  flex">
                <div className="w-[50%] px-14">
                    <div className="w-full h-full">
                        <h1 className='text-6xl font-semibold text-blue-950'>Unlock your brand’s potential.</h1>
                        <p className='py-14 text-gray-500'>Best-of-breed digital marketing doesn’t live in the siloes of “B2B” or “B2C”. That’s why hundreds of ambitious brands partner with WebMechanix to help them bust through performance plateaus. We apply proven digital marketing approaches to maximize your efficiency. Then, turn up the heat to drive profitable growth at scale.</p>
                        <div className="grid grid-cols-3 gap-5">
                            <img className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/AAG1.png" alt="" />
                            <img className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/solar-logo-2-e1689689031832%201.png" alt="" />
                            <img className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/logo-gong-1%201.png" alt="" />
                            <img className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/everfi-blackbaud-colored-logo%201.png" alt="" />
                            <img className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/TMO1.png" alt="" />
                            <img className='border-2 px-5 py-3 rounded-lg' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/maxim-health-logo%201.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className=" w-full flex items-center justify-center h-full">
                        <img className='rounded-full w-96 h-96' src="https://img.freepik.com/free-photo/conference-room-with-desk-wall-windows-that-says-office_1340-37385.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="bg-amber-50 py-16 w-screen ">
                <div className="text-center">
                    <h1 className='text-6xl text-blue-950 font-semibold'>Our proven process</h1>
                    <p className='text-blue-950 py-6'>Marketing fundamentals drive results – not tactics or fads. That’s what our approach is all about: universal performance <br /> marketing truths that stand the test of time and help you win.</p>
                </div>

                <div className="flex gap-24 mt-14 px-16">
                    <div className="flex gap-5">
                        <p className='text-4xl border-4 rounded-full h-fit w-fit border-sky-500 px-3 py-1'>P</p>
                        <div className="">
                            <h1 className='text-3xl font-semibold'>Prepare</h1>
                            <h2 className='text-base font-semibold'>DISCOVER | MODEL</h2>
                            <p className='text-gray-500 text-sm'>Understand your business and its revenue funnel</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <p className='text-4xl border-4 rounded-full h-fit w-fit border-yellow-500 px-3 py-1'>A</p>
                        <div className="">
                            <h1 className='text-3xl font-semibold'>Act</h1>
                            <h2 className='text-base font-semibold'>PLAN | EXECUTE</h2>
                            <p className='text-gray-500 text-sm'>Identify your  opportunities and attack leverage points within that funnel</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <p className='text-4xl border-4 rounded-full h-fit w-fit border-orange-500 px-3 py-1'>C</p>
                        <div className="">
                            <h1 className='text-3xl font-semibold'>Calibrate</h1>
                            <h2 className='text-base font-semibold'>MEASURE | ADAPT</h2>
                            <p className='text-gray-500 text-sm'>Make necessary course corrections to further align actions with the desired result</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <p className='text-4xl border-4 rounded-full h-fit w-fit border-green-500 px-3 py-1'>E</p>
                        <div className="">
                            <h1 className='text-3xl font-semibold'>Evolve</h1>
                            <h2 className='text-base font-semibold'>ITERATE | OPTIMIZE</h2>
                            <p className='text-gray-500 text-sm'>Constantly measure, adapt, and improve results at each identified lever in the funnel</p>
                        </div>
                    </div>
                </div>

                <div className="w-full pt-32  flex px-16">
                    <div className="w-[50%] flex justify-center">
                        <img className=' w-[80%]' src="https://www.webmechanix.com/wp-content/themes/webmechanix-2021/dist/img/beyond-the-lead.svg" alt="" />
                    </div>
                    <div className="w-[50%] ">
                        <div className="flex justify-center w-full">
                            <div className="">
                                <h1 className='text-5xl leading-snug text-blue-950'>Always going <br />beyond the lead</h1>
                                <p className='pt-4'>We’re never satisfied with just a click or lead. So through <br />our Act and Calibrate phases, we optimize for outcomes <br />that matter most to your business — like qualified leads, <br />sales opportunities, and Closed Won revenue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="">
                <div className="w-screen pt-56 flex">
                    <div className="w-[50%] flex items-center justify-center">
                        <img className='w-96 h-96 rounded-full' src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1017296670ITSupportSpecialist.jpg=ws1280x960" alt="" />
                    </div>
                    <div className="w-[50%] flex items-center">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="">
                                <p className='text-xs'>THE CLIENT:</p>
                                <h1 className='text-2xl font-bold'>ZEPHYR SMARTBEAR</h1>
                                <div className="py-8">
                                    <p className='text-xs'>THE RESULTS:</p>
                                    <h1 className='text-8xl py-2 text-sky-500'>
                                        {countOn && <CountUp start={0} end={1400} duration={2} delay={0} />}
                                        +</h1>
                                    <h2 className='text-xl text-blue-950'>Content asset leads</h2>
                                </div>
                                <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>LEARN MORE</button>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>

                <div className="w-screen pt-56 flex">
                    <div className="w-[50%] flex justify-center">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="">
                                <p className='text-xs'>THE CLIENT:</p>
                                <h1 className='text-2xl font-bold'>WIDEN</h1>
                                <div className="py-8">
                                    <p className='text-xs'>THE RESULTS:</p>
                                    <h1 className='text-8xl py-2 text-sky-500'>
                                        {countOn && <CountUp start={0} end={96} duration={2} delay={0} />}
                                        %</h1>
                                    <h2 className='text-xl text-blue-950'>Decrease in cost per lead</h2>
                                </div>
                                <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>LEARN MORE</button>
                            </div>
                        </ScrollTrigger>
                    </div>
                    <div className="w-[50%] flex items-center ">
                        <img className='w-96 h-96 rounded-full' src="https://thumbs.dreamstime.com/z/business-communication-technology-call-center-concept-friendly-female-helpline-operator-headphones-computer-call-133000803.jpg" alt="" />
                    </div>
                </div>

                <div className="w-screen pt-56 flex">
                    <div className="w-[50%] flex items-center justify-center">
                        <img className='w-96 h-96 rounded-full' src="https://en.idei.club/uploads/posts/2023-06/thumbs/1685716703_en-idei-club-p-computer-pic-dizain-krasivo-16.jpg" alt="" />
                    </div>
                    <div className="w-[50%] flex items-center">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="">
                                <p className='text-xs'>THE CLIENT:</p>
                                <h1 className='text-2xl font-bold'>OPENTRONS</h1>
                                <div className="py-8">
                                    <p className='text-xs'>THE RESULTS:</p>
                                    <h1 className='text-8xl py-2 text-sky-500'>
                                        {countOn && <CountUp start={0} end={10000} duration={2} delay={0} />}
                                        + </h1>
                                    <h2 className='text-xl text-blue-950'>Increase in leads</h2>
                                </div>
                                <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-2 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>LEARN MORE</button>
                            </div>
                        </ScrollTrigger>
                    </div>
                </div>

                <div className="flex w-screen justify-center py-36">
                    <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-3 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>MORE WIN STORIES</button>
                </div>
            </div>

            <div className="bg-blue-950 flex justify-center items-center h-[500px] w-screen">
                <div className=" border-l-4 px-10 border-fuchsia-600">
                    <h1 className='text-5xl pb-9 text-white font-bold font-serif'>Ready to talk digital?</h1>
                    <button className='bg-sky-300 px-10 text-sky-900 font-bold duration-200 py-4 rounded-tl-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl rounded-br-3xl hover:rounded-none'>GET STARTED WITH A FREE AUDIT</button>
                </div>
            </div>
        </div >

    )
}
