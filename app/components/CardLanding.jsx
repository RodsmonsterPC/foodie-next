import React from 'react'

const CardLanding = ({ title, paragraph, button, divExtraStyles, imgUrl, buttonExtraStyles }) => {
   return (
      <div className={`w-full md:w-1/2 md:flex ${divExtraStyles} rounded-2xl gap-6 p-6 my-6 md:my-9`}>
         <img className='w-full md:w-2/6' src={imgUrl} alt='' />
         <div className='w-full grid md:w-4/6 content-center gap-5 text-base text-center md:text-start'>
            <h4 className='font-bold'>{title}</h4>
            <p className=''>{paragraph}</p>
            <button className={`${buttonExtraStyles} font-semibold drop-shadow-xl p-3 rounded-full`}>{button}</button>
         </div>
      </div>
   )
}

export default CardLanding