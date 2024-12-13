import React from 'react'
import Button from './Button'

const CTASection = () => {
    return (

        <div className='w-full h-full bg-[url("/props/map.png")] bg-no-repeat bg-center  pb-[100px] mb-[60px]'>
            <div className='flex flex-col h-full m-auto  text-center px-[15px] justify-center max-w-[1200px] items-center '>
                <h2 className=' flex flex-wrap justify-center items-center text-[42px] max-w-[66.66%] pt-20 -mx-[15px] font-[700] text-secondary leading-[1.4em]'>
                    Let’s create creativity inspiration <span>
                        <span className='text-primary'>projects</span> together
                    </span>
                </h2>

                <div className='pt-[50px] flex gap-6 justify-center items-center'>
                    <Button title={"Request A Quote"} color={"bg-secondary"} hover={"hover:bg-primary"} />
                    <Button title={"Let's Talk"} color={"bg-primary"} hover={"hover:bg-secondary"} />
                </div>
            </div>
        </div>
    )
}

export default CTASection