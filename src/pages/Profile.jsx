import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import useMutation from '../hooks/useMutation'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../lib/constants'
import DatePicker from 'react-date-picker'
import Modal from '../components/ui/Modal'
import PreveiwImage from '../components/PreveiwImage'


const Profile = () => {

      const [file, setFile] = useState("")
      const [bio, setBio] = useState("")
      const [location, setLocation] = useState("")
      const [dob, setDob] = useState("")
      const { data, error, loading, mutate } = useMutation()
      const { fetchUser } = useFetch(`${BASE_URL}/api/profile/`)
      const [canEditProfile, setCanEditProfile] = useState(false)
      const [openEditProfileModal, setOpenEdiProfiletModal] = useState(false)

      const imageRef = useRef()
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
                  setOpenEdiProfiletModal(false)
            }

      }, [error, data])
      const handleSubmit = async (e) => {
            e.preventDefault()
            const formData = { location, bio, birth_date: dob }
            await mutate(async () => {
                  return fetchUser({ method: "POST", body: JSON.stringify(formData) })
            })

      }
      const uploadFile = (mediasource) => {
            if (!mediasource) return
            const file = new FileReader()
            file.readAsDataURL(mediasource)
            file.onload = async () => {
                  const url = file.result

                  await mutate(async () => {
                        return fetchUser({ method: "POST", body: JSON.stringify({ profile_picture: url }) })
                  })

            }
            file.onloadstart = () => { }

            file.onerror = () => {
                  toast.error("An error occurred")
            }
      }

      return (
            <div className='p-4 lg:p-6 space-y-4 overflow-auto'>
                  <h2 className="text-3xl text-accent-foreground/70">Profile</h2>
                  <div className='md:p-12'>
                        <form onSubmit={handleSubmit} className='flex max-md:flex-col w-full gap-4'>
                              <div className='flex-1'>
                                    <div className='bg-slate-500/10 flex group items-center justify-center rounded-md -hidden relative  md:h-[20rem]  w-[8rem] h-[8rem] md:w-[20rem]'>
                                          <div className='relative  w-full h-full items-center flex overflow-hidden'>
                                                <img src={file} className="bg-cover " alt=" profie_picture" />
                                          </div>
                                          <div className='hidden'>
                                                <input ref={imageRef} type="file" className='opacity-0 absolute cursor-pointer   backdrop:blur-[200px] top-0 bottom-0 right-0 left-0' accept='image/.png,.jpg' onChange={() => setOpenEdiProfiletModal(true)} />
                                          </div>
                                          <div className='absolute -bottom-2 cursor-pointer  -right-2 bg-primary w-8  h-8 rounded-full' onClick={() => imageRef.current.click()}></div>
                                    </div>
                              </div>
                              <div className='space-y-4 text-card-foreground/80 w-full'>
                                    <div className='space-y-3'>
                                          <label className='block' htmlFor="bio">Bio</label>
                                          <input value={bio} onChange={(e) => { setCanEditProfile(true); setBio(e.target.value) }} id="bio" name='bio' type="text" className='border w-full max-w-[40rem] focus:border-blue-500/80 focus:outline-none rounded-lg border-gray-500/30 p-2' />
                                    </div>
                                    <div className='space-y-3'>
                                          <label className='block' htmlFor="location">Address</label>
                                          <input value={location} onChange={(e) => { setLocation(e.target.value); setCanEditProfile(true) }} id="location" name='location' type="text" className='border w-full max-w-[40rem] focus:border-blue-500/80 focus:outline-none rounded-lg border-gray-500/30 p-2' />
                                    </div>
                                    <div className='space-y-3'>
                                          <label className='block' htmlFor="dob">Date of Birth</label>
                                          <DatePicker maxDate={new Date("12-12-2020")} className='border w-full max-w-[40rem] focus:border-blue-500/80 focus:outline-none rounded-lg border-gray-500/30 p-2' id="dob" onChange={(e) => { setCanEditProfile(true); setDob(e) }} value={dob ?? new Date()} />

                                    </div>
                                    {openEditProfileModal && imageRef?.current?.files[0] &&
                                          <Modal onClick={(e) => setOpenEdiProfiletModal(false)} className="flex items-center justify-center cursor-pointer">
                                                <PreveiwImage loading={loading} onClick={() => uploadFile(imageRef.current.files[0])} onClose={() => setOpenEdiProfiletModal(false)} imageURL={URL.createObjectURL(imageRef?.current?.files[0])} />

                                          </Modal>
                                    }
                                    <button disabled={!bio && !dob && !location || loading || !canEditProfile} className='disabled:bg-primary/50 p-3 transition-all duration-200 rounded-lg text-white cursor-pointer bg-primary'>Edit Profile</button>
                              </div>
                        </form>
                  </div >
            </div >
      )
}

export default Profile