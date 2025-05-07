import React from 'react'


const Contact = () => {
  return (
    // <div className='w-[100vw] h-[80vh] py-12 px-40 flex flex-col '>

    //   <h1 className='font-bold text-2xl'>Contact Us page </h1>
    //   <form >
    //     <input type="text" placeholder='name' className='p-2 m-2 border border-black' />
    //     <input type="text" placeholder='message' className='p-2 m-2 border border-black' />
    //     <button className='p-2 m-2 border border-black bg-gray-400 rounded-lg'>Submit</button>
    //     </form>

    // </div>
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-4xl flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsTAwNPbWsrAEqQNuTAzeZ_yTyvatRrPhMA&s"
            alt="Exciting Food"
            className="w-full h-full  object-contain rounded-lg"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
