import React, { useState } from 'react'
import SideBar from '../components/sidebar'
import DashboardHeader from '../components/DashboardHeader'
import { Outlet } from 'react-router-dom'
import SideBarMobile from '../components/sidebarmobile'

const Home = () => {
      const _theme = localStorage.getItem("theme") ?? "light"
      const [theme, setTheme] = useState(_theme)

      const toggleTheme = () => {
            setTheme((prev) => {
                  if (prev == "dark") {
                        localStorage.setItem("theme", "light")
                        return "light"
                  }
                  localStorage.setItem("theme", "dark")
                  return "dark"
            })
      }
      const [state, setState] = useState(!true)

      return (
            <main className={`flex overflow-clip  ${theme} transition-al bg-background h-screen`}>
                  <div className='flex-1 min-w-[250px] max-md:hidden border-r border-border bg-background'>
                        <SideBar />
                  </div>
                  <SideBarMobile state={state} setState={setState} />
                  <div className='h-screen  flex-[4]'>
                        <div className='sticky top-0'>
                              <DashboardHeader setState={setState} setTheme={toggleTheme} theme={theme} />
                        </div>
                        <div className='h-full'>
                              <Outlet />
                        </div>

                  </div>
            </main>
      )
}

export default Home
