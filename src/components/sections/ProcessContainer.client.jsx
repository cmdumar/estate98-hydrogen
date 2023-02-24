import {useState} from 'react';
import {Image} from '@shopify/hydrogen';
import {Heading} from '../index';

export function ProcessContainer() {
  return (
    <>
      <div className="pb-20">
        <div
          className={`
        min-h-screen
        bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Hero_bg.jpg?v=1676983582)]
        bg-center
        bg-cover
        -mt-24
        flex flex-col justify-center items-center gap-8
    `}
        >
          <h1 className="text-center text-black text-6xl tracking-wider font-alternate my-6 uppercase">
            {`How it's made`}
          </h1>
        </div>

        <div className="mt-24 ml-52 pl-10 text-contrast border-l-8 border-l-[rgba(181,147,87,0.2)] rounded-lg">
          <div className="relative">
            <p className="absolute font-trixie text-[#973122] text-2xl -left-48">
              Beginning
            </p>
            <p className="font-alternate text-2xl border-b-4 border-b-[#B59357] inline-block w-fit">
              THE GOLDEN BEAN
            </p>
            <p className="font-trixie text-3xl mt-3">
              Inspired by the history and the legacy of the Larin family.
            </p>
          </div>

          <div className="mt-8 relative">
            <p className="absolute font-trixie text-[#973122] text-2xl -left-48">
              1 day(s)
            </p>
            <p className="font-alternate text-2xl border-b-4 border-b-[#B59357] inline-block w-fit">
              THE GOLDEN BEAN
            </p>
            <Image
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/latte.jpg?v=1676034144"
              width={258}
              height={325}
              className="rounded-2xl mt-3"
              alt="Coffee Field"
            />
            <p className="font-trixie text-3xl mt-3">
              Inspired by the history and the legacy of the Larin family.
            </p>
          </div>

          <div className="mt-8 relative">
            <p className="absolute font-trixie text-[#973122] text-2xl -left-48">
              1.5 day(s)
            </p>
            <p className="font-alternate text-2xl border-b-4 border-b-[#B59357] inline-block w-fit">
              THE GOLDEN BEAN
            </p>
            <Image
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-8.jpg?v=1675417854"
              width={420}
              height={310}
              className="rounded-2xl mt-3"
              alt="Coffee Field"
            />
            <p className="font-trixie text-3xl mt-3">
              Inspired by the history and the legacy of the Larin family.
            </p>
          </div>

          <div className="mt-8 relative">
            <p className="absolute font-trixie text-[#973122] text-2xl -left-48">
              3 day(s)
            </p>
            <p className="font-alternate text-2xl border-b-4 border-b-[#B59357] inline-block w-fit">
              THE GOLDEN BEAN
            </p>
            <Image
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/process-1.jpg?v=1675417854"
              width={522}
              height={323}
              className="rounded-2xl mt-3"
              alt="Coffee Field"
            />
            <p className="font-trixie text-3xl mt-3">
              Inspired by the history and the legacy of the Larin family.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
