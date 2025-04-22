import React from 'react'

const Navbar = () => {
  return (
    <div className="">
      <nav className="w-full fixed bottom-6 flex justify-center z-50 px-4">
        <div className="bg-black/40 backdrop-blur-xl px-6 sm:px-12 py-4 rounded-2xl shadow-lg flex flex-wrap justify-center gap-6 sm:gap-10">
          <a href="#overview" className="text-white font-semibold hover:text-purple-300 transition text-sm sm:text-base ">Overview</a>
          <a href="#course" className="text-white font-semibold hover:text-purple-300 transition text-sm sm:text-base">Enroll Course</a>
          <a href="#schedule" className="text-white font-semibold hover:text-purple-300 transition text-sm sm:text-base">Schedule</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar