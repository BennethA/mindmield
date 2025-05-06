/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const WrongURL = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 to-red-950 py-20 px-8 text-white font-bold text-5xl flex items-center justify-center gap-4 flex-col">
      <div>
        404
      </div>
      <div>
        Page Not Found
      </div>
      <Link to={"/"} className='text-lg text-blue-500 underline'>Back Home</Link>
    </div>
  );
}

export default WrongURL