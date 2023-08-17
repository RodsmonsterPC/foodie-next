import React from 'react'
import SmallCardLanding from './SmallCardLAnding'


const SmallCardRender = ({title}) => {
   return (
      <>
      <h2 className='font-bold m-3 text-lg'>{title}</h2>
         <div className='flex gap-6 mx-6'>
            <SmallCardLanding />
            <SmallCardLanding />
            <SmallCardLanding />
            <SmallCardLanding />
         </div>
      </>
   )
}

export default SmallCardRender