import React from 'react'
import FooterMenu from './common-ui/FooterMenu'

const Footer = () => {
    return (
        <div>

            <div className='relative bg-secondary-light pt-[240px] pb-[80px]'>
                <div className="absolute top-[-2px] left-0 w-full h-[175px] bg-[url('/props/upper-wave.png')] bg-no-repeat bg-cover"></div>

                <div className="absolute bottom-[-1px] left-0 w-full h-[175px] bg-[url('/props/waves-bottom.png')] bg-no-repeat bg-cover"></div>


                <div className='mb-[90px] text-center max-w-[1200px] flex gap-[2rem] justify-center flex-col m-auto'>
                    <div className=' max-w-[1200px] m-auto px-[15px]'>
                        <h4 className=' text-primary'>
                            Newsletter
                        </h4>
                        <h4 className="mb-[18px] font-[700] relative text-[42px] text-secondary">
                            Subscribe Company Newsletter
                            <span
                                className="absolute bottom-[-29px] left-1/2 transform -translate-x-1/2 w-[120px] h-[10px] bg-[url('/props/divider.png')] bg-no-repeat"
                            ></span>
                        </h4>
                    </div>
                    <div className='-px-[15px] flex gap-8 justify-center items-center m-auto p-[15px] max-w-[75%]'>
                        <input type="text" className=' py-[15px] bg-transparent outline-none border-b-[1px] border-[#dddddd] focus:border-primary' placeholder='Enter You Name' />
                        <input type="text" className=' py-[15px] bg-transparent outline-none border-b-[1px] border-[#dddddd] focus:border-primary' placeholder='Enter You Name' />
                        <button className='w-[60px]'>
                            button
                        </button>
                    </div>

                    {/* footer */}

                    <div className="py-10 ">
                        <FooterMenu />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer