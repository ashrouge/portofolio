import React from 'react'
import Image from 'next/image'

const Right = () => {
  return (
    <div className='relative lg:static xl:pl-10' >

      <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">

      </div>

      <div className="relative">
        <Image alt="" src="/images/glassify/blur-cyan-2.png" width="530" height="530" decoding="async" data-nimg="1" className="absolute -top-64 -right-64" />
        <Image alt="" src="/images/glassify/blur-indigo-1.png" width="567" height="567" decoding="async" data-nimg="1" className="absolute -bottom-40 -right-44" />
        
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-300 via-red-300/70 to-pink-300 opacity-10 blur-lg"></div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-red-300 via-red-300/70 to-pink-300 opacity-10"></div>
      </div>
    </div>
  )
}

export default Right