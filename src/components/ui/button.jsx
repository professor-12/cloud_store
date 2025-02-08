import React from 'react'

const Button = ({ children }) => {
      return (
            <button className=' p-4 text-white rounded-full font-medium cursor-pointer hover:bg-[#1D9B5E]/80 py-2 bg-[#1D9B5E]'>{children}</button>
      )
}

Button.displayname = "button"

export default Button