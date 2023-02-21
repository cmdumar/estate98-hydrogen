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
        className={`relative flex flex-col w-full justify-center ${
          top && '-mt-nav'
        } h-screen`}
      >
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          {!pickedByHand ? (
            <div
              className={`
              bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Hero_bg.jpg?v=1676983582)]
              bg-center
              bg-cover
              bg-no-repeat
              h-screen`}
            ></div>
          ) : (
            <div
              className={`
            bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/pickedByHand.jpg?v=1674826797)]
            bg-center
            bg-cover
            bg-no-repeat
            h-screen`}
            ></div>
          )}
        </div>
        {!pickedByHand ? (
          <div
            className="flex
        justify-center
        items-center
        dark:from-contrast/60 
        dark:text-primary 
        from-primary/60 
        text-contrast"
          >
            <div>
              {heading?.value && (
                <Heading
                  format
                  as="h3"
                  size="display"
                  className="max-w-md text-center drop-shadow-md"
                >
                  Grown at peak elevation
                </Heading>
              )}
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="">
                {bottle?.reference && (
                  <Image
                    className="block object-cover w-[250px]"
                    data={bottle.reference.image}
                    loading={loading}
                  />
                )}
              </div>
              <button className="inline-block rounded-lg font-medium text-center py-3 px-6 bg-[#AA3322]">
                Shop
              </button>
            </div>
            <div>
              {heading?.value && (
                <Heading
                  format
                  as="h3"
                  size="display"
                  className="max-w-md text-center drop-shadow-md"
                >
                  On rich volcanic soil
                </Heading>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-start gap-2 items-baseline">
            <div className="self-end">
              {stamp?.reference && (
                <Image
                  className="block object-cover w-[250px]"
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
                className="text-left drop-shadow-md"
              >
                PICKED BY HAND FOR SIX GENERATIONS.
              </Heading>
              <button className="inline-block rounded-lg font-medium text-center mt-6 py-3 px-6 bg-[#AA3322]">
                Play The Visual Story
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
