import React from 'react'
import { BsApple } from "react-icons/bs";
import { FaAmazon, FaGoogle } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { ImFacebook2 } from "react-icons/im";


const logos = [
    { icon: BsApple, name: "Apple" },
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: TfiMicrosoftAlt, name: "Microsoft" },
    { icon: ImFacebook2, name: "Facebook" },
]


function CompanyLogos() {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
                <h2 className='text-center my-5 text-2xl font-semibold'>Company Logos with Animation</h2>

                {/* logo container  */}
                <div className='relative overflow-hidden border-y-[1px] p-8'>
                    <div className='flex items-center justify-around md:space-x-14 space-x-8 animate-scroll'>
                        {
                            logos.map((logo, index) => (
                                <div key={index} className='flex justify-center items-center bg-white rounded-full p-6 w-28 h-28 hover:scale-110 transition transform'>
                                    <logo.icon className='text-blue-500 text-5xl ' title={logo.name} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CompanyLogos