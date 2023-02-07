/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */

import React from 'react'
import { Image, Video } from '@shopify/hydrogen';


export function Process({ 
    video1,
}) {
    // console.log("Process data", process1);
    // console.log("Process data", coffeleaves);
    // console.log("Process data", coffeebeverage);
    // console.log(process1.reference.image);


  return (
    <div className='min-h-screen'>
        {/* video-grid */}
        <div className="max-w-7xl mx-auto mt-12">
            <h1 className='text-center text-black font-alternate my-12 text-5xl'>OUR PROCESS</h1>
            <div className="grid grid-cols-3 place-items-center grid-rows-3 gap-4">
                <div className={`
                    relative
                    bg-center
                    bg-cover
                    grayscale 
                    rounded-none
                    transition all
                    hover:grayscale-0 duration-700 
                    min-h-full w-full
                    order-1
                `}>
                    <Video
                        data={video1.reference}
                        controls={true}
                    />
                    <p className="w-8 h-8 rounded-full absolute top-1 left-1 z-10 bg-white text-center text-[#AA3322] flex items-center justify-center mt-1 ml-1">1</p>
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
                    {/* <Image data={process1.reference.image}/> */}
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

        {/* values */}

        <div className='relative min-h-screen flex items-end justify-center -mt-36'>
            <div className='max-w-2xl top-0 left-0 absolute -z-10'>
                <Image src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Coffee_Beverage.png?v=1675772444" alt="beverage" height={"100%"} width={"100%"}/>
            </div>
            <div className='mb-16 mr-16'>
                <h1 className='text-center text-black font-alternate my-12 text-5xl'>VALUES</h1>
            </div>
        </div>

        <div className='relative min-h-screen max-w-[100%] flex justify-start mt-24 ml-24 mb-28'>
            <div className='flex gap-16 w-2/4 flex-wrap ml-24'>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-[#AA3322]'>IMPACT-CONSCIOUS SOURCING</h3>
                    <p className='font-trixie'>By partnering with producers that value the strength of community, we are able to transform lives within coffee growing regions.</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-[#AA3322]'>50% WOMEN PRODUCED</h3>
                    <p className='font-trixie'>Working toward gender equity within the coffee industry by sourcing 50% of our beans from women coffee producers.</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-[#AA3322]'>60% MORE YIELD PER BEAN </h3>
                    <p className='font-trixie'>Our proprietary extraction process allows us to get the most out of every bean. This results in more flavor and less waste compared to other forms of cold brew.</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-[#AA3322]'>BREWED DAILY IN BOULDER</h3>
                    <p className='font-trixie'>
Roast, grind, brew, repeat. Our coffee is made to order, and shipped promptly to ensure maximum flavor and freshness</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-[#AA3322]'>100% GROUNDS COMPOSTED</h3>
                    <p className='font-trixie'>
When the grounds are spent, we compost 100% of the organic matter that comes from the extraction process. Zero-waste brewing is a non negotiable for us.</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-[#AA3322]'>NO EQUIPMENT NECESSARY</h3>
                    <p className='font-trixie'>
Eliminate harmful pods and plastics with just one tablespoon. Jot is a responsible routine that will clear off countertops and lessen impact on landfills.</p>
                </div>
            </div>
            <div className='top-0 right-0 absolute -z-10 max-w-md'>
                <Image src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Cofeee_Leaves.png?v=1675772501" alt="leaves" height={"100%"} width={"100%"}/>
            </div>
        </div>

    </div>
  )
}
