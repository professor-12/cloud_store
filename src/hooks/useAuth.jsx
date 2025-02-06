import useQuery from './useQuery'
import useFetch from './useFetch'
import { BASE_URL } from "../lib/constants"

const useAuth = () => {
      const { fetchUser } = useFetch(BASE_URL + '/api/user/')
      return useQuery(fetchUser)
}

export default useAuth