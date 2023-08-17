import Image from 'next/image'
import React from 'react'

const SmallCardLanding = () => {
   return (
      <div className='p-4 bg-slate-100 w-1/4 flex rounded-xl gap-3' >

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

export default SmallCardLanding


<section className="my-5">
<div className="text-center flex-col">
  <h2 className="font-semibold text-4xl">Déjate llevar por una experiencia culinaria única</h2>
  <p className="w-1/3 mx-auto py-5">Encuentra los ingredientes perfectos para tus creaciones culinarias. Conéctate con los mejores proveedores y disfruta de productos frescos y de alta calidad.</p>
  <div className="flex gap-9">
    <CardLanding 
      title={'¿Listo para desatar tu creatividad gastronómica?'} 
      paragraph={'Únete a la experiencia inigualable de Saborea la Excelencia.'} 
      button={'Únete al Mundo culinario'} 
      bgColor={`bg-[#f6be2c]`} 
      imgUrl={'/culinary-world.svg'} 
      buttonColor={'bg-button-color'} 
      textColor={'black'} 
      textButtonColor={'white'} 
    />
    <CardLanding 
      title={'Aquí encontrarás todo lo que necesitas'} 
      paragraph={'Desde exquisitas especias hasta selectos productos locales.'} 
      button={'Explorar opciones gourmet'} 
      bgColor={'bg-button-color'} 
      imgUrl={'/gourmet-options.svg'} 
      buttonColor={`bg-[#f6be2c]`} 
      textColor={'white'} 
      textButtonColor={'black'} 
    />
  </div>
</div>

</section>