import React from 'react'

const CarrouselButtons = ({ pagination, final, carrousel, onClick }) => {
   console.log(pagination)
   return (
      <div className='md:w-1/6 mx-auto my-5 flex justify-evenly items-center text-center'>
         <img
            onClick={() => onClick(-4)}
            className='rounded-full p-2 w-8 h-8 bg-white active:bg-slate-400 drop-shadow-xl'
            src="/leftArrow.svg"
            alt="left"
         />
         <p>{pagination}/{final}</p>
         <button  
         onClick={() => {
               onClick({
                  ...carrousel,
                  paginationInitial: + 4,
                  paginationFinal: + 4
               })
            }}>

         <img className='rounded-full p-2 w-8 h-8 bg-white active:bg-slate-400 drop-shadow-xl' src="/rightArrow.svg" alt="right" />
         </button>
      </div>
   )
}

export default CarrouselButtons