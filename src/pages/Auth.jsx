import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
      return (
            <div className='h-screen px-4  bg-secondary-foreground overflow-hidden flex items-center justify-center'>
                  <Outlet />
            </div>
      )
}

export default Auth