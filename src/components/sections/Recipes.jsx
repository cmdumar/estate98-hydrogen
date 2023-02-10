import {Image} from '@shopify/hydrogen';
import {Section, Heading, Text, IconExternalLink} from '~/components';

const ImageCard = ({title, subtitle, imgUrl}) => (
  <figure className="relative max-w-sm w-[300px] h-[500px] overflow-hidden cursor-pointer rounded-lg">
    <a href="/">
      <Image
        className="absolute top-2/4 left-2/4 min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] object-cover"
        src={imgUrl}
        alt="image description"
        width={'auto'}
        height={'auto'}
      />
    </a>
    <figcaption
      className={`flex justify-between items-center absolute px-4 py-6 w-full text-lg text-white bottom-0 backdrop-blur-md`}
    >
      <div>
        <Text className="font-alternate block font-medium text-3xl text-contrast">
          {title}
        </Text>
        <Text className="font-alternate text-xl">{subtitle}</Text>
      </div>
      <div className="relative flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.5)] w-[60px] h-[60px]">
        <IconExternalLink viewBox="0 0 24 24" fill="none" />
      </div>
    </figcaption>
  </figure>
);

export const Recipes = () => {
  return (
    <Section
      className="
      flex
      justify-center
      items-center bg-white"
    >
      <Heading className="uppercase font-alternate text-contrast text-6xl text-center mb-10">
        Recipes
      </Heading>
      <section>
        <div className="flex flex-wrap justify-center gap-14">
          <ImageCard
            title="Greek Latte"
            subtitle="Andy Rubin"
            imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/latte.jpg?v=1676034144"
          />
          <ImageCard
            title="Mocha Coffee"
            subtitle="Johny Rubin"
            imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/mocha.jpg?v=1676034143"
          />
          <ImageCard
            title="Aussie Classic"
            subtitle="Ralph Rubin"
            imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/aussie-classic.jpg?v=1676034143"
          />
        </div>
      </section>
    </Section>
  );
};
