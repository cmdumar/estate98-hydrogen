import {Image} from '@shopify/hydrogen';

import {Section, Heading} from '~/components';
import {
  Button,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  Text,
} from '~/components';

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({menu}) {
  return (
    <Section
      as="footer"
      role="contentinfo"
      className={`min-h-[25rem] items-start py-8 px-6 md:px-8 lg:px-12
        border-b justify-center
        bg-primary bg-[url('https://cdn.shopify.com/s/files/1/0712/2793/2978/files/footer-bg.svg?v=1675732833')] dark:bg-contrast dark:text-primary text-contrast overflow-hidden md:grid-cols-2 gap-4`}
    >
      <section className="mx-auto md:justify-self-center mb-6">
        <Image
          src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/estate-logo-big.png?v=1675708323"
          alt="Estate Logo"
          className="w-[250px]"
          width={350}
          height={115}
        />
      </section>
      <section className="md:grid gap-4 w-full md:max-w-[335px] justify-self-start">
        <Heading
          size="lead"
          className="cursor-default text-center mb-5 md:text-start text-3xl font-alternate"
          as="h3"
        >
          Join La Famila
        </Heading>
        <div className="flex flex-col items-center lg:flex-row lg:items-center mb-8">
          <input
            type="text"
            id="large-input"
            placeholder="Enter your Email address.."
            className="block mb-5 lg:mb-0 w-full
            p-4 text-black placeholder:text-gray-500 border md:mr-5
            font-trixie border-gray-300
            rounded-[10px] bg-white opacity-50 md:w-[300px]
            sm:text-md focus:ring-blue-500 focus:border-blue-500
           dark:border-gray-600 placeholder-gray-900
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <Button className="inline-block justify-self-start bg-[#973122] text-white px-6 py-4 rounded-[10px]">
            Subscribe
          </Button>
        </div>
        <Heading
          size="lead"
          className="cursor-default text-center mb-5 text-3xl font-alternate"
          as="h3"
        >
          Follow us
        </Heading>
        <div className="flex justify-center gap-4">
          <div className="border-2 rounded-full p-4 cursor-pointer hover:scale-105">
            <IconInstagram fill="none" viewBox="0 0 24 24" />
          </div>
          <div className="border-2 rounded-full p-4 cursor-pointer hover:scale-105">
            <IconTwitter fill="none" viewBox="0 0 24 24" />
          </div>
          <div className="border-2 rounded-full p-4 cursor-pointer hover:scale-105">
            <IconFacebook fill="none" viewBox="0 0 24 24" />
          </div>
        </div>
      </section>
      <section className="col-span-full flex flex-col mt-8">
        <div className="flex flex-col items-center md:gap-4 md:flex-row justify-center">
          <Text className="opacity-50 hover:opacity-70 cursor-pointer">
            Privacy Policy
          </Text>
          <Text className="opacity-50 hover:opacity-70 cursor-pointer">
            Terms & Conditions
          </Text>
          <Text className="opacity-50 hover:opacity-70 cursor-pointer">
            Press Media
          </Text>
        </div>
        <div className={`pt-8 text-center`}>
          &copy; {new Date().getFullYear()} Estate98 Inc
        </div>
      </section>
    </Section>
  );
}
