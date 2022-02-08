import React from "react";

const Cards: React.FC = () => {
  return (
    <div className="flex justify-evenly items-center container mx-auto py-16">
      <div className="flex items-start">
        <div className="flex flex-col">
          <h1 className="font-[800] font-work-sans text-[30px]">895781</h1>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Block <br /> height
          </p>
        </div>
        <img src="/img/building.svg" alt="building" className="mt-3 ml-4" />
      </div>
      <div className="flex items-start">
        <div className="flex flex-col">
          <h1 className="font-[800] font-work-sans text-[30px]">100</h1>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Latest <br /> validator
          </p>
        </div>
        <img src="/img/slider.svg" className="mt-4" alt="slider" />
      </div>
      <div className="flex items-start">
        <div className="flex flex-col">
          <h1 className="font-[800] font-work-sans text-[30px]">6</h1>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Block <br /> time
          </p>
        </div>
        {/* Clock */}
        <img src="/img/clock.svg" alt="clock" className="mt-3 ml-3" />
      </div>
      <div className="flex items-start">
        <div className="flex flex-col ">
          <h1 className="font-[800] font-work-sans text-[30px]">11.82</h1>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Average <br /> validator free
          </p>
        </div>
        <img src="/img/dollar.svg" className="mt-3" alt="" />
      </div>
      <div className="flex items-start">
        <div className="flex flex-col">
          <h1 className="font-[800] font-work-sans text-[30px]">198</h1>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Active <br /> validators
          </p>
        </div>
        {/* Clock */}
        <img src="/img/signal.svg" alt="clock" className="mt-3" />
      </div>
    </div>
  );
};

export default Cards;
