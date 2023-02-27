/* eslint-disable react/no-unknown-property */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { Image } from '@shopify/hydrogen'
// import { Layout } from '../index.server'

export function Journey({story}) {

    //  const [showStory, setShowStory] = useState(false);

    const [counter, setCounter] = useState(0);

//     if(showStory){
//         setTimeout(() => {
//         setCounter((counter) => {
//             counter++;
//             return counter;
           
//         })
//         if(counter == 4){
//             story()
//             return;
//         }
//     },3000)
// }

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
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Roberto_Larin.jpg?v=1676625067",
            heading: "1987",
            text: "Roberto Larin."
        }

    ]
    // bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Esencia-bg-min.jpg?v=1675160778)]

  return (
        <div className="h-screen w-screen fixed -mt-24 z-50"> 
            <div className="h-screen w-screen absolute bg-black opacity-70 -z-30"></div> {/* overlay */}
            <div className='max-w-[1200px] mx-auto mt-[60px] h-[85vh] relative'> 
                {/* <svg className='absolute right-0 left-0 mx-auto top-[-40px] cursor-pointer hover:fill-theme' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"/></g></g><script xmlns=""/></svg> */}
                <Image className='absolute right-0 left-0 mx-auto top-[-40px] cursor-pointer hover:fill-theme' onClick={story} src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/icons8-close.svg?v=1677503674" alt="close-icon" width={32} height={32}/> 
                <div className='flex gap-6 absolute m-auto right-0 bottom-[-40px]'>
                    {
                    counter > 0 ?              
                        <button onClick={previousHandler} className=' text-white font-trixie text-xl transition-all hover:text-theme hover:scale-125 duration-300'>Back</button>
                        : <div className='w-8 h-8 bg-transparent'> </div>
                    }
                    
                    {
                    counter < data.length-1 ?
                    <button onClick = {nextHandler} className=' text-white font-trixie text-xl transition-all hover:text-theme hover:scale-125 duration-300'>Next</button>
                        : null
                    }
                </div>
                {/* slide image */}
                <div className='max-w-2xl h-full mx-auto'>
                    <Image className="h-full w-full object-cover object-top" src={data[counter].image} width={600} height={400}/>
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
