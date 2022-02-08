import React from "react";

const HeroComponent: React.FC = () => {
  return (
    <>
      <div className="flex justify-center hero-bg w-full h-[70vh] pt-10">
        <div className="flex flex-col">
          <h1 className="text-black  text-[77.97px] font-bold leading-[96.29px]">
            ChadScan <br />
            Block explorer
          </h1>
          <p className="text-[23px] text-black font-[500] font-work-sans">
            ChadScan is a native block <br /> explorer for the IDEP Network
          </p>
          <input
            type="text"
            placeholder="TxHash | Address | Block | Token | Validator"
            className="placeholder:font-[400] placeholder:text-xl placeholder:font-work-sans placeholder:grey_-1 rounded-[9px] bg-white p-4 mt-3 input-shadow font-work-sans text-xl"
          />
          <button className="flex items-center justify-center text-white bg-[#141522] rounded-[9px] mt-4 shadow-[0px_17px_26px_-6px_#141522] w-[181.74px] h-[57.36px] space-x-2">
            <svg
              className="mr-2"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5288 7.02686L16.4775 7.34308C16.5973 6.98375 16.5038 6.58758 16.2359 6.31975C15.9681 6.05192 15.5719 5.95839 15.2126 6.07817L15.5288 7.02686ZM13.4088 13.3869L13.7251 14.3355C14.0237 14.236 14.258 14.0017 14.3575 13.7031L13.4088 13.3869ZM7.04883 15.5069L6.10014 15.1906C5.98037 15.55 6.07389 15.9461 6.34172 16.214C6.60955 16.4818 7.00572 16.5753 7.36506 16.4555L7.04883 15.5069ZM9.16883 9.14686L8.8526 8.19817C8.554 8.29771 8.31968 8.53202 8.22014 8.83063L9.16883 9.14686ZM20.2891 11.2671C20.2891 16.2377 16.2596 20.2671 11.2891 20.2671V22.2671C17.3642 22.2671 22.2891 17.3422 22.2891 11.2671H20.2891ZM11.2891 20.2671C6.3185 20.2671 2.28906 16.2377 2.28906 11.2671H0.289062C0.289062 17.3422 5.21393 22.2671 11.2891 22.2671V20.2671ZM2.28906 11.2671C2.28906 6.29653 6.3185 2.26709 11.2891 2.26709V0.26709C5.21393 0.26709 0.289062 5.19196 0.289062 11.2671H2.28906ZM11.2891 2.26709C16.2596 2.26709 20.2891 6.29653 20.2891 11.2671H22.2891C22.2891 5.19196 17.3642 0.26709 11.2891 0.26709V2.26709ZM14.5801 6.71063L12.4601 13.0706L14.3575 13.7031L16.4775 7.34308L14.5801 6.71063ZM13.0926 12.4382L6.7326 14.5582L7.36506 16.4555L13.7251 14.3355L13.0926 12.4382ZM7.99751 15.8231L10.1175 9.46308L8.22014 8.83063L6.10014 15.1906L7.99751 15.8231ZM9.48506 10.0955L15.8451 7.97554L15.2126 6.07817L8.8526 8.19817L9.48506 10.0955Z"
                fill="#FCFCFC"
              />
            </svg>
            <p className="font-work-sans font-[300] text-[22.31px]">explore</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default HeroComponent;
