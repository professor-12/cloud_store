import React, { createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


export const UserContext = createContext({ user: null })


const ProtectRoute = ({ children }) => {
      const { data, error, isPending } = useAuth()
      if (isPending) {
            return <div className="h-screen text-secondary-foreground/90 backdrop-blur-3xl  w-full text-center justify-center text-xl flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide animate-spin lucide-loader"><path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m4.9 19.1 2.9-2.9" /><path d="M2 12h4" /><path d="m4.9 4.9 2.9 2.9" /></svg>
            </div>
      }
      if (!data) {
            return <Navigate to="/auth/login" replace />
      }
      return <UserContext.Provider value={{ user: data?.user }}>
            {children}
      </UserContext.Provider>
}

export default ProtectRoute