import React from 'react'

const Button = ({ title, color, hover }) => {
    return (
        <button className={`${color} text-white font-[500] text-[16px] rounded-l-full rounded-br-full w-auto px-[30px] py-[20px] ${hover}`} >
            {title}
        </button >
    )
}

export default Button