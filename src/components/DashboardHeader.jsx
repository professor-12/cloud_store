import React, { useContext } from 'react'
import { UserContext } from './ProtectRoute'
import Search from './Search'
import { useNavigate } from 'react-router-dom'
import Mobile from './ui/Mobile'

const DashboardHeader = ({ setTheme, theme, setState }) => {
      const light = theme == "light"
      const { user } = useContext(UserContext)
      const navigate = useNavigate()

      return (
            <header className='sticky  justify-between border-b border-border  top-0 h-[4rem] p-1 pl-8 flex items-center'>
                  {/* Search Component */}
                  <div onClick={() => { setState(prev => !prev) }} className='text-popover-foreground/80 md:hidden cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                  </div>
                  <Search />
                  <div className='flex gap-3 h-full p-2 pr-6 items-center'>
                        <div onClick={setTheme} className='cursor-pointer text-popover-foreground p-2 rounded-full'>
                              {!light ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                                    </svg>
                              }
                        </div>
                        <div onClick={() => {
                              localStorage.removeItem("token");
                              navigate("/auth/login", { replace: true })

                        }} className='cursor-pointer max-sm:hidden text-popover-foreground p-2 rounded-full'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                        </div>
                        <div className='h-full aspect-square cursor-pointer rounded-full bg-accent to-transparent' />

                  </div>
            </header >
      )
}

export default DashboardHeader 