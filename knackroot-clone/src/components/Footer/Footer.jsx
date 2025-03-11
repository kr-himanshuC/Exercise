import React from "react";

const Footer = () => {
  return (
    <div className="bg-(--primary-blue) pt-20 flex flex-col items-center justify-center">
      {/* Logo */}
      <div
        className="
      mb-10"
      >
        <img src="image copy.png" alt="" />
      </div>


      {/* section */}
      <div className="w-[100%] text-white flex">
        
        {/* left */}
        <div className=" flex flex-col mt-7 justify-start items-start w-[55%] mx-auto ">
          <div className="flex flex-col gap-7 mx-auto">
            <div className="flex gap-4">
              <div className="flex justify-center items-center">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="text-[15px]">
                Connekt, 13th Floor, Gala <br />
                Empire, Opp. T.V. Tower, Drive <br /> In Rd, Ahmedabad, Gujarat{" "}
                <br />
                380052
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex justify-center items-center">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="text-[15px]">+91-9898777397</div>
            </div>

            <div className="flex gap-4">
              <div className="flex justify-center items-center">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="text-[15px]">info@knackroot.com</div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <div className="text-[20px] font-[600] ">Social</div>
              <div className="flex gap-4">
                <i class="fa-brands fa-square-twitter fa-lg cursor-pointer"></i>
                <i class="fa-brands fa-square-facebook fa-lg cursor-pointer"></i>
                <i class="fa-brands fa-square-instagram fa-lg cursor-pointer"></i>
                <i class="fa-brands fa-square-github fa-lg cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-[45%] flex flex-col gap-10">
          <div className="flex gap-5">
            <div className="">
              <h3 className="text-[20px] font-[600] mb-4">Links</h3>

              <div className="flex flex-col gap-2">
                <a href="#" className="a-link w-25">
                  Home
                </a>
                <a href="#" className="a-link w-25">
                  About
                </a>
                <a href="#" className="a-link w-25">
                  Blog
                </a>
                <a href="#" className="a-link w-25">
                  Contact
                </a>
                <a href="#" className="a-link w-25">
                  Career
                </a>
              </div>
            </div>

            <div className="">
              <h3 className="text-[20px] font-[600] mb-4">Service</h3>

              <div className="grid grid-cols-2 gap-x-10 gap-4">
                <a href="#" className="a-link">
                  Smart Contract Development
                </a>
                <a href="#" className="a-link">
                  Private Blockchain Development
                </a>
                <a href="#" className="a-link">
                  Public Blockchain Development
                </a>
                <a href="#" className="a-link">
                  NFT Marketplace Development
                </a>
                <a href="#" className="a-link">
                  Web3 FullStack Development
                </a>
                <a href="#" className="a-link">
                  Crypto Exchange Development
                </a>
                <a href="#" className="a-link">
                  Mining Software
                </a>
                <a href="#" className="a-link">
                  DeFi Development
                </a>
                <a href="#" className="a-link">
                  Web2 to Web3 Migration
                </a>
                <a href="#" className="a-link">
                  Trading Bots Development
                </a>
                <a href="#" className="a-link">
                  STO
                </a>
                <a href="#" className="a-link">
                  Crypto Wallets Development
                </a>
              </div>
            </div>
          </div>

          {/* Excellent */}
          <div className="flex gap-26 h-40">
            <div className="flex flex-col mt-4">
              <span className="text-[16px] font-[600] mb-4">
                EXCELLENT &#11088; &#11088; &#11088; &#11088; &#11088;
              </span>

              <div className="flex gap-2">
                <div className="text-[10px] font-[600]">
                  <span className="text-[18px]">5</span> out of <span className="text-[18px]">5</span> on <span className="text-[18px]">7</span> reviews
                </div>
                
                <div className="flex items-center justify-end">
                  <img src="image copy 2.png" alt="" className="h-4 "/>
                  </div>
              </div>
            </div>


            <div className="">
                <img src="image copy 3.png" alt="" className="h-28" />
            </div>
          </div>
        </div>
      </div>

      {/* copyRight section */}
      <div className="w-full flex flex-col items-center mx-auto  text-white">
        <hr className="w-[90%]"/>
        <div className="flex justify-center items-center m-5">
            <span className="text-[15px]">2025 © All rights reserved by Knackroot</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
