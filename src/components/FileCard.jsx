import React, { useState } from 'react'

const FileCard = ({ data }) => {
      const [showDropDown, setDropDown] = useState(false)
      return <div className='relative'>
            {showDropDown &&
                  <div className='absolute z-10 bg-white rounded-2xl p-3 shadow-2xl  border border-card top-0 left-[100%]'>
                        Lorem, ips em, harum ipsam laborum.
                  </div>
            }
            <div className='p-4 bg-card border overflow-hidden border-border rounded-3xl'>
                  <div onClick={() => setDropDown(!showDropDown)} className='float-end text-card-foreground/50 rotate-90 text-lg  cursor-pointer'>...</div>
                  <span className='text-primary  text-[14px] truncate'>{data?.name}</span>
                  <p className='truncate text-[12px] text-muted-foreground'>Type: {data?.type}</p>
            </div>
      </div >
}

export default FileCard