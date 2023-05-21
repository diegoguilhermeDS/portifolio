import React from 'react'

interface iButtonProps {
    children: React.ReactNode,
    heigth: number,
    width?: number
}

const Button = ({children, heigth, width}: iButtonProps) => {
  return (
    <button className={`flex items-center justify-center h-[${heigth.toString()}px] ${width ? `w=[${width.toString()}px]` : "w-full" } px-5 py-2 border-2 border-solid border-[#5711C6] bg-brand-100 opacity-60 rounded hover:shadow-button hover:opacity-100 hover:border-brand-100 transition ease-in-out duration-300`}>{children}</button>
  )
}

export default Button