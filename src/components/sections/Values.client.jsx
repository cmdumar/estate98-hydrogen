/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */

import React from 'react'
import { Image } from '@shopify/hydrogen'

export function Values({
    coffeeleaves
}) {
  return (
    <div className={`
    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Esencia-bg-min.jpg?v=1675160778)]
    bg-center
    bg-cover
    `}>
        <div className='relative min-h-screen flex items-end justify-center'>
            <div className='max-w-2xl top-0 left-0 absolute'>
                <Image src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Coffee_Beverage.png?v=1675772444" alt="beverage" height={"100%"} width={"100%"}/>
            </div>
            <div className='mb-16'>
                <h1 className='text-center text-dark font-alternate my-12 text-5xl'>VALUES</h1>
            </div>
        </div>

        <div className='relative min-h-screen max-w-[100%] flex justify-start mt-24 ml-24 pb-10'>
            <div className='flex gap-16 w-2/4 flex-wrap ml-24'>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-theme'>IMPACT-CONSCIOUS SOURCING</h3>
                    <p className='font-trixie text-lg text-dark'>By partnering with producers that value the strength of community, we are able to transform lives within coffee growing regions.</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-theme'>50% WOMEN PRODUCED</h3>
                    <p className='font-trixie text-lg text-dark'>Working toward gender equity within the coffee industry by sourcing 50% of our beans from women coffee producers.</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-theme'>60% MORE YIELD PER BEAN </h3>
                    <p className='font-trixie text-lg text-dark'>Our proprietary extraction process allows us to get the most out of every bean. This results in more flavor and less waste compared to other forms of cold brew.</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-theme'>BREWED DAILY IN BOULDER</h3>
                    <p className='font-trixie text-lg text-dark'>
                Roast, grind, brew, repeat. Our coffee is made to order, and shipped promptly to ensure maximum flavor and freshness</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-theme'>100% GROUNDS COMPOSTED</h3>
                    <p className='font-trixie text-lg text-dark'>
                When the grounds are spent, we compost 100% of the organic matter that comes from the extraction process. Zero-waste brewing is a non negotiable for us.</p>
                </div>
                <div className="w-72">
                    <h3 className='font-alternate text-2xl text-theme'>NO EQUIPMENT NECESSARY</h3>
                    <p className='font-trixie text-lg text-dark'>
                Eliminate harmful pods and plastics with just one tablespoon. Jot is a responsible routine that will clear off countertops and lessen impact on landfills.</p>
                </div>
            </div>
            <div className='right-0 -top-28 absolute max-w-md'>
                <Image data={coffeeleaves.reference.image}/>
            </div>
        </div>
    </div>
  )
}
