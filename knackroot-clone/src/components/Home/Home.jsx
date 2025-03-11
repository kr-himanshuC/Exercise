import React from "react";

const Home = () => {
  return (
    <div className="h-[calc(100vh-80px)] w-[100%] flex ">
      {/* Left Side */}
      <div className="left-side mx-auto flex flex-col justify-center items-center w-[44%] relative">

        

        <div className="relative">
        <div className="absolute bg-pink-400 w-[46px] h-[46px] opacity-10 rounded-xl top-[-200px] left-[-15px] rotate-20"></div>

        <div className="absolute bg-purple-400 w-[28px] h-[28px] opacity-10 rounded-[5px] bottom-[-200px] left-[-15px] rotate-10"></div>


          <h3 className="font-[700]  leading-[140%] text-[2.5rem] text-(--primary-blue)">
            Transform your
            <br />
            Blockchain Ideas to
            <br />
            <span class="text-(--primary-cyan)"> Business &#9757;</span>
          </h3>

          <h4 className="text-[var(--secondary-gray)] my-5 ">
            Looking for experts who can help you construct your business <br />
            idea into a real blockchain solution? We can help you !
          </h4>

          <div className="flex items-center">
            <button className="button flex py-3 px-6  bg-blue-cyan text-white font-bold text-[14px] rounded-3xl cursor-pointer transition duration-500 hover:scale-110">
              <span>Let's Start &nbsp;&nbsp;</span>
              <div className="">
                <i class="fa-solid fa-circle-right"></i>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex justify-center items-center w-[56%]">
        <img
          src="Group.2ce573c6050ebea3dda374e1c987f74f.svg"
          alt="image"
          onLoad={() => {document.getElementById("image").classList.add("scale-100")}}
          id="image"
          className="image w-[100%] transition-transform duration-1000 scale-0"
        />
      </div>
    </div>
  );
};

export default Home;
