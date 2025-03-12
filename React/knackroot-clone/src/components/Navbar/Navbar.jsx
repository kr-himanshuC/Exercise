import React from "react";

const Navbar = () => {
  return (
    <div className="h-[80px] flex justify-between mx-auto m-1.5">

      {/* Logo */}
      <div className="flex items-center justify-center my-2">
        <img
          className="h-13 ml-12 "
          src="KnackrootLogo.cec2bba9614d8df0536f.png"
          alt=""
        />
      </div>


       {/* Links */}
      <div className="flex gap-10 justify-center items-center p-2">
        <a className="link text-[var(--primary-cyan)]" href="http://localhost:5173/#">
          Home
        </a>
        <a className="link " href="#">
          Solution <span>&#8964;</span>
        </a>
        <a className="link " href="#">
          Services <span>&#8964;</span>
        </a>
        <a className="link " href="#">
          Industries <span>&#8964;</span>
        </a>
        <a className="link " href="#">
          Testimonials
        </a>
        <a className="link " href="#">
          Company <span>&#x2304;</span>
        </a>
      </div>


      {/* Button */}
      <div className="flex items-center justify-center mr-12">
        <button
          className="button py-3 px-6  bg-blue-cyan text-white font-bold text-[14px] rounded-3xl cursor-pointer transition duration-500 hover:scale-110"
        >
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default Navbar;
