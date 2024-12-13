import React from 'react'

const CompanyProfile = () => {
    return (
        <div className='md:max-w-[1200px] mt-[80px] mb-[160px] m-auto'>
            <div className='flex flex-col md:flex-row gap-10 justify-between items-center'>
                <div className='flex flex-col gap-4 h-auto w-[58.8%] overflow-hidden'>
                    <img src="https://htmlguru.net/wekala/wekala/assets/images/others/about1.png" alt="" />
                </div>
                <div className='flex flex-col gap-4 w-[41.66%] px-[15px] relative'>
                    <div className='mb-[40px]'>
                        <div className='flex items-center gap-4'> 
                            <h1 className='text-[12px] font-bold uppercase mb-[20px] text-primary '>
                                Company profile
                            </h1>
                            <img className=' mb-[20px]' src="/props/divider.png" alt="" />
                        </div>
                        <h1 className='text-[42px] font-[700] text-secondary leading-[1.25em]'>
                            Content marketing is a commitment, not a campaign
                        </h1>
                    </div>
                    <p className='text-lg text-gray-500 mb-[55px]'>
                        Why money's in that office, right? If she start giving means some bullet about ain't there, and we got to go placing else and get it. Why not can money's in that office, right? If she start giving means some bullshit.
                    </p>

                    <div className='relative before:absolute before:w-[60px] before:h-[2px] before:bg-primary before:content-["_"] before:top-[12px] before:left-0 pl-[80px]'>
                        Abdelfattah Arafa, Wekala CEO
                    </div>

                    <div className='absolute -bottom-[50px] -z-[1]'>
                        <img src="/props/quote.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile