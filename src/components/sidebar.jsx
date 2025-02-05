import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const links = [
      {
            path: "", svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>,
            name: "Home"
      },
      {
            path: "my-file", svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-folders" ><path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" /><path d="M2 8v11a2 2 0 0 0 2 2h14" /></svg >
            ,
            name: "My Files"
      },
      {
            path: "star", svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLlinecap="round" strokeLinejoin="round" className="lucide lucide-star" > <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg >,
            name: "Starred"
      },
      {
            path: "spam", svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>,
            name: "Spam"
      },
      // {
      //       path: "not", svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-trash-2" ><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg >,
      //       name: "Trash"
      // },
]

export const links2 = [
      {
            path: "profile", svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>,
            name: "Profile"
      },
      // {
      //       path: "not", svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" /><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg>,
      //       name: "Recent"
      // },
      // {
      //       path: "not", svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>,
      //       name: "Settings"
      // },
]

const SideBar = () => {
      const navigate = useNavigate()
      const a = useLocation()
      const pathName = a.pathname.split("/")[2] ?? ""
      return (
            <>
                  <aside className='p-5  h-screen bg-primary-foreground'>
                        <div className='flex px-4 relative items-center mb-6 gap-3 cursor-pointer text-card-foreground'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-cloud"> <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
                              <h1 className='text-2xl max-lg:text-xl font-stretch-normal font-medium '>
                                    Cloud Store
                              </h1>
                        </div>

                        <ul className='h-full space-y-10'>
                              <ul className='flex gap-1 flex-col  text-[15px]'>
                                    {
                                          links.map(({ name, path, ...s }, index) => {
                                                const isActive = path === pathName
                                                return (
                                                      <li onClick={() => navigate(path)} key={index} className={`flex text-card-foreground/60  font-normal rounded-full  items-center gap-3 px-6 transition-colors duration-500 p-2 cursor-pointer ${isActive ? "bg-accent-foreground/10 text-blue-800/90" : null}`}>
                                                            {<s.svg />}
                                                            <p>
                                                                  {name}
                                                            </p>
                                                      </li>
                                                )
                                          })
                                    }


                              </ul>
                              <ul className='flex gap-1 flex-col  text-[15px]'>
                                    {
                                          links2.map(({ name, path, ...s }, index) => {
                                                const isActive = path === pathName
                                                return (
                                                      <li onClick={() => navigate(path)} key={index} className={`flex  text-muted-foreground font-normal rounded-full  items-center gap-3 px-6 transition-colors duration-500 p-2 cursor-pointer ${isActive ? "bg-blue-300/40 text-blue-800/90" : "hover:bg-slate-200/90  "}`}>
                                                            {<s.svg />}
                                                            <p>
                                                                  {name}
                                                            </p>
                                                      </li>
                                                )
                                          })
                                    }
                              </ul>
                        </ul>
                  </aside>

            </>
      )
}




export default SideBar





