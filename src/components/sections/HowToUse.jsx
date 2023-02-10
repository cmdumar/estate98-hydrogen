import {Image} from '@shopify/hydrogen';
import {Section, Heading, Text} from '~/components';

export const HowToUse = () => {
  return (
    <Section
      className="
      flex
      justify-center bg-contain bg-no-repeat bg-right-bottom
      items-center bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/how-to-bg.webp?v=1676027155)]"
    >
      <Heading className="uppercase font-alternate text-contrast text-6xl text-center mb-10">
        How to Use
      </Heading>
      <section className="flex flex-wrap">
        <div className="flex-1">
          <div className="flex items-center mb-14">
            <div className="flex justify-center items-center text-4xl text-[#973122] rounded-full bg-[rgba(255,255,255,0.75)] px-10 py-8">
              1
            </div>
            <Text className="font-trixie text-contrast text-2xl ml-4">
              Pour 1 oz of Estate &apos;98 ultra concentrated coffee into a
              glass or cup
            </Text>
          </div>
          <div className="flex items-center mb-14 opacity-50">
            <div className="flex justify-center items-center text-4xl text-[#973122] rounded-full bg-[rgba(255,255,255,0.75)] px-10 py-8">
              2
            </div>
            <Text className="font-trixie text-contrast text-2xl ml-4">
              Add 8 oz of cold or hot water
            </Text>
          </div>
          <div className="flex items-center mb-14 opacity-50">
            <div className="flex justify-center items-center text-4xl text-[#973122] rounded-full bg-[rgba(255,255,255,0.75)] px-10 py-8">
              3
            </div>
            <Text className="font-trixie text-contrast text-2xl ml-4">
              Stir well, and Voila!
            </Text>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <Image
            src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/bottle.png?v=1674795511"
            alt="Coffee Bottle"
            width={250}
            height={350}
          />
          <Text className="font-alternate text-center text-xl pb-2 border-b-4 border-b-[#973122] text-contrast">
            Order your first sample
          </Text>
        </div>
      </section>
    </Section>
  );
};
