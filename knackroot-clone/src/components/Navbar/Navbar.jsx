import React from "react";

const Navbar = () => {
  return (
    <div className="h-19 flex justify-between mx-auto m-1.5">
      <div className="flex items-center justify-center my-2">
        <img
          className="h-13 ml-12 "
          src="KnackrootLogo.cec2bba9614d8df0536f.png"
          alt=""
        />
      </div>

      <div className="flex gap-10 justify-center items-center p-2">
        <a className="link text-[var(--primary-cyan)]" href="#">
          Home
        </a>
        <a className="link text-[var(--primary-blue)]" href="#">
          Solution <span>&#8964;</span>
        </a>
        <a className="link text-[var(--primary-blue)]" href="#">
          Services <span>&#8964;</span>
        </a>
        <a className="link text-[var(--primary-blue)]" href="#">
          Industries <span>&#8964;</span>
        </a>
        <a className="link text-[var(--primary-blue)]" href="#">
          Testimonials
        </a>
        <a className="link text-[var(--primary-blue)]" href="#">
          Company <span>&#x2304;</span>
        </a>
      </div>

      <div className="flex items-center justify-center mr-12">
        <button
          style={{ background: "var(--blue-cyan)" }}
          className="button py-3 px-6  bg-(--blue-cyan) text-white font-bold text-[14px] rounded-3xl"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
