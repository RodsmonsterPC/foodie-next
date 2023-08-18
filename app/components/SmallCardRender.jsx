"use client"
import React, { useEffect, useState } from 'react'
import SmallCardProduct from './SmallCardProduct'
import CarrouselButtons from './carrouselButtons'


const SmallCardRender = ({ title }) => {

   const [data, setData] = useState([])
   const [carrousel, setCarrousel] = useState({
      paginationInitial: 0,
      paginationFinal: 4
   })
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

   const carrouselAction = () => {
      setCarrousel(...carrousel, {
         paginationInitial: + 4, 
         paginationFinal: + 4
   })
      console.log(carrousel)
      console.log(carrousel.paginationInitial)
   }

   return (
      <>
         <h2 className='font-bold m-3 text-lg'>{title}</h2>
         <div className='md:flex gap-6'>
            {
               data.map((item, idx) => {
                  return ((idx >= carrousel.paginationInitial && idx < carrousel.paginationFinal ) &&
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
         <CarrouselButtons onClick={carrouselAction} 
                        pagination={carrousel.paginationFinal}
                        final={data.length}    />
      </>
   )
}

export default SmallCardRender