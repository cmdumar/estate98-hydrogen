/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { Image } from '@shopify/hydrogen'
// import { Layout } from '../index.server'

export function Journey({story}) {

    //  const [showStory, setShowStory] = useState(false);

    const [counter, setCounter] = useState(0);


    const nextHandler = () => {
        setCounter((counter) => {
            counter++;
            return counter;
        })
    }

    const previousHandler = () => {
        setCounter((counter) => {
            counter--;
            return counter;
        })
    }

    const data = [
        {
            image: "https://cdn.shopify.com/s/files/1/0712/2793/2978/files/El_Savador.jpg?v=1676625067",
            heading: "1798",
            text: "In the year 1798 the Larin ancestors arrived in El Salvador from Spain."
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Manuel_Larin.jpg?v=1676625066",
            heading: "1890",
            text: "Manuel Larin planted Bourbon Coffee near the town of Juayua - perched in the mountains and surrounded by volcanoes."
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Juayua.jpg?v=1676625062",
            heading: "1970",
            text: "The town of Juayua was founded."
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Juayaua1.jpg?v=1676625063",
            heading: "1970",
            text: "The town of Juayua was founded."
        }
    ]
    // bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Esencia-bg-min.jpg?v=1675160778)]

  return (
        <div className="h-screen w-screen fixed -mt-24 z-50"> 
            <div className="h-screen w-screen bg-gray-400 opacity-30 absolute -z-30"></div> {/* overlay */}
            <div className='max-w-[1200px] mx-auto mt-[40px] h-[80vh] relative'> 
                <Image className='absolute top-0 right-0 cursor-pointer' onClick={story}src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/icons8-close-50.png?v=1676567817" alt="close-icon" width={32} height={32}/> 
                <div className='flex gap-6 w-36 absolute m-auto left-0 right-0 bottom-[-40px]'>
                    {
                    counter > 0 ? 
                        <Image onClick={previousHandler} className="w-8 cursor-pointer" src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/iconL.png?v=1676626450" width={48} height={32}/>
                        : <div className='w-8 h-8 bg-transparent'> </div>
                    }
                    {/* <Image className="w-8 cursor-pointer" src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/iconL.png?v=1676626450" width={48} height={32}/>  */}
                    {
                    counter < data.length-1 ?
                        <Image onClick = {nextHandler} className="w-8 cursor-pointer" src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/iconG.png?v=1676626450" width={48} height={48}/> 
                        : null
                    }
                </div>
                {/* slide image */}
                <div className='max-w-3/5 max-w-3xl h-full mx-auto'>
                    <Image className="w-full h-full object-cover" src={data[counter].image} width={600} height={400}/>
                </div>
                {/* slide content */}
                <div className='absolute left-0 right-0 bottom-12 m-auto w-1/2 min-h-[180px]'>
                    <div className="bg-black w-full h-full absolute z-30 opacity-50 "></div> {/* overlay */}
                    <h1 className='text-theme text-center font-alternate text-5xl mt-8 z-50 relative'>{data[counter].heading}</h1>
                    <p className='text-white font-trixie text-2xl text-center mb-8 px-8 mt-5 z-50 relative'>
                        {data[counter].text}
                    </p>
                </div>
            </div>

        </div>   

  )
}
