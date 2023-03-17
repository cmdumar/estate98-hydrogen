import {Image} from '@shopify/hydrogen';
import {Section, Heading, Text} from '~/components';

export const HowToUse = () => {
  return (
    <Section
      className="
      mt-20
      flex
      justify-center bg-contain bg-no-repeat bg-right-bottom
      items-center bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/how-to-bg.webp?v=1676027155)]"
    >
      <Heading className="text-5xl font-alternate text-black text-center mb-10 md:text-6xl">
        HOW TO USE
      </Heading>
      <section className="md:flex flex-wrap gap-16">
        <div className="flex-1">
          <div className="flex items-center mb-14 animate-how1 ">
            <div className="flex justify-center items-center text-2xl px-8 py-6 animate-round1 text-[#973122] rounded-full bg-[rgba(255,255,255,0.75)] md:px-10 md:py-8">
              1
            </div>
            <Text className="font-trixie text-black text-xl ml-4 md:text-2xl">
              Pour 1 oz of Estate &apos;98 ultra concentrated coffee into a
              glass or cup
            </Text>
          </div>
          <div className="flex items-center mb-14 animate-how2 ">
            <div className="flex justify-center items-center text-2xl px-8 py-6 animate-round2 text-[#973122] rounded-full  bg-[rgba(255,255,255,0.75)] md:px-10 md:py-8">
              2
            </div>
            <Text className="font-trixie text-black text-xl ml-4 md:text-2xl">
              Add 8 oz of cold or hot water
            </Text>
          </div>
          <div className="flex items-center mb-14 animate-how3">
            <div className="flex justify-center items-center text-2xl px-8 py-6 animate-round3 text-[#973122] rounded-full bg-[rgba(255,255,255,0.75)] md:px-10 md:py-8">
              3
            </div>
            <Text className="font-trixie text-black text-xl ml-4 md:text-2xl">
              Stir well, and Voila!
            </Text>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          <Image
            className="animate-image1 absolute left-0 right-0 m-auto hidden md:inline-block"
            src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/bottle.png?v=1674795511"
            alt="Coffee Bottle"
            width={250}
            height={350}
          />
          <Image
            className="animate-image2 absolute left-0 right-0 m-auto hidden md:inline-block"
            src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/pour.png?v=1677577585"
            alt="Coffee Bottle"
            width={350}
            height={650}
          />
          <Image
            className="animate-image3 absolute left-0 right-0 m-auto hidden md:inline-block"
            src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/coffeecup.png?v=1677528696"
            alt="Coffee Bottle"
            width={350}
            height={650}
          />
          <Text className="font-alternate text-center text-2xl pb-2 border-b-4 border-b-[#973122] text-black absolute -bottom-6 cursor-pointer ">
            ORDER YOUR FIRST SAMPLE
          </Text>
        </div>
      </section>
    </Section>
  );
};
