import React from 'react'
import useQuery from '../hooks/useQuery'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import FileCard from '../components/FileCard'

const Spam = () => {
      const { fetchUser } = useFetch("http://localhost:8000/api/spam/")
      const { data, error, isPending, refetch } = useQuery(fetchUser)

      console.log(data?.length)
      return (
            <div className='p-6 h-full'>
                  <h1 className='text-3xl text-secondary-foreground/90'>
                        Spam
                  </h1>
                  {
                        isPending ? <Loading /> :
                              data?.length == 0 ?
                                    <div className='h-[80%] w-full flex  items-center justify-center'>
                                          <div className=''>
                                                <img className='w-[22erm]  h-[22rem]' src='/empty.png' />
                                                <h2 className='text-accent-foreground/80 text-3xl text-center'>Spam folder is empty</h2>
                                          </div>
                                    </div> :
                                    <div className='w-full grid grid-cols-3 gap-4 pt-6'>
                                          {

                                                data?.map((file, _indx) => {
                                                      return <FileCard data={file} key={_indx} />
                                                })
                                          }
                                    </div>
                  }
            </div>
      )
}

export default Spam