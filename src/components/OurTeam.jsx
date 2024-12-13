import React from 'react'
import Button from './common-ui/Button'

const OurTeam = () => {
    return (
        <div className='md:max-w-[1200px] mt-[80px] mb-[160px] m-auto ' >
            <div className='flex justify-between items-center m-auto'>
                <div className='relative w-[50%] pt-[50px] pb-[30px]'>
                    <div className='  w-full animate-spin-slow'>
                        <img className='w-full' src="/props/shape-circle.png" alt="" />
                    </div>
                    <div className=''>
                        <div className='absolute top-[52%] overflow-hidden rounded-full left-[50%] translate-x-[-50%] h-[150px] w-[150px]  translate-y-[-50%] z-10 bg-black'>
                            <img className='' src="/assets/nikhil.jpg" alt="" srcset="" />
                        </div>
                        <div className='absolute top-[8%] overflow-hidden rounded-full left-[50%] translate-x-[-50%] h-[90px] w-[90px]  translate-y-[-50%] z-10 bg-black'>
                            <img className='' src="/assets/cfo.jpg" alt="" srcset="" />
                        </div>
                        <div className='absolute top-[120px] overflow-hidden rounded-full left-0 translate-x-[-50%] h-[65px] w-[65px]  translate-y-[-50%] z-10 bg-black'>
                            <img className='' src="/assets/cto.jpg" alt="" srcset="" />
                        </div>
                        <div className='absolute -bottom-8 overflow-hidden rounded-full right-[100px] translate-x-[-50%] h-[90px] w-[90px]  translate-y-[-50%] z-10 bg-black'>
                            <img className='' src="/assets/hr.jpg" alt="" srcset="" />
                        </div>
                        <div className='absolute bottom-14 overflow-hidden rounded-full left-[100px] translate-x-[-50%] h-[65px] w-[65px]  translate-y-[-50%] z-10 bg-black'>
                            <img className='' src="/assets/hr2.png" alt="" srcset="" />
                        </div>
                        <div className='absolute top-[195px] overflow-hidden rounded-full -right-[16px] translate-x-[-50%] h-[65px] w-[65px]  translate-y-[-50%] z-10 bg-black'>
                            <img className='' src="/assets/img.png" alt="" srcset="" />
                        </div>
                        <div className='absolute bottom-[180px] overflow-hidden rounded-full -right-[100px] translate-x-[-50%] h-[65px] w-[65px]  translate-y-[-50%] z-10 bg-black'>
                            <img className='' src="/assets/img23.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className='w-[41.6%]'>
                    <div className=' '>
                        <div className='mb-[40px]'>
                            <div className='flex items-center gap-4'>
                                <h1 className='text-[12px] font-bold uppercase mb-[20px] text-primary '>
                                    Our Team
                                </h1>
                                <img className=' mb-[20px]' src="/props/divider.png" alt="" />
                            </div>
                            <h1 className='text-[42px] font-[700] text-secondary leading-[1.25em]'>
                                An essential aspect of creativity is not being afraid to fail.
                            </h1>
                        </div>

                        <div>

                            <p className='text-[16px] text-gray-500 mb-[55px]'>
                                Why money's in that office, right? If she start giving means some bullet about ain't there, and we got to go placing else and get it.
                            </p>
                            <Button title={"Our Services"} color={"bg-primary"} hover={"hover:bg-secondary"} />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurTeam