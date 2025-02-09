import React from 'react'
import { Link } from 'react-router-dom'





const HeroSection = () => {
  return (
    <main className='pt-[13rem] px-3 urbanist bg-[url("/backgroundpattern.svg")]  text-white/90 bg-center bg-cover h-screen flex flex-col'>
      <div className='w-full flex justify-center gap-8 items-center text-center flex-col'>
        <h2 className='max-md:text-4xl  lg:text-6xl urbanist text-center font-medium'>Store, Share & Access <br /> Your Files Anytime, Anywhere</h2>
        <p className='text-xl max-md:text-lg text-muted-foreground'>We help you keep your favourite files, videos and pictures without worrying</p>
        <div>
          <Link to={"/auth/sign-up"}>
            <button className='bg-[#1D9B5E] cursor-pointer rounded-full p-3 px-5 text-lg text-white'>Create account</button>
          </Link>
        </div>
      </div>

    </main>
  )
}

export default HeroSection