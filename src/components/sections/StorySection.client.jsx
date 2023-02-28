import {useState} from 'react';
import {Image} from '@shopify/hydrogen';
import {Journey} from './Journey.client';

export function StorySection() {
  const [showStory, setShowStory] = useState(false);

  const story = () => {
    setShowStory(!showStory);
  };

  return (
    <>
      {showStory && <Journey story={story} showStory />}
      <div className={showStory && `blur`}>
        <div
          className={`
        min-h-screen
        bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Hero.jpg?v=1674774427)]
        bg-center
        bg-cover
        -mt-24
        flex flex-col justify-center items-center  gap-8
    `}
        >
          <Image
            src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/stamp-min.png?v=1674829922"
            width={`150`}
            height={`150`}
          />
          <h1 className="text-center text-black text-6xl tracking-wider font-alternate my-6">
            {`HERE'S HOW IT ALL STARTED..`}
          </h1>
          <button
            className="inline-block  text-white rounded-lg text-center py-5 px-7 bg-[#AA3322]"
            onClick={story}
          >
            BEGIN JOURNEY
          </button>
        </div>

        {/* first sectiion */}
        <div className="mt-24">
          <div className="max-w-full px-20 flex gap-8">
            <div className="basis-2/5">
              <Image
                src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Story_sec1.png?v=1676315988"
                width={`600`}
                height={`800`}
              />
            </div>
            <div className="basis-3/5 px-7">
              <h1 className="text-dark font-alternate my-8 text-6xl underline underline-offset-[10px] decoration-[6px] decoration-theme">
                THE GOLDEN BEAN
              </h1>
              <p className="font-trixie text-2xl text-dark text-justify  [word-spacing:5px]">
                Inspired by the history and the legacy of the Larin family, our
                vision for the Estate 98 brand is centered around the coffee
                itself - once known as &quot;El Grano de Oro&quot; (The Golden
                Bean) - and its origin story with the magnificent Santa Ana
                volcano, where coffee trees prosper and cherries are picked
                under the beaming rays of the dry season in El Salvador. We
                framed this with an arch, representing Gloria&apos;s gateway
                into her garden, the famous Ruta de las Flores where everything
                grows. The sun and year it all started is also represented in
                this illustration, with a texture to represent the history.
                <br />
                <br />
                We paired this illustration with a bold, legacy-driven wordmark
                with the same texture. In its visual communications, Estate 98
                is exotic yet understated while exuding an authentic,
                ultra-premium brand voice that celebrates the Larin family and
                their multi-generational legacy of coffee growing and trade. We
                explored the use of light versus dark with a predominantly black
                & white palette, representing the contrasting elements that
                create El Salvador, its beauty and dark history intertwined,
                with hints of gold and red, a metaphor for the golden bean, a
                prosperous future, and the heart of its people.
              </p>
              <p className="text-dark font-alternate my-8 text-2xl underline underline-offset-[10px] decoration-[6px] decoration-theme">
                WRITE TO US
              </p>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="max-w-full px-20 mt-36 flex gap-20">
          <div className="basis-3/5">
            <h1 className="text-dark font-alternate my-8 text-6xl underline underline-offset-[10px] decoration-[6px] decoration-theme">
              SUSTAINABLY GROWN
            </h1>
            <p className="font-trixie text-2xl text-dark text-justify [word-spacing:5px]">
              At Estate98, we are dedicated to producing the highest quality
              coffee while minimizing our environmental impact. Our beans are
              grown on a small, family-owned estate that prioritizes sustainable
              farming practices.
            </p>
            <br />
            <p className="font-trixie text-2xl text-dark text-justify [word-spacing:5px]">
              We believe in transparency and traceability in the coffee supply
              chain. At Estate98, we are proud to operate a regenerative farm at
              our coffee estate. Regenerative agriculture is a holistic approach
              to farming that focuses on rebuilding and enhancing the health of
              the soil, rather than just maximizing yields.
            </p>
            <br />
            <p className="font-trixie text-2xl text-dark text-justify [word-spacing:5px]">
              By using techniques such as cover cropping, composting, and
              holistic grazing, we are able to improve the overall health and
              fertility of the soil on our farm. This not only helps us grow
              healthier and more flavorful coffee beans, but it also has a
              positive impact on the environment by sequestering carbon,
              improving water retention, and increasing biodiversity.
            </p>
            <br />
            <p className="font-trixie text-2xl text-dark text-justify [word-spacing:5px]">
              Our regenerative farm is just one aspect of our commitment to
              sustainability. We believe that by taking care of the land and
              working in harmony with nature, we can produce the highest quality
              coffee while also being good stewards of the environment.
            </p>
            <br />
            <p className="font-trixie text-2xl text-dark text-justify [word-spacing:5px]">
              By working directly with the source, we can ensure that our coffee
              is not only delicious, but also grown with respect for the land
              and the people who tend it.
            </p>
            <br />
            <p className="font-trixie text-2xl text-dark text-justify [word-spacing:5px]">
              In addition to our commitment to sustainability, we are also
              passionate about giving back to the communities where our coffee
              is grown. We support local initiatives such as education and
              healthcare programs, and work with our farmers to implement
              sustainable farming practices that benefit both the environment
              and their communities.
            </p>
            <br />
            <p className="font-trixie text-2xl text-dark text-justify  [word-spacing:5px]">
              Experience the difference with Estate98 coffee. Whether
              you&apos;re a coffee connoisseur or just looking for a delicious
              and guilt-free cup of joe, we&apos;ve got you covered. Thank you
              for choosing Estate98.
            </p>
          </div>

          <div className="basis-2/5 pl-32">
            <Image
              className="my-24"
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/sustainable1-min.png?v=1676364830"
              width={`400`}
              height={`600`}
            />
            <Image
              className="my-24"
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/sustainable2-min.png?v=1676364829"
              width={`400`}
              height={`600`}
            />
            <Image
              className="my-24"
              src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/sustainable3-min.png?v=1676364829"
              width={`400`}
              height={`600`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
