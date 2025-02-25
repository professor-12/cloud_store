import React, { Children } from 'react'
import { twMerge } from 'tailwind-merge'
const Modal = ({ children, className, onClick }) => {
      return (
            <div onClick={onClick} className={twMerge('backdrop-blur-md bg-white/20 inset-0 z-[999999] fixed', className)}>{children || ""}</div>
      )
}

export default Modal