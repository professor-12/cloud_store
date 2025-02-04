import React, { useState } from 'react'

const FileCard = ({ data }) => {
      const [showDropDown, setDropDown] = useState(false)
      return <div className='relative'>
            <div className='p-4 px-5  bg-card border overflow-hidden border-border rounded-3xl'>
                  <div onClick={() => setDropDown(!showDropDown)} className='float-end text-card-foreground/50 rotate-90 text-lg  cursor-pointer'>...</div>
                  <span className='text-primary  text-[15.2px] truncate'>{data?.name}</span>

                  <p className='truncate text-[12px] text-muted-foreground'>Type: {data?.type}</p>
            </div>
      </div >
}

export default FileCard