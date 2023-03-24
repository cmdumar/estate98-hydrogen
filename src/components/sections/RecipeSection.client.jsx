/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React,{useEffect, useState} from 'react';
import { ImageCard } from './Recipes';
import { Image } from '@shopify/hydrogen';


// Ingredients Component
const Ing = ({num,text}) => {
    return (
        <div className='mt-16 h-10'>
            <div className='relative'>
                <div className='bg-theme absolute opacity-20 blur-sm w-16 h-16 rounded-full'></div>
                <div className='absolute font-bold w-14 h-14 py-4 pl-2 text-theme text-xl '>{num}</div>
            </div>
            <p className='text-2xl text-left font-trixie pl-24 pt-[10px]'>
                {text}
            </p>
        </div>
    )
}

//Instructions Component
const Ins = ({num, text}) => {
    return (
        <div className='flex items-center gap-2 md:gap-5 w-full md:h-[100px] mb-4'>
            <p className='w-[60px] h-[60px] text-theme font-bold text-2xl bg-white rounded-full hidden md:flex justify-center items-center'>
                {num}
            </p> 
            <p className='font-trixie text-2xl text-theme md:hidden'>*</p>
            <p className='text-2xl text-left font-trixie sm:w-[85%] md:pt-2 pl-2'>
                {text}
            </p>
        </div>
    )
}

//Image Slider Component
const ImgSlider = (props) => {
    return (
    <div className='max-w-5xl mt-24 mb-9 mx-auto px-6'>
                <div className='grid grid-flow-col gap-5 overflow-x-scroll overflow-y-auto scroll-auto overscroll-x-contain snap-x'>
                    <div className='snap-start rounded-lg w-[300px] h-[350px]'>
                        <Image
                            className='w-full h-full'
                            src={props.img1}
                            width={`300`}
                            height={`400`}
                        />
                     </div> 
                     <div className='snap-start rounded-lg w-[300px] h-[350px]'>  
                        <Image
                            className='w-full h-full'
                            src={props.img2}
                            width={`300`}
                            height={`400`}
                        />
                    </div>
                    <div className='snap-start rounded-lg w-[300px] h-[350px]'>
                        <Image
                            className='w-full h-full'
                            src={props.img3}
                            width={`300`}
                            height={`400`}
                        />
                    </div>
                </div>
            </div>
            )
}


export function RecipeSection() {
    
    // let [recipe, setRecipe] = useState(location.href.split('=')[1])
    let recipe = location.href.split('=')[1];

    console.log("Recipe is", recipe)
    
  return (
    <>
    {/* Main Section */}
        {
        recipe=="Greek_Latte"?
        <>
            <ImgSlider
                img1="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/GL1.png?v=1679647856"
                img2="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/GL2.png?v=1679647856"
                img3="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Greek_Coffee.png?v=1679647856"
            />

            {/* Description */}
            <div className='text-black max-w-5xl mb-24 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl mb-8'>
                    GREEK LATTE
                </h1>
                <p className='font-trixie text-xl mb-6 md:text-2xl'>
                    Greek frappe is with no doubt the most popular coffee throughout Greece especially at summer time, 
                    when you need a cold and refreshing drink. Some call frappe Greek National drink and of course this is true, 
                    as it is served everywhere in Greece. Friends together sipping their favourite Greek iced coffee 
                    and relaxing is part of Greek lifestyle.
                </p>
                <p className='font-trixie text-xl md:text-2xl'>
                    Greek frappe coffee is really easy and quick to make at home, so we have put together this authentic 
                    Greek frappe coffee recipe with everything you need to know to master the art of making the perfect 
                    frappe as served traditionally throughout Greece.
                </p>
            </div>

            {/* Ingredients */}
            <div className='text-black max-w-7xl mb-24 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl'>
                        INGREDIENTS
                </h1>
                <div className='lg:flex lg:gap-12'>
                    <div>
                        <Ing num={1} text="2–3 tsp instant coffee (Nescafe) to taste as below"/>
                        <Ing num={2} text="sugar to taste as below"/>
                        <Ing num={3} text="milk to taste as below"/>
                        <Ing num={4} text="3 ice cubes"/>
                    </div>
                    <div>
                        <Ing num={5} text="1 glassful of cold water (250ml / 8.5 fl oz)"/>
                        <Ing num={6} text="drinking water"/>
                        <Ing num={7} text="frappe mixer"/>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className='text-black max-w-7xl mb-20 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl mb-8'>
                        INSTRUCTIONS
                </h1>
                <div>
                    <Ins num={1} text="To prepare this Greek frappe coffee recipe, first of all get a tall glass, a teaspoon and an electric whizzer."/>
                    <Ins num={2} text="Then add the instant coffee (Nescafe), sugar and about 2-3 tbsp’s of cold water. You want just enough to cover the coffee and then add one tbsp more."/>
                    <Ins num={3} text="Whiz the mixture until a thick, creamy foam is produced."/>
                    <Ins num={4} text="Pour the mixture into the serving glass."/>
                    <Ins num={5} text="Then add 3 ice cubes and the evaporated milk if you like."/>
                    <Ins num={6} text="Fill up the glass with cold water and serve with a drinking straw."/>
                </div>
                
            </div>
                {/* OTHER RECIPES */}
                <div className='mb-16'>
                    <h1 className='font-alternate text-center text-5xl mb-10 mt-20'>
                    OTHER RECIPES
                    </h1>
                    <div className="flex flex-wrap justify-center gap-14">
                        <ImageCard
                            title="Greek Coffee"
                            subtitle="Andy Rubin"
                            imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Greek_Coffee.png?v=1679647856"
                            recipe="Greek_Coffee"
                        />
                        <ImageCard
                            title="Mocha Coffee"
                            subtitle="Johny Rubin"
                            imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/mocha.jpg?v=1676034143"
                            recipe="Mocha_Coffee"
                        />

                        <ImageCard
                            title="Aussie Classic"
                            subtitle="Ralph Rubin"
                            imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/aussie-classic.jpg?v=1676034143"
                            recipe="Aussie_Classic"
                        />
                    </div>
            </div>
        </>
        :recipe=="Mocha_Coffee"?
        <>
            {/* Image Slider */}
            <ImgSlider
                img1="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/GL1.png?v=1679647856"
                img2="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/GL2.png?v=1679647856"
                img3="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Greek_Coffee.png?v=1679647856"
            />

            {/* Description */}
            <div className='text-black max-w-5xl mb-24 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl mb-8'>
                    MOCHA COFFEE
                </h1>
                <p className='font-trixie text-xl mb-6 md:text-2xl'>
                    Greek frappe is with no doubt the most popular coffee throughout Greece especially at summer time, 
                    when you need a cold and refreshing drink. Some call frappe Greek National drink and of course this is true, 
                    as it is served everywhere in Greece. Friends together sipping their favourite Greek iced coffee 
                    and relaxing is part of Greek lifestyle.
                </p>
                <p className='font-trixie text-xl md:text-2xl'>
                    Greek frappe coffee is really easy and quick to make at home, so we have put together this authentic 
                    Greek frappe coffee recipe with everything you need to know to master the art of making the perfect 
                    frappe as served traditionally throughout Greece.
                </p>
            </div>

            {/* Ingredients */}
            <div className='text-black max-w-7xl mb-24 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl'>
                        INGREDIENTS
                </h1>
                <div className='lg:flex lg:gap-12'>
                    <div>
                        <Ing num={1} text="2–3 tsp instant coffee (Nescafe) to taste as below"/>
                        <Ing num={2} text="sugar to taste as below"/>
                        <Ing num={3} text="milk to taste as below"/>
                        <Ing num={4} text="3 ice cubes"/>
                    </div>
                    <div>
                        <Ing num={5} text="1 glassful of cold water (250ml / 8.5 fl oz)"/>
                        <Ing num={6} text="drinking water"/>
                        <Ing num={7} text="frappe mixer"/>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className='text-black max-w-7xl mb-20 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl mb-8'>
                        INSTRUCTIONS
                </h1>
                <div>
                    <Ins num={1} text="To prepare this Greek frappe coffee recipe, first of all get a tall glass, a teaspoon and an electric whizzer."/>
                    <Ins num={2} text="Then add the instant coffee (Nescafe), sugar and about 2-3 tbsp’s of cold water. You want just enough to cover the coffee and then add one tbsp more."/>
                    <Ins num={3} text="Whiz the mixture until a thick, creamy foam is produced."/>
                    <Ins num={4} text="Pour the mixture into the serving glass."/>
                    <Ins num={5} text="Then add 3 ice cubes and the evaporated milk if you like."/>
                    <Ins num={6} text="Fill up the glass with cold water and serve with a drinking straw."/>
                </div>
                
            </div>
            {/* OTHER RECIPES */}
            <div className='mb-16'>
                <h1 className='font-alternate text-center text-5xl mb-10 mt-20'>
                OTHER RECIPES
                </h1>
                <div className="flex flex-wrap justify-center gap-14">
                        <ImageCard
                        title="Greek Coffee"
                        subtitle="Andy Rubin"
                        imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Greek_Coffee.png?v=1679647856"
                        recipe="Greek_Coffee"
                        />
                        <ImageCard
                        title="Greek Latte"
                        subtitle="Johny Rubin"
                        imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/latte.jpg?v=1676034144"
                        recipe="Greek_Latte"
                        />

                        <ImageCard
                        title="Aussie Classic"
                        subtitle="Ralph Rubin"
                        imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/aussie-classic.jpg?v=1676034143"
                        recipe="Aussie_Classic"
                        />
                </div> 
            </div>
        </>
        :recipe=="Greek_Coffee"?
        <>
            {/* Image Slider */}
            <ImgSlider
                img1="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/GL1.png?v=1679647856"
                img2="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/GL2.png?v=1679647856"
                img3="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Greek_Coffee.png?v=1679647856"
            />

            {/* Description */}
            <div className='text-black max-w-5xl mb-24 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl mb-8'>
                    GREEK COFFEE
                </h1>
                <p className='font-trixie text-xl mb-6 md:text-2xl'>
                    Greek frappe is with no doubt the most popular coffee throughout Greece especially at summer time, 
                    when you need a cold and refreshing drink. Some call frappe Greek National drink and of course this is true, 
                    as it is served everywhere in Greece. Friends together sipping their favourite Greek iced coffee 
                    and relaxing is part of Greek lifestyle.
                </p>
                <p className='font-trixie text-xl md:text-2xl'>
                    Greek frappe coffee is really easy and quick to make at home, so we have put together this authentic 
                    Greek frappe coffee recipe with everything you need to know to master the art of making the perfect 
                    frappe as served traditionally throughout Greece.
                </p>
            </div>

            {/* Ingredients */}
            <div className='text-black max-w-7xl mb-24 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl'>
                        INGREDIENTS
                </h1>
                <div className='lg:flex lg:gap-12'>
                    <div>
                        <Ing num={1} text="2–3 tsp instant coffee (Nescafe) to taste as below"/>
                        <Ing num={2} text="sugar to taste as below"/>
                        <Ing num={3} text="milk to taste as below"/>
                        <Ing num={4} text="3 ice cubes"/>
                    </div>
                    <div>
                        <Ing num={5} text="1 glassful of cold water (250ml / 8.5 fl oz)"/>
                        <Ing num={6} text="drinking water"/>
                        <Ing num={7} text="frappe mixer"/>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className='text-black max-w-7xl mb-20 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl mb-8'>
                        INSTRUCTIONS
                </h1>
                <div>
                    <Ins num={1} text="To prepare this Greek frappe coffee recipe, first of all get a tall glass, a teaspoon and an electric whizzer."/>
                    <Ins num={2} text="Then add the instant coffee (Nescafe), sugar and about 2-3 tbsp’s of cold water. You want just enough to cover the coffee and then add one tbsp more."/>
                    <Ins num={3} text="Whiz the mixture until a thick, creamy foam is produced."/>
                    <Ins num={4} text="Pour the mixture into the serving glass."/>
                    <Ins num={5} text="Then add 3 ice cubes and the evaporated milk if you like."/>
                    <Ins num={6} text="Fill up the glass with cold water and serve with a drinking straw."/>
                </div>
                
            </div>
            {/* OTHER RECIPES */}
            <div className='mb-16'>
                <h1 className='font-alternate text-center text-5xl mb-10 mt-20'>
                OTHER RECIPES
                </h1>
                <div className="flex flex-wrap justify-center gap-14">
                        <ImageCard
                        title="Greek Latte"
                        subtitle="Andy Rubin"
                        imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/latte.jpg?v=1676034144"
                        recipe="Greek_Latte"
                        />
                        <ImageCard
                        title="Mocha Coffee"
                        subtitle="Johny Rubin"
                        imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/mocha.jpg?v=1676034143"
                        recipe="Mocha_Coffee"
                        />

                        <ImageCard
                        title="Aussie Classic"
                        subtitle="Ralph Rubin"
                        imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/aussie-classic.jpg?v=1676034143"
                        recipe="Aussie_Classic"
                        />
                </div> 
            </div>
        </>
        :recipe=="Aussie_Classic"?
        <>
            {/* Image Slider */}
            <ImgSlider
                img1="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/GL1.png?v=1679647856"
                img2="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/GL2.png?v=1679647856"
                img3="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Greek_Coffee.png?v=1679647856"
            />

            {/* Description */}
            <div className='text-black max-w-5xl mb-24 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl mb-8'>
                    AUSSIE CLASSIC
                </h1>
                <p className='font-trixie text-xl mb-6 md:text-2xl'>
                    Greek frappe is with no doubt the most popular coffee throughout Greece especially at summer time, 
                    when you need a cold and refreshing drink. Some call frappe Greek National drink and of course this is true, 
                    as it is served everywhere in Greece. Friends together sipping their favourite Greek iced coffee 
                    and relaxing is part of Greek lifestyle.
                </p>
                <p className='font-trixie text-xl md:text-2xl'>
                    Greek frappe coffee is really easy and quick to make at home, so we have put together this authentic 
                    Greek frappe coffee recipe with everything you need to know to master the art of making the perfect 
                    frappe as served traditionally throughout Greece.
                </p>
            </div>

            {/* Ingredients */}
            <div className='text-black max-w-7xl mb-24 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl'>
                        INGREDIENTS
                </h1>
                <div className='lg:flex lg:gap-12'>
                    <div>
                        <Ing num={1} text="2–3 tsp instant coffee (Nescafe) to taste as below"/>
                        <Ing num={2} text="sugar to taste as below"/>
                        <Ing num={3} text="milk to taste as below"/>
                        <Ing num={4} text="3 ice cubes"/>
                    </div>
                    <div>
                        <Ing num={5} text="1 glassful of cold water (250ml / 8.5 fl oz)"/>
                        <Ing num={6} text="drinking water"/>
                        <Ing num={7} text="frappe mixer"/>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className='text-black max-w-7xl mb-20 text-center px-4 mx-auto md:px-8'>
                <h1 className='font-alternate text-5xl mb-8'>
                        INSTRUCTIONS
                </h1>
                <div>
                    <Ins num={1} text="To prepare this Greek frappe coffee recipe, first of all get a tall glass, a teaspoon and an electric whizzer."/>
                    <Ins num={2} text="Then add the instant coffee (Nescafe), sugar and about 2-3 tbsp’s of cold water. You want just enough to cover the coffee and then add one tbsp more."/>
                    <Ins num={3} text="Whiz the mixture until a thick, creamy foam is produced."/>
                    <Ins num={4} text="Pour the mixture into the serving glass."/>
                    <Ins num={5} text="Then add 3 ice cubes and the evaporated milk if you like."/>
                    <Ins num={6} text="Fill up the glass with cold water and serve with a drinking straw."/>
                </div>         
            </div>

            {/* OTHER RECIPES */}
            <div className='mb-16'>
                <h1 className='font-alternate text-center text-5xl mb-10 mt-20'>
                OTHER RECIPES
                </h1>
                <div className="flex flex-wrap justify-center gap-14">
                        <ImageCard
                        title="Greek Coffee"
                        subtitle="Andy Rubin"
                        imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Greek_Coffee.png?v=1679647856"
                        recipe="Greek_Coffee"
                        />
                        <ImageCard
                        title="Mocha Coffee"
                        subtitle="Johny Rubin"
                        imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/mocha.jpg?v=1676034143"
                        recipe="Mocha_Coffee"
                        />
                        <ImageCard
                        title="Greek_Latte"
                        subtitle="Ralph Rubin"
                        imgUrl="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/latte.jpg?v=1676034144"
                        recipe="Greek_Latte"
                        />
                </div> 
            </div>
        </>
        :null      
    } 
    </>
  );
}
