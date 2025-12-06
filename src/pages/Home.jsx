

import { FaGithub } from 'react-icons/fa'

export default function () {
    return (
        <div className="w-screen h-screen overflow-x-hidden ">
            <div className="w-full bg-neutral-900 h-16 flex justify-around items-center fixed top-0 left-0 z-50">
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold mr-8 cursor-pointer">OVERCAST</div>
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
            <div className="w-full  bg-black-900  bg-center h-full pt-16">
                <div className="w-full h-[80vh] md:flex block justify-center items-center">
                    <div>
                        <img src="/overcast1.png" alt="overcastext" className='w-120 h-60' />
                    </div>
                    <div>
                        <img className='w-120 h-120' src="/a-group-of-people-in-a-circle-with-a-cloud-in-the-middle-free-png.webp" alt="connect image" />
                    </div>
                </div>
                <div className='w-full h-[10%] flex bg-blue-400'>
                    <div className=''>get started</div>
                    <div className=''>signup</div>

                </div>
            </div>
            <div className='w-screen h-screen bg-red-300'>
                about us
            </div>
            <div className='w-screen h-screen bg-blue-300'>
                Contact
            </div>
        </div>
    )
}
