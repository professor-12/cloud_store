import React from 'react'

const PreveiwImage = ({ onClick, onClose, imageURL, loading }) => {
      return (
            <div onClick={(e) => { e.stopPropagation() }} className='bg-card border relative max-w-[250px] cursor-auto w-full mx-auto shadow-2xl rounded-2xl border-border  p-2'>
                  <div className='relative h-[13rem] w-full bg-red-400 rounded-t-[calc(1rem+0.5rem)] overflow-hidden'>
                        {imageURL &&
                              <img src={imageURL} className='bg-cover h-full w-full absolute' alt="" />
                        }
                  </div>
                  <div className='flex items-center justify-around gap-3 mt-3'>
                        <button type='button' onClick={onClose} className='border cursor-pointer p-1 rounded-lg px-4 border-border flex-1 text-red-600'>cancel</button>
                        <button type='button' onClick={onClick} className='border cursor-pointer p-1 rounded-lg px-4 border-border flex-1'>
                              {
                                    loading ? "Uploading..." :
                                          "Upload"
                              }
                        </button>

                  </div>
            </div>
      )
}

export default PreveiwImage