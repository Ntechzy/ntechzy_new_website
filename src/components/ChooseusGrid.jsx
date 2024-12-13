import React from "react";
import features from "../data/ChooseUs";

const ChooseusGrid = () => {


    return (
        <section className="">
            <div className="container mx-auto">
                <div className="grid grid-cols-2  gap-8 lg:gap-12">

                    <div className="flex flex-col items-center text-center space-y-4 gap-10">
                        {
                            features.slice(0, 2).map((obj, i) => (

                                <div className="flex flex-col justify-center items-center">
                                    <div
                                        className={`w-[90px] h-[90px] flex items-center justify-center rounded-full  ${obj.bgColor} mb-[25px]`}
                                    >
                                        <span className="text-3xl text-white">{obj.icon}</span>
                                    </div>
                                    <h3 className="text-[22px] font-[600] mb-[18px] text-gray-800">
                                        {obj.title}
                                    </h3>
                                    <p className="text-gray-600 text-[16px] leading-[1.75em]">
                                        {obj.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex  flex-col items-center text-center space-y-4 gap-10 pt-[70px] px-[5px]">
                        {
                            features.slice(2, 4).map((obj, i) => (

                                <div className="flex flex-col justify-center items-center">
                                    <div
                                        className={`w-[90px] h-[90px] flex items-center justify-center rounded-full ${obj.bgColor} mb-[25px]`}
                                    >
                                        <span className="text-3xl text-white">{obj.icon}</span>
                                    </div>
                                    <h3 className="text-[22px] font-[600] mb-[18px] text-gray-800">
                                        {obj.title}
                                    </h3>
                                    <p className="text-gray-600 text-[16px] leading-[1.75em]">
                                        {obj.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ChooseusGrid;
