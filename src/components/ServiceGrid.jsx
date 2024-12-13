import React from "react";

const ServicesGrid = () => {
    const services = [
        {
            icon: "💡",
            title: "Trend Design",
            description:
                "Why money's in that office, right? If she start giving means some bullet about ain't there.",
            bgColor: "bg-[#eabeab]",
        },
        {
            icon: "📦",
            title: "Product Design",
            description:
                "Why money's in that office, right? If she start giving means some bullet about ain't there.",
            bgColor: "bg-[#53b596]",
        },
        {
            icon: "📢",
            title: "Branding",
            description:
                "Why money's in that office, right? If she start giving means some bullet about ain't there.",
            bgColor: "bg-[#9566d6]",
        },
        {
            icon: "🏆",
            title: "Animation",
            description:
                "Why money's in that office, right? If she start giving means some bullet about ain't there.",
            bgColor: "bg-[#1ca5da] ",

        },
    ];

    return (
        <section className="">
            <div className="container mx-auto">
                <div className="grid grid-cols-2  gap-8 lg:gap-12">

                    <div className="flex flex-col items-center text-center space-y-4 gap-10">
                        {
                            services.slice(0, 2).map((obj, i) => (

                                <div className="flex flex-col justify-center items-center">
                                    <div
                                        className={`w-[90px] h-[90px] flex items-center justify-center rounded-full  ${obj.bgColor} mb-[25px]`}
                                    >
                                        <span className="text-4xl">{obj.icon}</span>
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

                    <div className="flex  flex-col items-center text-center space-y-4 gap-10 pt-[70px] px-[15px]">
                        {
                            services.slice(2, 4).map((obj, i) => (

                                <div className="flex flex-col justify-center items-center">
                                    <div
                                        className={`w-[90px] h-[90px] flex items-center justify-center rounded-full ${obj.bgColor} mb-[25px]`}
                                    >
                                        <span className="text-4xl">{obj.icon}</span>
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

export default ServicesGrid;
