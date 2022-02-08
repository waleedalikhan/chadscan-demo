import React from "react";
import ChevronDown from "./ChevronDown";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="h-[117.38px] fixed top-0 w-full bg-white right-0 left-0 z-50 flex items-center">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="" className="w-56" />
          </div>
          {/* Navlinks */}
          <ul className="flex space-x-[45px]">
            <li>
              <a href="#" className="flex items-center">
                <p className="font-[500] font-work-sans text-[22px] mr-3">
                  Explorer
                </p>
                <ChevronDown />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <p className="font-[500] font-work-sans text-[22px] mr-3">
                  Wallets
                </p>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <p className="font-[500] font-work-sans text-[22px] mr-3">
                  Validators
                </p>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <p className="font-[500] font-work-sans text-[22px] mr-3">
                  Voting
                </p>
              </a>
            </li>
          </ul>
          <div className="flex">
            <ul className="flex items-center space-x-10">
              <li>
                <a href="#" className="flex items-center">
                  <p className="font-[500] font-work-sans mr-2 text-[19.58px]">
                    USD
                  </p>
                  <ChevronDown />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <p className="font-[500] font-work-sans mr-2 text-[19.58px]">
                    English
                  </p>
                  <ChevronDown />
                </a>
              </li>
              <li>
                <button className="outline-none focus:outline-none">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2812 11.498C19.1238 13.2002 18.485 14.8224 17.4394 16.1748C16.3938 17.5272 14.9846 18.5538 13.3769 19.1345C11.7691 19.7153 10.0291 19.8261 8.36065 19.4541C6.69217 19.0821 5.16415 18.2426 3.95538 17.0338C2.74661 15.825 1.90709 14.297 1.53506 12.6285C1.16303 10.96 1.27387 9.22009 1.85461 7.6123C2.43536 6.00452 3.46198 4.59537 4.81436 3.54976C6.16675 2.50415 7.78895 1.86531 9.49115 1.70801C8.49456 3.05628 8.015 4.71746 8.13968 6.38942C8.26437 8.06139 8.98501 9.63307 10.1706 10.8186C11.3561 12.0041 12.9278 12.7248 14.5997 12.8495C16.2717 12.9742 17.9329 12.4946 19.2812 11.498Z"
                      stroke="#141522"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
