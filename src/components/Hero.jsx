import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import Button from './common-ui/Button';

const Hero = () => {
  return (
    <div className="relative h-[100vh] px-8 mx-auto bg-[url('/props/hero1-bg.png')] bg-cover bg-no-repeat bg-right-top ">
      <div className="absolute top-0 left-0 bg-[url('/props/hero1.png')] z-0 w-full overflow-hidden h-full bg-cover bg-no-repeat" />
      {/* Decorative Elements */}
      <div className="absolute left-8 md:left-20 top-8 md:top-20 w-12 h-12 transform rotate-45 bg-green-100/50" />
      <div className="absolute right-1/4 bottom-20 w-8 h-8 rounded-full bg-red-100/50" />
      <div className="absolute left-1/3 bottom-40 w-6 h-6 transform rotate-45 bg-green-100/50" />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full  p-4 absolute  z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
            Content is <span className="text-primary">fire</span>
            <br />
            Social media
            <br />
            is <span className="text-primary">gasoline</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            In an age where everything and everyone is linked through networks of
            glass and air organization, government agency, country are an island.
          </p>
          <div className='flex items-center gap-8'>
            <FaCirclePlay size={80} color='#f94f4f'/>
            <Button title="Start a Project" color="bg-primary" hover="hover:bg-secondary"/>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Hero
