import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoadingSkeleton = () => {
      return (
            <div className='grid gap-12 p-3 grid-cols-2 lg:grid-cols-3'>
                  {
                        new Array(12).fill(0).map((_, index) => {
                              return (
                                    <div className='space-y-1' key={index}>
                                          <div>
                                                <Skeleton height={"2.7rem"} borderRadius={"12px"} width={"3.3rem"} />
                                          </div>
                                          <div>
                                                <Skeleton height={"2.4rem"} borderRadius={"8px"} />
                                          </div>
                                          <div>
                                                <Skeleton height={"2rem"} borderRadius={"8px"} />
                                          </div>
                                    </div>
                              )
                        })
                  }
            </div>
      )
}

export default LoadingSkeleton