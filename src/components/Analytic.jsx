import React, { useContext } from 'react'
import { UserContext } from './ProtectRoute'


const Analytic = () => {
      const { user } = useContext(UserContext)
      console.log(user)
      return (

            <div className='border-border  shadow-secondary-foreground   bg-primary-foreground     border text-accent-foreground flex  justify-between  p-6 rounded-xl min-h-[9rem] max-w-[1200px]'>
                  <div className='flex flex-col h-full justify-between'>
                        <div className='space-y-4'>
                              <h2 className='text-secondary-foreground font-semibold tracking-wider text-3xl'>Welcome back, <span className='text-primary'> {user?.username}</span></h2>
                              {/* <p className='text-muted-foreground leading-5'>Lorem ipsum dolor numquam non corporis vero. Ipsa saepe corrupti impedit.</p> */}
                        </div>
                  </div>
                  {/* <div className='space-y-2'>
                        <div className='h-[4px] rounded-full overflow-hidden w-[12rem] bg-gray-300/60'>
                              <div className='bg-blue-500 w-[50%] h-full'></div>
                        </div>
                        <h2 className='text-slate-600/90 text-base'>1.4MB of 2GB used</h2>
                  </div> */}



            </div>
      )
}

export default Analytic