import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const teamMembers = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1713946598432-9bb1f09acf9b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "John Doe",
        role: "CEO",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1713947505435-b79c33c6c91a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jane Smith",
        role: "CTO",
        linkedIn: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        facebook: "https://facebook.com/janesmith",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1713947504109-08f15c1672a7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Mark Johnson",
        role: "Designer",
        linkedIn: "https://linkedin.com/in/markjohnson",
        twitter: "https://twitter.com/markjohnson",
        instagram: "https://instagram.com/markjohnson",
        facebook: "https://facebook.com/markjohnson",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Emily Carter",
        role: "Developer",
        linkedIn: "https://linkedin.com/in/emilycarter",
        twitter: "https://twitter.com/emilycarter",
        instagram: "https://instagram.com/emilycarter",
        facebook: "https://facebook.com/emilycarter",
    },
];

function TeamSection() {
    return (
        <div className='bg-colorBg'>
            <div className='section-container'>

                <h2 className='text-center my-5 text-2xl font-semibold'>Team Member Card</h2>

                {/* team member cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {
                        teamMembers.map((member, i) => (
                            <div key={i} className='bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>
                                <img src={member.image} alt={member.name} className='w-full h-56 object-cover' />

                                {/* content */}
                                <div className='p-5'>
                                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>{member.name}</h3>
                                    <p className='text-sm text-gray-500 mb-4'>{member.role}</p>

                                    {/* social icons */}

                                    <div className='flex space-x-4 mb-5 items-center'>
                                        <a ><FaLinkedinIn className='text-blue-600 hover:text-blue-800' /></a>
                                        <a><FaTwitter className='text-blue-600 hover:text-blue-800' /></a>
                                        <a><FaInstagram className='text-blue-600 hover:text-blue-800' /></a>
                                        <a><FaFacebookF className='text-blue-600 hover:text-blue-800' /></a>
                                    </div>

                                    {/* contact button */}
                                    <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300'>Conatct {member.name.split(" ")[0]}</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamSection