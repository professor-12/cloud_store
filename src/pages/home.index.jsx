import React from 'react'
import { Link } from 'react-router-dom'
import Analytic from '../components/Analytic'

const HomeIndex = () => {
      return (
            <div className='lg:p-8'>
                  <Link to={"create-file"}>
                        <button className='bg-primary hover:bg-primary/90 duration-300 transition-all p-3 cursor-pointer  text-sm tracking-wide  px-4 rounded-xl text-white mb-5 flex items-center gap-2'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                              <span>
                                    Upload File
                              </span>
                        </button>
                  </Link>
                  <div>
                        <Analytic />
                  </div>
            </div>
      )
}

export default HomeIndex