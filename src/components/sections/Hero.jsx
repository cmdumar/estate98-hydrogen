import {Image} from '@shopify/hydrogen';
import {Heading} from '~/components';

export function Hero({
  // byline,
  // cta,
  heading,
  height,
  loading,
  // spread,
  bottle,
  top,
  // pickBg,
  stamp,
  pickedByHand = false,
}) {
  // console.log('Picked', pickedByHand);

  // console.log('Picked Bg', pickBg);

  // const pickedBg = pickBg?.reference.image.url;

  // const bg = pickedByHand
  //   ? 'https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Hero.jpg?v=1674774427'
  //   : 'https://cdn.shopify.com/s/files/1/0712/2793/2978/files/pickedByHand.jpg?v=1674826797';

  // console.log('Picked Bg URl', pickedBg);

  return (
    <>
      <section
        className={`relative flex flex-col w-full justify-center ${
          top && '-mt-nav'
        } ${
          height === 'full'
            ? 'h-screen'
            : 'aspect-[4/5] sm:aspect-square md:aspect-[5/4] lg:aspect-[3/2] xl:aspect-[2/1]'
        }`}
      >
        <div className="absolute inset-0 grid flex-grow grid-flow-col pointer-events-none auto-cols-fr -z-10 content-stretch overflow-clip">
          {!pickedByHand ? (
            <div
              className={`
              bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Hero.jpg?v=1674774427)]
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
            {/* {heading?.value && (
            <Heading format as="h2" size="display" className="max-w-md">
              {heading.value}
            </Heading>
          )}
          {byline?.value && (
            <Text format width="narrow" as="p" size="lead">
              {byline.value}
            </Text>
          )}
          {cta?.value && <Text size="lead">{cta.value}</Text>} */}
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
                    // widths={widths}
                    // sizes={sizes}
                    // alt={data.alt || 'Marketing Banner Image'}
                    className="block object-cover w-[250px]"
                    data={bottle.reference.image}
                    loading={loading}
                    // width={width}
                    // loaderOptions={{scale, crop: 'center'}}
                  />
                )}
              </div>
              {/* <Button className="w-fit rounded-lg bg-slate-900">
              Shop
            </Button> */}
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
                  // widths={widths}
                  // sizes={sizes}
                  // alt={data.alt || 'Marketing Banner Image'}
                  className="block object-cover w-[250px]"
                  data={stamp.reference.image}
                  loading={loading}
                  // width={width}
                  // loaderOptions={{scale, crop: 'center'}}
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

// function SpreadMedia({data, loading, scale, sizes, width, widths}) {
//   if (data.mediaContentType === 'VIDEO') {
//     return (
//       <Video
//         previewImageOptions={{scale, src: data.previewImage.url}}
//         width={scale * width}
//         className="block object-cover w-full h-full"
//         data={data}
//         controls={false}
//         muted
//         loop
//         playsInline
//         autoPlay
//       />
//     );
//   }

//   if (data.mediaContentType === 'IMAGE') {
//     return (
//       <Image
//         widths={widths}
//         sizes={sizes}
//         alt={data.alt || 'Marketing Banner Image'}
//         className="block object-cover w-full h-full"
//         data={data.image}
//         loading={loading}
//         width={width}
//         loaderOptions={{scale, crop: 'center'}}
//       />
//     );
//   }

//   return null;
// }
