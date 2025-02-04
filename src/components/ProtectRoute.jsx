import React, { createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


export const UserContext = createContext({ user: null })

const ProtectRoute = ({ children }) => {
      const { data, error, isPending } = useAuth()
      if (isPending) {
            return <div>Loading...</div>
      }
      if (!data) {
            return <Navigate to="/auth/login" replace />
      }
      return <UserContext.Provider value={{ user: data?.user }}>
            {children}
      </UserContext.Provider>
}

export default ProtectRoute