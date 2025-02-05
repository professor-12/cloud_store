import React, { useEffect, useState } from 'react'
import { links, links2 } from './sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import BackDrop from './portal/backdrop'

const SideBarMobile = ({ state, setState }) => {
      const navigate = useNavigate()
      const a = useLocation()
      const pathName = a.pathname.split("/")[2] ?? ""

      useEffect(() => {
            document.body.classList.toggle("overflow-hidden", state)

      }, [state])
      return (
            <>
                  <div className={`fixed shadow  py-3 px-3 top-0 transition-transform duration-300 bottom-0 z-[9999999] bg-secondary w-[55%] shadow-ring ${!state && "translate-x-[-1000%]"}`}>
                        <div className='text-2xl tracking-wider px-4 text-left text-accent-foreground'>CloudStore</div>
                        <ul className='flex gap-1 flex-col my-6 text-[15px]'>
                              {
                                    links.map(({ name, path, ...s }, index) => {
                                          const isActive = path === pathName
                                          return (
                                                <li onClick={() => { navigate(path); setState(false) }} key={index} className={`flex text-card-foreground/80  font-normal rounded-full  items-center gap-3 px-6 transition-colors duration-500 p-2 cursor-pointer ${isActive ? "bg-accent-foreground/10 text-blue-800/90" : null} `}>
                                                      {<s.svg />}
                                                      <p>
                                                            {name}
                                                      </p>
                                                </li>
                                          )
                                    })
                              }

                        </ul>
                        <ul className='flex gap-1 flex-col my-6 text-[15px]'>
                              {
                                    links2.map(({ name, path, ...s }, index) => {
                                          const isActive = path === pathName
                                          return (
                                                <li onClick={() => { navigate(path); setState(false) }} key={index} className={`flex text-card-foreground/80  font-normal rounded-full  items-center gap-3 px-6 transition-colors duration-500 p-2 cursor-pointer ${isActive ? "bg-accent-foreground/10 text-blue-800/90" : null} `}>
                                                      {<s.svg />}
                                                      <p>
                                                            {name}
                                                      </p>
                                                </li>
                                          )
                                    })
                              }

                        </ul>
                  </div>
                  {
                        state &&
                        <BackDrop className={"cursor-pointer"} onClick={() => setState(false)} />
                  }
            </>
      )
}

export default SideBarMobile