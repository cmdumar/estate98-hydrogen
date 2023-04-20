import {Image} from '@shopify/hydrogen';
import {Heading, Text} from '~/components';
import {useState} from 'react';
import {useDrawer} from '~/components';
import {CartDrawer} from '../global/CartDrawer.client';
import {useProductOptions, AddToCartButton} from '@shopify/hydrogen';

export const SectionOne = () => {
  const [sub, setSub] = useState(true);
  const [counter, setCounter] = useState(1);
  let price = 450;

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {selectedVariant, sellingPlanGroups, selectedSellingPlanAllocation} =
    useProductOptions();

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <section className="mt-20 grid place-items-center">
        <Heading className="font-alternate text-center text-black uppercase mb-16 sm:text-6xl text-3xl">
          Come, become a <span style={{color: '#973122'}}>part</span> of our
          family
        </Heading>

        <section className="px-3 w-full flex flex-col items-center mx-auto lg:flex-row justify-around gap-10 max-w-[1380px]">
          {/* left side */}
          <div className="grid place-items-center md:flex flex-col justify-center items-center">
            <Image
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/bottle.png?v=1674795511"
              alt="Coffee bottle"
              width={220}
              height={300}
            />
            <Text className="font-trixie pt-6 text-black text-justify text-xl w-10/12">
              Inspired by the history and the legacy of the Larin family, our
              vision for the Estate 98 brand is centered around the coffee
              itself - once known as &quot;El Grano de Oro&quot; (The Golden
              Bean) - and its origin story with the magnificent Santa Ana
              volcano, where coffee trees prosper and cherries are picked under
              the beaming rays of the dry season in El Salvador.
            </Text>
          </div>
          <div className="w-full md:w-[600px]">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-contrast mt-20">
              {/* subscription tab */}
              <div className="flex font-alternate text-2xl w-full text-white rounded-[24px] text-center cursor-pointer">
                <button
                  className={
                    sub
                      ? ` relative flex-1 rounded-l-lg bg-[#B59357] p-4`
                      : ` rounded-l-lg relative flex-1 bg-[#EEE] text-[#B59357] p-4`
                  }
                  onClick={() => setSub(true)}
                  onKeyUp={() => {}}
                >
                  SUBSCRIPTION
                  <span
                    className={
                      sub
                        ? `bg-theme md:text-sm text-xs  rounded px-1 py-[2px] absolute right-[2%] top-1 text-white`
                        : `bg-theme py-[2px] text-white md:text-sm text-xs rounded px-1 absolute right-[2%] top-1`
                    }
                  >
                    SAVE 10%
                  </span>
                </button>
                <button
                  className={
                    sub
                      ? `flex-1 bg-[#EEE] rounded-r-lg text-[#B59357] p-4`
                      : ` rounded-r-lg flex-1 bg-[#B59357] p-4`
                  }
                  onClick={() => setSub(false)}
                  onKeyUp={() => {}}
                >
                  ONE-TIME
                </button>
              </div>

              <p
                className={
                  sub ? `text-[#6d6d6d] text-xl my-4 font-alternate` : `hidden`
                }
              >
                BILLED ONCE A MONTH
              </p>

              {/* count */}
              <div className="flex justify-between my-4">
                <div>
                  <p className="font-alternate text-4xl text-black">
                    ORIGINAL BOTTLE
                  </p>
                  <p className="text-[#6d6d6d] text-xl my-1 font-alternate">
                    PURE COFFEE DELICIOUSNESS
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    className="text-theme text-4xl font-trixie cursor-pointer"
                    onClick={() => setCounter(counter - 1)}
                  >
                    -
                  </button>
                  <div className="bg-[#EEE] px-6 rounded-lg py-1 text-black font-trixie">
                    {counter}
                  </div>
                  <button
                    className="text-theme text-4xl font-trixie cursor-pointer"
                    onClick={() => setCounter(counter + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* price */}
              <div className="flex justify-between my-6">
                <p className="font-alternate text-3xl text-black">TOTAL</p>
                <p className="font-trixie text-4xl text-theme">
                  {`$${price * counter}`}{' '}
                  <span
                    className={
                      sub
                        ? `font-alternate text-3xl ml-[-16px] text-black`
                        : `hidden`
                    }
                  >
                    /MO
                  </span>
                </p>
              </div>

              {/* Coupon code  */}
              <div className="flex gap-4 justify-between items-center">
                <input
                  className="w-3/4 bg-[#EEE] px-6 font-trixie text-base rounded-lg h-14"
                  placeholder="Enter coupon code.."
                />
                <button className="bg-[#B59357] h-14 w-1/4 text-white rounded-lg ">
                  Apply
                </button>
              </div>

              <div>
                <AddToCartButton
                  variantId={selectedVariant?.id}
                  sellingPlanId={
                    sub
                      ? selectedVariant.sellingPlanAllocations.nodes[0]
                          .sellingPlan.id
                      : null
                  }
                  quantity={counter}
                  onClick={() => {
                    openCart();
                  }}
                  accessibleAddingToCartLabel="Adding item to your cart"
                  disabled={counter == 0}
                  type="button"
                  className="bg-theme text-3xl text-white px-6 py-4 font-alternate w-full rounded-lg mt-7"
                >
                  {sub ? `SUBSCRIBE` : `BUY`}
                </AddToCartButton>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
