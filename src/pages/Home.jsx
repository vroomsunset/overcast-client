

import { FaGithub } from 'react-icons/fa'

export default function () {
    return (
        <div className="w-screen h-screen">
            <div className="w-full bg-blue-400 h-[10%] flex justify-around items-center">
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold mr-4 cursor-pointer">OVERCAST</div>
                    <div className="flex justify-around hidden md:flex">
                        <div className="text-xl font-bold mx-2 cursor-pointer">Home</div>
                        <div className="text-xl font-bold mx-2 cursor-pointer">About us</div>
                        <div className="text-xl font-bold mx-2 cursor-pointer">Contact</div>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <FaGithub className='text-4xl' />
                </div>
            </div>
            <div className='w-full bg-red-400 h-[90%]'>
                <div className="w-full bg-red-400 h-[90%] flex justify-center items-center">
                    <div>comment, communicate and connect</div>
                    <div>image</div>
                </div>
                <div className='w-full h-[10%] flex'>
                    <div className='text-center justify-center '>get started</div>
                    <div className='text-center justify-center '>signup</div>

                </div>
            </div>
        </div>
    )
}
