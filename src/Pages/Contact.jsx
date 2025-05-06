/* eslint-disable no-unused-vars */
import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-bl from-black to-gray-900 text-white px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
        <form className="bg-white/10 backdrop-blur-md p-8 rounded-xl space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-white/20 text-white placeholder-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 px-6 py-3 rounded-full font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact