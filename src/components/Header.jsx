import React from 'react'
import Button from './ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
      return (
            <header className='border-b sticky top-0 border-white/10 px-4'>
                  <div className='container text-left justify-between mx-auto max-w-[1200px] h-20 flex  items-center'>
                        <a href='/' className='sm:text-2xl text-xl'>Cloudstore</a>
                        <ul className='flex items-center gap-5'>
                              <Link to={"/auth/login"}>
                                    <Button>
                                          Get Started
                                    </Button>
                              </Link>
                              <li className='text-[rgb(254, 130, 165)] font-semibold'>SignUp</li>
                        </ul>
                  </div>
            </header >
      )
}

export default Header



