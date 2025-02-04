import React from 'react'
import useQuery from './useQuery'

export const getUser = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
            throw new Error("Token not found")
      }
      try {

            const response = await fetch('http://localhost:8000/api/user/', { headers: { "Content-Type": "application/json", "Authorization": `Token ${token}` } })
            if (!response.ok) {

                  throw new Error("Unexpected Error")
            }
            const _data = await response.json()

            return _data.user
      } catch (error) {
            throw new Error(JSON.stringify(error))
      }
}


const useAuth = () => {
      return useQuery(getUser)
}

export default useAuth