

const useFetch = (endpoint) => {
      const fetchUser = async (methods, _token) => {
            const token = _token ?? localStorage.getItem('token')
            const response = await fetch(endpoint, {
                  headers: { "Authorization": `Token ${token}` },
                  ...methods
            })
            const data = await response.json()
            if (!response.ok) {
                  throw new Error(JSON.stringify(data))
            }
            return data
      }
      return { fetchUser }
}
export default useFetch