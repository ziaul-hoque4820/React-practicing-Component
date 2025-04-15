import React from 'react'

const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1734519614079-f8ac6ac540bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Technology",
      title: "How AI is Shaping the Future of Web Development",
      description:
        "Discover how artificial intelligence is transforming the way we build and design websites.",
      authorImage: "/images/authors/author1.png",
      authorName: "John Doe",
      authorRole: "Tech Blogger",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Design",
      title: "10 Tips for Creating Stunning UI/UX Designs",
      description:
        "Learn the secrets to designing user interfaces that captivate and convert users.",
      authorImage: "/images/authors/author2.png",
      authorName: "Jane Smith",
      authorRole: "UX Designer",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Development",
      title: "Understanding JavaScript Closures in Depth",
      description:
        "A comprehensive guide to one of the most powerful concepts in JavaScript.",
      authorImage: "/images/authors/author3.png",
      authorName: "Mark Johnson",
      authorRole: "Frontend Developer",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Business",
      title: "Why Digital Transformation is Essential for Success",
      description:
        "Explore how businesses can thrive by adopting digital transformation strategies.",
      authorImage: "/images/authors/author4.png",
      authorName: "Emily Carter",
      authorRole: "Business Analyst",
    },
  ];

function BlogSection() {
    return (
        <div className='section-container'>

            <h2 className='text-center my-5 text-2xl font-semibold'>Blog Section </h2>

            {/* Blog container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    blogs.map((blog, index) => (
                        <div key={blog.id} className='bg-white shadow-md rounded-lg overflow-hidden cursor-pointer'>
                            <img src={blog.image} alt={blog.title} className='w-full h-48 object-cover hover:scale-105 transition transform' />

                            {/* blog content */}
                            <div className='p-5'>
                                <p className='text-sm text-blue-500 font-medium uppercase mb-2'>{blog.category}</p>
                                <h3 className='text-xl font-bold text-gray-800 mb-3'>{blog.title}</h3>
                                <p className='text-sm text-gray-600 mb-5'>{blog.description}</p>

                                {/* author info */}

                                <div className='flex items-center space-x-3'>
                                    <img src={blog.authorImage} alt={blog.authorName} className='w-10 h-10 rounded-full object-cover' />
                                    <div>
                                        <h4 className='text-sm font-bold text-gray-800'>{blog.authorName}</h4>
                                        <p className='text-xs text-gray-500'>{blog.authorRole}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogSection