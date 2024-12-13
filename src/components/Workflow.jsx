import React from 'react'
import { WorkFlow } from '../data/WorkFlow'
const Workflow = () => {
    return (
        <div className='md:max-w-[1200px] mt-[80px] mb-[200px] m-auto justify-center items-center text-center'>

            {/* heading section  */}

            <div className='mb-[55px] w-[58.33%] m-auto flex-col'>
                <h3 className='text-[12px] font-[600] text-primary mb-[20px]'>
                    WORKFLOW
                </h3>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-secondary mb-[18px] font-[700] text-[42px] leading-[1.25em]'>
                        People don’t buy what you do, they buy why you do it.
                    </h1>
                    <div>
                        <img src="/props/divider.png" alt="" />
                    </div>
                </div>
            </div>

            {/* main content  */}

            <section className="bg-[url('/assets/props/line.svg')] flex flex-wrap justify-center m-auto gap-6 pt-5">
                <div className="grid grid-cols-4 w-full">
                    {WorkFlow.map((item, key) => (
                        <div
                            key={key}
                            className={`w-full transition-transform transform -translate-x-4 ${key % 2 === 0
                                ? 'translate-y-0'
                                : 'translate-y-3 mt-[60px]'
                                }`}
                        >
                            <div className=' flex flex-col justify-center items-center mb-[40px] gap-2 '>
                                <div className={`h-[100px] w-[100px] rounded-full ${item.bg} relative overflow-hidden`}>
                                    <h1 className='text-[#0000001c] absolute z-[5] -right-[5px] -top-4 font-semibold text-[80px]'>
                                        {key + 1}
                                    </h1>
                                    <div className='flex justify-center z-[999] items-center m-auto h-full text-white text-4xl font-thin'>
                                        {item.icon}
                                    </div>

                                </div>
                                <h1 className='text-secondary font-[600] text-[22px]'>
                                    {item.title}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section >

        </div >
    )
}

export default Workflow