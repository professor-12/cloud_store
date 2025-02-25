import React, { useState } from 'react'
import BackDrop from './portal/backdrop';
import { Link } from 'react-router-dom';
import { useFileDownload } from '../hooks/useFile';
import useMutation from '../hooks/useMutation';
import { BASE_URL } from '../lib/constants';

const FileCard = ({ data }) => {
      const [showDropDown, setDropDown] = useState(false)
      return <div onDoubleClick={(e) => { setDropDown(true) }} onContextMenu={(e) => { e.preventDefault(); setDropDown(true) }} className='relative cursor-pointer'>
            {
                  showDropDown && <>
                        <ContextMenu data={data} />
                        <BackDrop onClick={() => setDropDown(false)} className={"bg-transparent"} />

                  </>
            }
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






const ContextMenu = ({ data }) => {
      const { blobData, downloadFile, loading, blobUrl, error } = useFileDownload()
      const { error: mutateerror, loading: mutateloading, mutate } = useMutation();
      const handleDelete = (id) => {

            mutate(async () => {
                  try {
                        const request = await fetch(BASE_URL + "/api/delete-file/", {
                              method: "DELETE", headers: {
                                    Authorization: "Token " + localStorage.getItem("token"),
                                    "Content-Type": "application/json"
                              }, body: JSON.stringify({
                                    id: id
                              })
                        })
                        const respose = await request.json()
                        console.log(respose)
                  } catch (err) {
                  }

            })

      }
      return <div className=" absolute top-2 bg-white p-1 rounded-lg w-[80%] min-w-[200px] -right-[12px] z-[99999] shadow border border-gray-300/30">
            <ul className='*:p-1 *:px-2 *:hover:bg-accent-foreground/20 py-2 space-y-px'>
                  <li>
                        <a className="flex gap-1 items-center" href={data?.file} target='_blank'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M13.234 20.252 21 12.3" /><path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486" /></svg> Open file with
                        </a>
                  </li>
                  <li onClick={() => downloadFile(data?.file)} className='cursor-pointer flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>

                        {loading ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle animate-spin "><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg> : "Download"}
                  </li>
                  <li className='cursor-pointer flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-pen"><path d="M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" /><path d="M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /></svg>Rename</li>
                  <li onClick={() => handleDelete(data.id)} className='cursor-pointer flex items-center gap-2 text-destructive'>
                        {mutateloading ?
                              "Deleting..."
                              :
                              <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                    Move to Trash
                              </>
                        }
                  </li>
            </ul>
      </div >
}