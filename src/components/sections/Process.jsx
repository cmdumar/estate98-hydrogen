/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React from 'react'

export function Process() {
  return (
    <div className='min-h-screen'>
        {/* video-grid */}
        <div className="max-w-7xl mx-auto mt-12">
            <h1 className='text-center text-black font-alternate my-12 text-5xl'>OUR PROCESS</h1>
            <div className="grid grid-cols-3 place-items-center grid-rows-3 gap-4">
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-1.jpg?v=1675417854)]
                    bg-center
                    bg-cover
                    grayscale 
                    rounded-none
                    transition all
                    hover:grayscale-0 duration-700
                    min-h-full w-full
                    order-1
                `}>
                    <p className="w-8 h-8 rounded-full bg-white text-center flex items-center justify-center mt-1 ml-1">1</p>
                </div>
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-2.jpg?v=1675417854)]
                    bg-center
                    bg-cover
                    grayscale 
                    rounded-none
                    transition all
                    hover:grayscale-0 duration-700
                    min-h-full w-full
                    row-span-2
                    order-2
                `}>
                    <p className="w-8 h-8 rounded-full bg-white text-center flex items-center justify-center mt-1 ml-1">2</p>
                </div>
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-3.jpg?v=1675386917)]
                    bg-center
                    bg-cover
                    grayscale 
                    rounded-none
                    transition all
                    hover:grayscale-0 duration-700
                    min-h-full w-full 
                    order-3
                `}>
                    <p className="w-8 h-8 rounded-full bg-white text-center flex items-center justify-center mt-1 ml-1">3</p>
                </div>
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-4.jpg?v=1675417853)]
                    bg-center
                    bg-cover
                    grayscale 
                    rounded-none
                    transition all
                    hover:grayscale-0 duration-700
                    min-h-full w-full
                    order-5
                `}>
                    <p className="w-8 h-8 rounded-full bg-white text-center flex items-center justify-center mt-1 ml-1">4</p>
                </div>
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-5.jpg?v=1675417854)]
                    bg-center
                    bg-cover
                    grayscale 
                    rounded-none
                    transition all
                    hover:grayscale-0 duration-700
                    min-h-full w-full
                    order-4
                `}>
                    <p className="w-8 h-8 rounded-full bg-white text-center flex items-center justify-center mt-1 ml-1">5</p>
                </div>
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-6.jpg?v=1675417853)]
                    bg-center
                    bg-cover
                    grayscale 
                    rounded-none
                    transition all
                    hover:grayscale-0 duration-700
                    min-h-full w-full
                    order-6
                `}>
                    <p className="w-8 h-8 rounded-full bg-white text-center flex items-center justify-center mt-1 ml-1">6</p>
                </div>
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-7.jpg?v=1675417853)]
                    bg-center
                    bg-cover
                    grayscale 
                    rounded-none
                    transition all
                    hover:grayscale-0 duration-700
                    min-h-full w-full
                    order-7
                `}>
                    <p className="w-8 h-8 rounded-full bg-white text-center flex items-center justify-center mt-1 ml-1">7</p>
                </div>
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-8.jpg?v=1675417854)]
                    bg-center
                    bg-cover
                    grayscale 
                    rounded-none
                    transition all
                    hover:grayscale-0 duration-700
                    h-64 w-full max-w-lg
                    order-8
                `}>
                    <p className="w-8 h-8 rounded-full bg-white text-center flex items-center justify-center mt-1 ml-1">8</p>
                </div>
                
            </div>
            <h1 className='text-center text-black font-alternate my-12 text-2xl underline underline-offset-4 decoration-4 decoration-[#973122]'>LEARN MORE</h1>
        </div>

        {/* farm-to-glass */}
        <div className="max-w-7xl mx-auto my-20">
            <div className='flex justify-around gap-10 flex-wrap'>
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/farm.jpg?v=1675393004)]
                    bg-center
                    bg-cover
                    grayscale
                    transition all
                    hover:grayscale-0 duration-700
                    w-[565px] h-[410px] max-w-lg flex justify-center items-center`
                }>
                    <p className='text-white text-7xl font-alternate '>
                        FROM OUR FORM
                    </p>
                </div>
                <div className={`
                    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/glass.jpg?v=1675393002)]
                    bg-center
                    bg-cover
                    grayscale
                    transition-all
                    hover:grayscale-0 duration-700
                    w-[565px] h-[410px] max-w-lg flex justify-center items-center`
                }>
                    <p className='text-white text-7xl font-alternate '>
                        TO YOUR GLASS
                    </p>
                </div>
            </div>

            {/* <button className="inline-block rounded-lg font-medium text-center mt-6 py-3 px-6 bg-[#AA3322]">
                Shop Now
            </button> */}
        </div>

    </div>
  )
}
