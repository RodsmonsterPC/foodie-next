import Image from 'next/image'
import React from 'react'

const SmallCardProduct = () => {
   return (
      <div className='flex w-full md:w-1/4 p-4 bg-slate-100 rounded-xl gap-3' >

         <img className='w-1/3' src="/icon-facebook.svg" alt="Product item" />

         <div className='w-2/3 grid content-between'>

            <div className='flex justify-between'>
               <div>
                  <h3 className='text-sm'>Manzana</h3>
                  <p className='font-bold text-xs'>$56.00/Kg</p>
               </div>
               <Image className='' src="/shopping-cart.svg" width={24} height={24} alt="Add to Cart" />
            </div>

            <p className='text-xs text-gray-500'>Aprovecha las promociones en este producto</p>

         </div>
      </div>
   )
}

export default SmallCardProduct