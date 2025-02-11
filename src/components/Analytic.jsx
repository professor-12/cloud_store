import React, { useContext } from 'react'
import { UserContext } from './ProtectRoute'
import { getGreeting } from '../lib/utlis'


const Analytic = () => {
      const { user } = useContext(UserContext)

      return (

            <div className='border-border shadow   bg-card   border text-muted-foreground flex  justify-between  p-4 md:p-6 rounded-xl md:min-h-[9rem] max-w-[1200px]'>
                  <div className='flex flex-col h-full justify-between'>
                        <div className='space-y-4'>
                              <h2 className='text-secondary-foreground font-semibold sm:tracking-wider max-sm:text-xl md:text-3xl'>{getGreeting()}, <span className='text-primary'> {user?.username}</span></h2>
                              <p className='max-sm:text-xs'>Welcome back to Cloud<span className='text-muted-foreground'>store</span> dashboard!</p>
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