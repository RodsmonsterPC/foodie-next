import Image from 'next/image'
import React from 'react'

const SmallCardLanding = () => {
   return (
      <div className='p-3 bg-slate-500 w-1/4 flex' >

         <Image className='h-full w-1/3' src='public/icon-twitter.svg' alt="Product item" />

         <div className='h-full w-2/3'>

            <div className=''>
               <h3 className=''>Manzana</h3>
               <p className=''>$56.00/Kg</p>
               <img className='' src="" alt="Add to Cart" />
            </div>

            <p className=''>Aprovecha las promociones en este producto</p>

         </div>
      </div>
   )
}

export default SmallCardLanding