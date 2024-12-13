import React from 'react'
import Button from './common-ui/Button'
import ServicesGrid from './ChooseusGrid'
import ChooseusGrid from './ChooseusGrid'

const ChooseUs = () => {
    return (
        <div className='md:max-w-[1200px] mt-[80px] mb-[160px] m-auto ' >
            <div className='flex justify-between items-center '>

                <div className='w-[41.6%]'>
                    <div className=' '>
                        <div className='mb-[40px]'>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-[12px] font-bold uppercase mb-[20px] text-primary '>
                                    Why Choose Us
                                </h1>
                                <img className=' mb-[20px]' src="/props/divider.png" alt="" />
                            </div>
                            <h1 className='text-[42px] font-[700] text-secondary leading-[1.25em]'>
                                People don’t buy what you do, they buy why you do it.
                            </h1>
                        </div>

                        <div>

                            <p className='text-lg text-gray-500 mb-[55px]'>
                                Why money's in that office, right? If she start giving means some bullet about ain't there, and we got to go placing else and get it.


                            </p>
                            <Button title={"Check Out Services"} color={"bg-primary"} hover={"hover:bg-secondary"} />
                        </div>


                    </div>
                </div>
                <div className='w-[50%]'>
                    <ChooseusGrid />
                </div>
            </div>
        </div >
    )
}

export default ChooseUs