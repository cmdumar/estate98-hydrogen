import {Image} from '@shopify/hydrogen';
import {Heading, Text} from '~/components';

export const SectionOne = () => {
  return (
    <section>
      <Heading className="font-alternate text-6xl text-center text-contrast uppercase mb-16">
        Come, become a <span style={{color: '#973122'}}>part</span> of our
        family
      </Heading>

      <section className="flex px-10">
        <div className="flex-1 flex flex-col justify-center items-center">
          <Image
            src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/bottle.png?v=1674795511"
            alt="Coffee bottle"
            width={220}
            height={300}
          />
          <Text className="font-trixie text-contrast text-justify">
            Inspired by the history and the legacy of the Larin family, our
            vision for the Estate 98 brand is centered around the coffee itself
            - once known as &quot;El Grano de Oro&quot; (The Golden Bean) - and
            its origin story with the magnificent Santa Ana volcano, where
            coffee trees prosper and cherries are picked under the beaming rays
            of the dry season in El Salvador.
          </Text>
        </div>
        <div className="flex-1">
          <div className="max-w-lg max-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow text-contrast mt-20">
            <div className="bg-[#B59357] rounded-lg p-4">Subscription</div>
            <a href="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                Need a help in Claim?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
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
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};
