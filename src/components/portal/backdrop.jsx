import React from 'react'
import { createPortal } from 'react-dom'

const BackDrop = ({ onClick, className }) => {
      return (
            createPortal(<div onClick={onClick} className={className + " " + "bg-black/60 backdrop-blur-xl  fixed inset-0 z-[99]"} />, document.getElementById("portal"))
      )
}

export default BackDrop