/* eslint-disable prettier/prettier */
import React from 'react';

export function Esencia() {
  return (
    <div 
      className={`
    bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Esencia-bg-min.jpg?v=1675160778)]
    bg-center
    bg-cover
    bg-no-repeat
    h-screen`
  }
    >
      <div className="max-w-2xl h-screen m-auto flex flex-col justify-center items-center gap-20">
        <h1 className="text-center text-black font-bold text-6xl tracking-wider font-alternate">
          ESENCIA DE CAFÉ
        </h1>
        <p className="text-left text-black text-2xl font-trixie ">
        Inspired by the history and the legacy of the Larin family, our vision for the Estate 98 brand is centered around the coffee itself - once known as "El Grano de Oro" (The Golden Bean)
  - and its origin story with the magnificent Santa Ana volcano, where coffee trees prosper and cherries are picked under the beaming rays of the dry season in El Salvador. 
        </p>
      </div>
    </div>
  )
}
