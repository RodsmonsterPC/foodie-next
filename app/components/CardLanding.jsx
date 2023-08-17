import React from 'react'

const CardLanding = ({ title, paragraph, button, bgColor, imgUrl, buttonColor, textColor, textButtonColor }) => {
   return (
      <div className={`flex text-${textColor} ${bgColor} rounded-2xl gap-6 p-6 w-1/2 mx-10`}>
         <img className='w-2/6' src={imgUrl} alt='' />
         <div className='w-4/6 gap-5 grid content-center'>
            <h4 className='font-bold text-start text-base'>{title}</h4>
            <p className='text-base text-start'>{paragraph}</p>
            <button className={`text-${textButtonColor} ${buttonColor} font-semibold drop-shadow-xl p-3 rounded-full`}>{button}</button>
         </div>
      </div>
   )
}

export default CardLanding