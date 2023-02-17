/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Journey } from './Journey.client'
import { Image } from '@shopify/hydrogen';

export function StorySection() {
    const [showStory, setShowStory] = useState(false)

    const story = () => {
        setShowStory(!showStory)
      }

  return (
    <>
      {showStory && <Journey story={story}/>}
      <div className='
        min-h-screen
        bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Hero.jpg?v=1674774427)]
        bg-center
        bg-cover
        -mt-24
        flex flex-col justify-center items-center  gap-8
    '>
      <Image src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/stamp-min.png?v=1674829922" width={`150`} height={`150`}/>
      <h1 className="text-center text-black text-6xl tracking-wider font-alternate my-6">
        {`HERE'S HOW IT ALL STARTED..`}
      </h1>
      <button className="inline-block  text-white rounded-lg text-center py-5 px-7 bg-[#AA3322]" onClick={story} >
            BEGIN JOURNEY
      </button>
    </div>
    </>
  );
}
