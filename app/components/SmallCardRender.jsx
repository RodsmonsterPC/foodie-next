"use client"
import React, { useEffect, useState } from 'react'
import SmallCardProduct from './SmallCardProduct'
import CarrouselButtons from './carrouselButtons'

const initialState = {
   paginationInitial: 0,
   paginationFinal: 4
}

const SmallCardRender = ({ title }) => {

   const [data, setData] = useState([])
   const [carrousel, setCarrousel] = useState(initialState)
   useEffect(() => {
      (async () => {
         try {
            const response = await fetch('https://fakestoreapi.com/products?limit=24');
            const data = await response.json();
            setData(data)
            console.log(data); // Hacer algo con los datos obtenidos
         } catch (error) {
            console.error('Fetch error:', error);
         }
      })()
   }, [])

   //const carrouselAction = (suma) => {
   //   setCarrousel( {
   //      ...carrousel,
   //      paginationInitial: suma,
   //      paginationFinal: suma
   //   }
   //)
   //
   //   console.log(carrousel)
   //   console.log(carrousel.paginationInitial)
   //}

   return (
      <>
         <h2 className='font-bold m-3 text-lg'>{title}</h2>
         <div className='md:flex gap-6'>
            {
               data.map((item, idx) => {
                  return ((idx >= carrousel.paginationInitial && idx < carrousel.paginationFinal) &&
                     <SmallCardProduct
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        img={item.image}
                     />
                  )
               })
            }
         </div>
         <CarrouselButtons
            carrousel={carrousel}
            onClick={setCarrousel}
            pagination={carrousel.paginationFinal}
            final={data.length} />
      </>
   )
}

export default SmallCardRender