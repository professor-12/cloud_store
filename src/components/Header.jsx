import React from 'react'
import Button from './ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
      return (
            <header className='fixed  mx-auto  left-0 right-0 top-0 border-white/10 px-4'>
                  <div className='container bg-white rounded-full px-6  mt-3 text-left justify-between mx-auto max-w-[1200px] h-16 flex  items-center'>
                        <a href='/' className='sm:text-2xl text-xl font-medium'>Cloudstore.</a>
                        <ul className='flex items-center gap-5'>
                              <Link className='max-md:hidden' to={"/auth/sign-up"}>
                                    <Button>
                                          Get Started
                                    </Button>
                              </Link>
                              <Link className='' to={"/auth/login"}>
                                    <li className='text-[rgb(254, 130, 165)] border border-[#1D9B5E] text-sm rounded-full px-3 p-1 font-semibold'>Login</li>
                              </Link>
                        </ul>
                  </div>
            </header >
      )
}
export default Header



