import React, { useState, useEffect } from 'react';

const Slider = ({ interval = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };



    useEffect(() => {
        const slideInterval = setInterval(nextSlide, interval);
        return () => clearInterval(slideInterval);
    }, [currentSlide, interval]);

    const slides = [
        { id: 1, img: '/assets/nikhil.jpg', position: 'center' },
        { id: 2, img: '/assets/nikhil.jpg', position: 'left' },
        { id: 3, img: '/assets/nikhil.jpg', position: 'right' },

    ];
    return (
        <div className="relative w-full h-[50vh] overflow-hidden">
            <div className='flex h-full'>

                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={
                            `absolute inset-0 w-[50%] h-full transition-all duration-500 ease-in-out bg-cover bg-center  `}
                        style={{ backgroundImage: `url(${slide.img})`, transform: `translateX(${(index - currentSlide) * 100}%)`, objectFit: "cover" }}
                    >
                        <div
                            className={'flex items-center w-full h-full'}
                        >
                            this is content
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-5">
                <button
                    onClick={prevSlide}
                    className="absolute mx-4 p-4 rounded-lg bottom-2 shadow-xl shadow-[#D4AF37] right-[50%] text-3xl bg-white text-black"
                >
                    <i className="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute mx-4 p-4 rounded-lg bottom-2 shadow-xl shadow-[#D4AF37] left-[50%] text-3xl bg-white text-black"
                >
                    <i className="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Slider;
