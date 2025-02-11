import React, { useState } from 'react'

const FileCard = ({ data }) => {
      const [showDropDown, setDropDown] = useState(false)
      return <div className='relative cursor-pointer'>
            <div className='p-4 px-5  bg-card border overflow-hidden border-border rounded-xl space-y-2.5'>
                  <div className='text-popover-foreground/80 text-7xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
                  </div>
                  <p className='text-primary  text-[16px] font-medium truncate'>{data?.name}</p>
                  <p className='truncate text-[12px] text-muted-foreground'>Type: {data?.type}</p>
            </div>
      </div >
}

export default FileCard