import React from 'react'

interface iButtonProps {
    children: React.ReactNode,
    heigth: number
}

const Button = ({children, heigth}: iButtonProps) => {
  return (
    <button className={`w-full bg-brand-100 opacity-60 rounded flex items-center justify-center h-[${heigth.toString()}px] border-2 border-solid border-[#5711C6] hover:shadow-button hover:opacity-100 hover:border-brand-100 transition ease-in-out duration-300`}>{children}</button>
  )
}

export default Button