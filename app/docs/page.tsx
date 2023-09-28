import React from 'react'
import Image from "next/image"

function page() {
  return (
    <div className="p-2">
      
       <div className='flex justify-center mb-2'>
           <h4 className="text-3xl font-extrabold dark:text-white">
			Coming Soon! Stay tuned for launch !
           </h4>
       </div>
      
       <div className='w-full flex-center'>
          <Image
            src='/images/website-maintenance.svg'
            width={500}
            height={560}
            alt='loader'
            className='object-contain'
          />
        </div>

    </div>
  )
}

export default page

