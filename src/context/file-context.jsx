import React, { createContext, useContext, useReducer } from 'react'
import useQuery from '../hooks/useQuery'
import useFetch from '../hooks/useFetch'
import { GETNENV } from '../lib/utlis'
const BASE_URL = GETNENV("BASE_URL")

const initialState = {}

console.log(BASE_URL)

const Context = createContext(initialState)


const reducerfn = (prev, action) => {

}
const FileContext = ({ children }) => {
      const [state, dispatch] = useReducer(reducerfn, initialState)
      const { fetchUser } = useFetch(`${BASE_URL}/api/get-file/`)
      const { data, error, isPending, refetch } = useQuery(() => fetchUser())

      console.log(data)
      return (
            <Context.Provider value={{ state, dispatch }}> {children} </Context.Provider>
      )
}

export default FileContext