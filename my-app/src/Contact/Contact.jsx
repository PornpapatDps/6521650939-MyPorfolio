import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const contactData = { name, email, message }

    try {
      const response = await fetch('https://your-backend-path.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
      } else {
        setStatus('Failed to send message.')
      }
    } catch (error) {
      setStatus('Error occurred. Please try again.')
    }
  }

  return (
    <div className="bg-gradient-to-r from-gray-300 to-gray-600 py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl text-center">
        {/* Contact Header */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-10">Contact</h1>

        {/* Contact Information Section */}
        <div className="space-y-6 text-xl text-gray-700 mb-10">
          <div>  
            <p className="font-semibold text-gray-800">Email (KU):</p>
            <a href="mailto:pornpapat.d@ku.th" className="text-blue-600 hover:text-blue-800">
              pornpapat.d@ku.th
            </a>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Email:</p>
            <a href="mailto:pornpapat.d@gmail.com" className="text-blue-600 hover:text-blue-800">
              pornpapat.d@gmail.com
            </a>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Phone:</p>
            <a href="tel:+66971151093" className="text-blue-600 hover:text-blue-800">
              097-115-1093
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-xl text-gray-800">Your Name</label>
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xl text-gray-800">Your Email</label>
            <input
              type="email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xl text-gray-800">Your Message</label>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-800 text-white text-lg py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Status message */}
        {status && (
          <div className="mt-4 text-xl text-gray-700">
            <p>{status}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
