import React from 'react'

const SmallCardProduct = ({title, price, description, img}) => {
   return (
      <div className='flex w-full md:w-1/4 p-4 bg-slate-100 rounded-xl gap-3' >

         <img className='w-1/3 inline-flex' src={img} alt="Product item" />

         <div className='w-2/3 grid content-between'>

            <div className='flex justify-between gap-0.5'>
               <div>
                  <h3 className='text-sm'>{title}</h3>
                  <p className='font-bold text-xs'>${price}/Kg</p>
               </div>
               <img className='self-start' src="/shopping-cart.svg" alt="Add to Cart" />
            </div>

            <p className='text-xs text-gray-500'>{description}</p>

         </div>
      </div>
   )
}

export default SmallCardProduct