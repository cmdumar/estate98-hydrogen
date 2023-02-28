import {Image} from '@shopify/hydrogen';

export function Values() {
  return (
    <div
      className={`
    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Esencia-bg-min.jpg?v=1675160778)]
    bg-center
    bg-cover py-12
    `}
    >
      <div className="flex items-end justify-center">
        <div className="my-12">
          <h1 className="text-center text-dark font-alternate mt-12 text-5xl">
            VALUES
          </h1>
        </div>
      </div>

      <div className="relative min-h-screen w-full flex justify-center mt-20 pb-10 mx-auto">
        <div className="flex px-8 gap-24 w-full flex-wrap justify-center items-center">
          <div className="h-72 w-80 mb-10">
            <Image
              className="mb-4"
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/value1.png?v=1676984049"
              alt="beverage"
              height={'50%'}
              width={'50%'}
            />
            <h3 className="font-alternate text-2xl text-theme">
              IMPACT-CONSCIOUS SOURCING
            </h3>
            <p className="font-trixie text-lg text-dark">
              By partnering with producers that value the strength of community,
              we are able to transform lives within coffee growing regions.
            </p>
          </div>
          <div className="w-80 h-72 mb-10">
            <Image
              className="mb-4"
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/value7.png?v=1676986173"
              alt="beverage"
              height={'50%'}
              width={'50%'}
            />
            <h3 className="font-alternate text-2xl text-theme">
              50% WOMEN PRODUCED
            </h3>
            <p className="font-trixie text-lg text-dark">
              Working toward gender equity within the coffee industry by
              sourcing 50% of our beans from women coffee producers.
            </p>
          </div>
          <div className="w-80 h-72 mb-10">
            <Image
              className="mb-4"
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/value2.png?v=1676984049"
              alt="beverage"
              height={'50%'}
              width={'50%'}
            />
            <h3 className="font-alternate text-2xl text-theme">
              60% MORE YIELD PER BEAN{' '}
            </h3>
            <p className="font-trixie text-lg text-dark">
              Our proprietary extraction process allows us to get the most out
              of every bean. This results in more flavor and less waste compared
              to other forms of cold brew.
            </p>
          </div>
          <div className="w-80 h-72 mb-10">
            <Image
              className="mb-4"
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/value3.png?v=1676984049"
              alt="beverage"
              height={'50%'}
              width={'50%'}
            />
            <h3 className="font-alternate text-2xl text-theme">
              BREWED DAILY IN BOULDER
            </h3>
            <p className="font-trixie text-lg text-dark">
              Roast, grind, brew, repeat. Our coffee is made to order, and
              shipped promptly to ensure maximum flavor and freshness
            </p>
          </div>
          <div className="w-80 h-72 mb-10">
            <Image
              className="mb-4"
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/value4.png?v=1676984049"
              alt="beverage"
              height={'50%'}
              width={'50%'}
            />
            <h3 className="font-alternate text-2xl text-theme">
              100% GROUNDS COMPOSTED
            </h3>
            <p className="font-trixie text-lg text-dark">
              When the grounds are spent, we compost 100% of the organic matter
              that comes from the extraction process. Zero-waste brewing is a
              non negotiable for us.
            </p>
          </div>
          <div className="w-80 h-72 mb-10">
            <Image
              className="mb-4"
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/value6.png?v=1676984049"
              alt="beverage"
              height={'50%'}
              width={'50%'}
            />
            <h3 className="font-alternate text-2xl text-theme">
              NO EQUIPMENT NECESSARY
            </h3>
            <p className="font-trixie text-lg text-dark">
              Eliminate harmful pods and plastics with just one tablespoon. Jot
              is a responsible routine that will clear off countertops and
              lessen impact on landfills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
