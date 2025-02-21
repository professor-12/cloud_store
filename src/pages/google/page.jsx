import { useEffect } from 'react'
import { toast } from "react-hot-toast"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BASE_URL } from '../../lib/constants'


const GoogleCallback = () => {
      const navigate = useNavigate()
      const [params] = useSearchParams()
      const code = params.get("code")
      console.log(code)
      useEffect(() => {
            if (!code) {
                  toast.error("An error occured")
                  navigate("/auth/login", { replace: false })
                  return;
            }
            const get = async () => {
                  try {
                        const response = await fetch(BASE_URL + "/api/google/callback?code=" + code);
                        const data = await response.json()
                        if (!response.ok) {
                              toast.error("An error occured")
                              return navigate("/auth/login")
                        }
                        localStorage.setItem("token", data.token)
                        toast.success("Login successfully")
                        navigate("/home")

                  } catch (err) {
                        toast.error("An error occured")
                        navigate("/auth/login")
                  }
            }
            get()
      }, [])
      return "Loading"
}

export default GoogleCallback