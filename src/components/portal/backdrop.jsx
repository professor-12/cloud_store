import React from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from "tailwind-merge";


const BackDrop = ({ onClick, className }) => {
      return (
            createPortal(<div onClick={onClick} className={twMerge("bg-black/60 -blur-xl  fixed inset-0 z-[99]", className)} />, document?.getElementById("portal"))
      )
}

export default BackDrop


