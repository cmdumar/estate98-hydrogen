import {Image} from '@shopify/hydrogen';
import {Heading} from '~/components';

export function Hero({
  heading,
  loading,
  bottle,
  top,
  stamp,
  pickedByHand = false,
}) {
  return (
    <>
      <section
        className={`relative flex flex-col w-full ${
          pickedByHand ? 'justify-end' : 'justify-center'
        } ${top && '-mt-nav'} min-h-screen`}
      >
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          {!pickedByHand ? (
            <div
              className={`
              bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Hero_bg.jpg?v=1676983582)]
              bg-center
              bg-cover
              min-h-screen
              `}
            ></div>
          ) : (
            <div
              className={`
            bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/pickedByHand.jpg?v=1674826797)]
            bg-center
            bg-cover
            min-h-screen`}
            ></div>
          )}
        </div>
        {!pickedByHand ? (
          <div
            className="flex
        flex-col
        md:flex-row    
        justify-center
        items-center
        dark:from-contrast/60 
        dark:text-primary 
        from-primary/60 
        text-contrast mt-20"
          >
            <div className="flex-1">
              {heading?.value && (
                <Heading
                  format
                  as="h3"
                  size="display"
                  className="text-center drop-shadow-md font-alternate text-6xl md:text-7xl uppercase w-fit ml-auto md:justify-items-end"
                >
                  Grown at peak
                  <br />
                  elevation
                </Heading>
              )}
            </div>
            <div className="flex flex-col justify-center items-center flex-2">
              <div className="">
                {bottle?.reference && (
                  <Image
                    className="block object-cover w-80"
                    data={bottle.reference.image}
                    loading={loading}
                  />
                )}
              </div>
              <button className="inline-block mb-5 rounded-lg font-medium text-center py-3 px-8 bg-[#AA3322]">
                Shop
              </button>
            </div>
            <div className="flex-1">
              {heading?.value && (
                <Heading
                  format
                  as="h3"
                  size="display"
                  className="text-center drop-shadow-md font-alternate text-6xl md:text-7xl uppercase max-w-md w-full mb-10 md:mb-0"
                >
                  On rich
                  <br />
                  volcanic soil
                </Heading>
              )}
            </div>
          </div>
        ) : (
          <div className="md:flex justify-center gap-2 items-baseline pb-20">
            <div className="self-end">
              {stamp?.reference && (
                <Image
                  className="block object-cover w-[150px] ml-6 md:ml-0 md:w-[250px]"
                  data={stamp.reference.image}
                  loading={loading}
                />
              )}
            </div>
            <div className="ml-6 self-end">
              <Heading
                format
                as="h3"
                size="display"
                className="text-left drop-shadow-md font-alternate text-7xl uppercase"
              >
                PICKED BY HAND
                <br />
                FOR SIX GENERATIONS.
              </Heading>
              <button className="inline-block rounded-lg font-medium text-center mt-6 py-3 px-6 bg-[#AA3322] font-alternate">
                Play The Visual Story
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
