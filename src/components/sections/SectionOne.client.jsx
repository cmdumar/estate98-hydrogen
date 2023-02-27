/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */ 
import {Image} from '@shopify/hydrogen';
import {Heading, Text} from '~/components';
import React, {useState} from 'react';
import { Input } from 'postcss';

export const SectionOne = () => {

  const [sub, setSub] = useState(true);
  const [counter, setCounter] = useState(0)
  let price = 450;


  return (
    <section className="mt-10">
      <Heading className="font-alternate text-6xl text-center text-black uppercase mb-16">
        Come, become a <span style={{color: '#973122'}}>part</span> of our
        family
      </Heading>

      <section className="flex justify-around px-10 max-w-[1380px mx-auto]">
        <div className="w-3/5 flex flex-col justify-center items-center">
          <Image
            src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/bottle.png?v=1674795511"
            alt="Coffee bottle"
            width={220}
            height={300}
          />
          <Text className="font-trixie px-20 pt-6 text-black text-justify text-xl">
            Inspired by the history and the legacy of the Larin family, our
            vision for the Estate 98 brand is centered around the coffee itself
            - once known as &quot;El Grano de Oro&quot; (The Golden Bean) - and
            its origin story with the magnificent Santa Ana volcano, where
            coffee trees prosper and cherries are picked under the beaming rays
            of the dry season in El Salvador.
          </Text>
        </div>
        <div className="w-2/5">   
          <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow text-contrast mt-20">
            {/* subscription tab */}
            <div className="flex font-alternate text-2xl w-full text-white rounded-[24px] text-center cursor-pointer">
              <div className={sub?` relative flex-1 rounded-l-lg bg-[#B59357] p-4`:` rounded-l-lg relative flex-1 bg-[#EEE] text-[#B59357] p-4`} onClick={() => setSub(true)}>SUBSCRIPTION
                <div className={sub?`bg-theme text-sm rounded px-1 py-[3px] absolute right-[2%] top-1 text-white`:`bg-theme py-[2px] text-white text-sm rounded px-1 absolute right-[2%] top-1`}>SAVE 10%</div>
              </div>
              <div className={sub?`flex-1 bg-[#EEE] rounded-r-lg text-[#B59357] p-4`: ` rounded-r-lg flex-1 bg-[#B59357] p-4`} onClick={() => setSub(false)}>ONE-TIME</div>
            </div>

            <p className={sub?`text-[#6d6d6d] text-xl my-4 font-alternate`: `hidden`}>BILLED ONCE A MONTH</p>

            {/* count */}
            <div className='flex justify-between my-4'>
              <div>
                <p className='font-alternate text-4xl text-black'>ORIGINAL BOTTLE</p>
                <p className="text-[#6d6d6d] text-xl my-1 font-alternate">PURE COFFEE DELICIOUSNESS</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-theme text-4xl font-trixie cursor-pointer' onClick={() => setCounter(counter-1)}>-</p>
                <div className='bg-[#EEE] px-6 rounded-lg py-1 text-black font-trixie'>{counter}</div>
                <p className='text-theme text-4xl font-trixie cursor-pointer' onClick={() => setCounter(counter+1)}>+</p>
              </div>
            </div>

            {/* price */}
            <div className='flex justify-between my-6'>
              <p className='font-alternate text-3xl text-black'>TOTAL</p>
              <p className='font-trixie text-4xl text-theme'>{`$${price*counter}`} <span className={sub?`font-alternate text-3xl ml-[-16px] text-black`: `hidden`}>/MO</span></p>
            </div>

            {/* Coupon code  */}
            <div className='flex gap-4 justify-between items-center'>
              <input className='w-3/4 bg-[#EEE] px-6 font-trixie text-base rounded-lg h-14' placeholder="Enter coupon code.."/>
              <button className='bg-[#B59357] h-14 w-1/4 rounded-lg '>Apply</button>
            </div>

            <div>
            <button className='bg-theme text-3xl text-white px-6 py-4 font-alternate w-full rounded-lg mt-7'>{sub?`SUBSCRIBE`: `BUY`}</button>
            </div>

            {/* <a href="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                Need a help in Claim?
              </h5>
            </a> */}
            {/* <p className="mb-3 font-normal text-gray-500">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p> */}
            {/* <a
              href="/"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              See our guideline
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </section>
    </section>
  );
};
