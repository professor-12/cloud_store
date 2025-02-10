import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useQuery from '../hooks/useQuery'
import useMutation from '../hooks/useMutation'
import useFetch from '../hooks/useFetch'
import { GETNENV } from '../lib/utlis'
import { BASE_URL } from '../lib/constants'
import DatePicker from 'react-date-picker'



const Profile = () => {

      const [file, setFile] = useState({ file: "", url: "" })
      const [bio, setBio] = useState("")
      const [location, setLocation] = useState("")
      const [dob, setDob] = useState("")
      const { data, error, loading, mutate } = useMutation()
      const { fetchUser } = useFetch(`${BASE_URL}/api/profile/`)
      useEffect(() => {
            const fetchData = async () => {
                  const res = await fetch(`${BASE_URL}/api/profile/`, {
                        headers: {
                              "Authorization": `Token ${localStorage.getItem('token')}`
                        }
                  })
                  const data = await res.json()
                  if (!res.ok)
                        return toast.error("An error occurred")
                  setBio(data.bio)
                  setLocation(data.location)
                  setDob(data.birth_date)
                  setFile((prev) => ({ ...prev, url: data.profile_picture }))

            }
            fetchData()
      }, [])

      useEffect(() => {
            if (error) {
                  toast.error(error)
            }
            if (data && !error) {
                  toast.success("Profile updated successfully")
                  setBio(data.bio)
                  setLocation(data.location)
                  setDob(data.birth_date)
                  setFile({ file: null, url: data.profile_picture })
            }

      }, [error, data])
      const handleSubmit = async (e) => {
            e.preventDefault()
            const formData = new FormData()
            formData.append('bio', bio)
            formData.append('location', location)
            const date = new Date(dob || -1)
            const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
            formData.append('birth_date', formattedDate)
            formData.append("profile_picture", file.file)
            await mutate(async () => {
                  return fetchUser({ method: "POST", body: formData })
            })

      }
      const uploadFile = (mediasource) => {
            const url = URL.createObjectURL(mediasource)
            setFile((prev) => { return { file: mediasource, url } })
      }

      return (
            <div className='p-4 lg:p-6 space-y-4 overflow-auto'>
                  <h2 className="text-3xl text-accent-foreground/70">Profile</h2>
                  <div className='md:p-12'>
                        <form onSubmit={handleSubmit} className='flex max-md:flex-col w-full gap-4'>
                              <div className='flex-1'>
                                    <div className='bg-slate-500/10 flex group items-center justify-center rounded-md overflow-hidden relative  md:h-[20rem]  w-[8rem] h-[8rem] md:w-[20rem]'>
                                          <img src={file.url} alt="profie_picture" />
                                          <div className='absolute top-0 left-0 right-0 bottom-0 opacity-0 items-center justify-center    overflow-hidden cursor-pointer h-full flex duration-700 transition-all '>
                                                <input type="file" className='opacity-0 absolute cursor-pointer   backdrop:blur-[200px] top-0 bottom-0 right-0 left-0' accept='image/.png,.jpg' onChange={(e) => uploadFile(e.target.files[0])} />
                                               
                                          </div>
                                    </div>
                              </div>
                              <div className='space-y-4 text-card-foreground/80 w-full'>
                                    <div className='space-y-3'>
                                          <label className='block' htmlFor="bio">Bio</label>
                                          <input value={bio} onChange={(e) => { setBio(e.target.value) }} id="bio" name='bio' type="text" className='border w-full max-w-[40rem] focus:border-blue-500/80 focus:outline-none rounded-lg border-gray-500/30 p-2' />
                                    </div>
                                    <div className='space-y-3'>
                                          <label className='block' htmlFor="location">Address</label>
                                          <input value={location} onChange={(e) => setLocation(e.target.value)} id="location" name='location' type="text" className='border w-full max-w-[40rem] focus:border-blue-500/80 focus:outline-none rounded-lg border-gray-500/30 p-2' />
                                    </div>
                                    <div className='space-y-3'>
                                          <label className='block' htmlFor="dob">Date of Birth</label>
                                          <DatePicker maxDate={new Date("12-12-2020")} className='border w-full max-w-[40rem] focus:border-blue-500/80 focus:outline-none rounded-lg border-gray-500/30 p-2' id="dob" onChange={setDob} value={dob ?? new Date()} />

                                    </div>
                                    <button disabled={!bio && !dob && !location || loading} className='disabled:bg-primary p-3 transition-all duration-200 rounded-lg text-white cursor-pointer bg-primary'>Edit Profile</button>

                              </div>
                        </form>
                  </div>
            </div>
      )
}

export default Profile