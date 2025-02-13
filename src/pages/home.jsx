import React, { useState } from 'react'
import SideBar from '../components/sidebar'
import DashboardHeader from '../components/DashboardHeader'
import { Outlet } from 'react-router-dom'
import SideBarMobile from '../components/sidebarmobile'

const HomeLayout = () => {
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
            <main className={`flex overflow-hidden w-full  ${theme} transition-al bg-background h-screen`}>
                  <>
                        <div className='flex-1 min-w-[250px] max-md:hidden border-r border-border bg-background'>
                              <SideBar />
                        </div>
                        <SideBarMobile state={state} setState={setState} />
                  </>
                  <div className='h-screen  overflow-hidden max-md:w-full  md:flex-[4]'>
                        <div className='sticky top-0'>
                              <DashboardHeader setState={setState} setTheme={toggleTheme} theme={theme} />
                        </div>
                        <div className='h-[calc(100%-4rem)]'>
                              <Outlet />
                        </div>
                  </div>
            </main>
      )
}

export default HomeLayout
