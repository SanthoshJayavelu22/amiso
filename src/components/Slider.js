import React from 'react'

const Slider = () => {
  return (
    <div>
      

<div id="default-carousel" className="relative w-full" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
  
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div className='mt-4 ml-6 md:mt-8 md:ml-16'>
            <p className='text-white text-sm md:text-lg font-semibold'>RENEW YOUR LOOK</p>
            <h2 className='text-white text-3xl md:text-7xl font-bold mt-2 md:mt-4'>A TRADITION OF <br/>QUALITY CLEANING</h2>
            <button className='text-white text-center text-lg mt-4 md:mt-10 px-6 py-2 border border-white rounded-md'>Contact Us</button>
            
          </div>
        </div>


        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <div className='mt-4 ml-6 md:mt-8 md:ml-16'>
            <p className='text-white text-sm md:text-lg font-semibold'>GET FREE OF COST</p>
            <h2 className='text-white text-3xl md:text-7xl font-bold mt-2 md:mt-4'>A RENEW YOUR <br/>LOOK CLEANING</h2>
            <button className='text-white text-center text-lg mt-4 md:mt-10 px-6 py-2 border border-white rounded-md'>Contact Us</button>
            
          </div>
        </div>
  
   

      
    </div>
    
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
     
    </div>
  
    <button type="button" className="absolute top-0 start-0 -left-8 md:-left-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full  group-hover:bg-white/50  ">
            <svg className="w-6 h-6 md:w-12 md:h-12 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor"  stroke-width="1" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 -right-8 md:-right-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full   group-hover:bg-white/50  ">
            <svg className="w-6 h-6 md:w-12 md:h-12 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor"  stroke-width="1" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

    </div>
  )
}

export default Slider
