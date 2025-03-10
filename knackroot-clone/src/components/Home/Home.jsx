import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex ">
      <div className="left-side flex justify-center items-center w-[42%] ">
        <h3 className="font-[700] leading-16 text-5xl text-(--primary-blue)">
          Transform your
          <br />
          Blockchain Ideas to
          <br />
          <span class="text-(--primary-cyan)"> Business </span>
        </h3>
      </div>

      <div className="flex justify-center items-center wauto">
        <img
          src="Group.2ce573c6050ebea3dda374e1c987f74f.svg"
          alt="image"
          className="w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
};

export default Home;
