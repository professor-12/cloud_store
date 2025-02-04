import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useQuery from '../hooks/useQuery'
import useMutation from '../hooks/useMutation'
import useFetch from '../hooks/useFetch'
import { GETNENV } from '../lib/utlis'
import { BASE_URL } from '../lib/constants'



const Profile = () => {

      const [file, setFile] = useState("http")
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
                  setFile(data.profile_picture)

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
                  setFile(data.profile_picture)
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
            await mutate(async () => {
                  return fetchUser({ method: "POST", body: formData })
            })

      }

      return (
            <div className='p-6'>
                  <h2 className="text-3xl">Profile</h2>
                  <div className='p-12'>
                        <form onSubmit={handleSubmit} className='flex w-full gap-12'>
                              <div>
                                    <div className='bg-slate-500/10 flex items-center justify-center relative  overflow-hidden rounded-full h-[20rem] w-[20rem]'>
                                          <input onChange={(e) => {
                                                setFile(e.target.files[0])
                                          }} type="file" accept='.png,.jpg' className='opacity-0 z-1 absolute cursor-pointer h-[20rem] w-[20rem]' />
                                          <p className='text-3xl text-neutral-500/50'>Choose file</p>
                                          {
                                                file instanceof MediaSource || file instanceof Blob ?
                                                      <img src={URL.createObjectURL(file)} className="w-full bg-cover  h-full absolute" alt="add" />
                                                      : <img src={"http://localhost:8000" + file} className="w-full bg-cover  h-full absolute" alt="add" />
                                          }
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
                                          <input value={dob} onChange={(e) => { setDob(e.target.value); console.log(e.target.value) }} id="dob" name='location' type="date" className='border w-full max-w-[40rem] focus:border-blue-500/80 focus:outline-none rounded-lg border-gray-500/30 p-2' />
                                    </div>
                                    <button disabled={!bio && !dob && !location || loading} className='disabled:bg-blue-500/70 p-3 transition-all duration-200 rounded-lg text-white cursor-pointer bg-blue-500'>Edit Profile</button>

                              </div>
                        </form>
                  </div>
            </div>
      )
}

export default Profile