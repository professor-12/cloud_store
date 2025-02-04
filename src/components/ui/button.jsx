import React from 'react'

const Button = ({ children }) => {
      return (
            <button className='bg-gradient-to-br from-[rgb(253,53,110)] p-4 rounded-lg font-semibold cursor-pointer py-2 to-[rgb(253,53,110)]'>{children}</button>
      )
}

Button.displayname = "button"

export default Button