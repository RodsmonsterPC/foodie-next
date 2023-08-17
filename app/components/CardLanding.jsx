import React from 'react'

const CardLanding = ({ title, paragraph, button, bgColor, imgUrl, buttonColor, textColor, textButtonColor }) => {
   return (
      <div className={`md:w-1/2 md:flex text-${textColor} ${bgColor} rounded-2xl gap-6 p-6 my-9`}>
         <img className='w-full md:w-2/6 p-10 md:p-0' src={imgUrl} alt='' />
         <div className='w-full grid md:w-4/6 content-center gap-5 text-base text-center md:text-start'>
            <h4 className='font-bold'>{title}</h4>
            <p className=''>{paragraph}</p>
            <button className={`text-${textButtonColor} ${buttonColor} font-semibold drop-shadow-xl p-3 rounded-full`}>{button}</button>
         </div>
      </div>
   )
}

export default CardLanding