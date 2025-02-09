import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import useQuery from '../hooks/useQuery'
import toast from 'react-hot-toast'
import FileCard from '../components/FileCard'
import Loading from '../components/Loading'
import { BASE_URL } from '../lib/constants'
import empty from "/empty.png"
const Starred = () => {
      const { fetchUser } = useFetch(BASE_URL + '/api/get-file/starred')
      const { data, error, isPending } = useQuery(async () => fetchUser())


      if (isPending) return <Loading />

      return (
            <div className='p-8'>
                  <h1 className='text-2xl text-secondary-foreground/80 font-semibold'>Starred</h1>
                  {data.length == 0 ?
                        <div className='h-[80%] w-full flex  items-center justify-center'>
                              <div className=''>
                                    <img className='w-[22erm]  h-[22rem]' src={empty} />
                                    <h2 className='text-accent-foreground/90 text-2xl text-center'>No starred files found</h2>
                              </div>
                        </div>
                        :

                        <div className='grid mt-4 grid-cols-2 gap-3 lg:grid-cols-3'>
                              {data.length == 0 ? div :
                                    data?.map((file => {
                                          return (
                                                <FileCard starred data={file} key={file.id} />
                                          )
                                    }))
                              }
                        </div>
                  }
            </div>
      )
}

export default Starred