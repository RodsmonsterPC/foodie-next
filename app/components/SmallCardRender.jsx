import React from 'react'
import SmallCardProduct from './SmallCardProduct'


const SmallCardRender = ({title}) => {
   return (
      <>
      <h2 className='font-bold m-3 text-lg'>{title}</h2>
         <div className='md:flex gap-6'>
            <SmallCardProduct />
            <SmallCardProduct />
            <SmallCardProduct />
            <SmallCardProduct />
         </div>
      </>
   )
}

export default SmallCardRender