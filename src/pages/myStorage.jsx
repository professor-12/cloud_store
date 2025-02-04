import React from 'react'
import useQuery from '../hooks/useQuery'
import FileCard from '../components/FileCard'
import useFetch from '../hooks/useFetch'
import { Link, Navigate } from 'react-router-dom'
import Loading from '../components/Loading'



const MyStorage = () => {
      const { fetchUser } = useFetch('http://localhost:8000/api/get-file/')
      const token = localStorage.getItem("token")
      const { data, error, isPending } = useQuery(async () => fetchUser())

      if (isPending) return <Loading />

      if (error) return <Navigate to={"/auth/login"} replace state={"my_file"} />
      // generating file icon

      if (data?.files.length === 0) return <div className='p-6 h-[80%] w-full  flex items-center justify-center'>
            <div className=''>
                  <img src="/empty.png" className='h-[27rem] w-[27rem]  bg-cover' alt="" />
                  <p className='text-center text-3xl text-card-foreground'>No Files found</p>
                  <div className='flex my-6'>
                        <Link to={"/home/create-file"} className='mx-auto'>
                              <button className='bg-primary hover:bg-primary/90 duration-300 transition-all p-3 cursor-pointer  text-sm tracking-wide  px-4 rounded-xl text-white mb-5 flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                                    <span>
                                          Upload your first file!
                                    </span>
                              </button>
                        </Link>
                  </div>
            </div>
      </div>
      return (
            <div className='p-6 h-full overflow-auto '>
                  <h1 className='text-2xl text-card-foreground w-full font-semibold sticky  top-0 tracking-wider'>My Files</h1>
                  <div className='grid mt-4 grid-cols-2 gap-3 lg:grid-cols-3'>
                        {
                              data?.files?.map((file => {
                                    return (
                                          <FileCard data={file} key={file.id} />
                                    )
                              }))
                        }
                  </div>
            </div >
      )
}

export default MyStorage