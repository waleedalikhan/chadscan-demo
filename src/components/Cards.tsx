import React from "react";

const Cards: React.FC = () => {
  return (
    <div className="flex justify-evenly items-center container mx-auto -mt-48">
      <div className="flex items-start">
        <div className="flex flex-col">
          <div className="flex space-x-4">
            <h1 className="font-[800] font-work-sans text-[30px]">895781</h1>
            <img src="/img/building.svg" alt="building" />
          </div>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Block <br /> height
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex flex-col">
          <div className="flex space-x-4">
            <h1 className="font-[800] font-work-sans text-[30px]">100</h1>
            <img src="/img/slider.svg" alt="slider" />
          </div>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Latest <br /> validator
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex flex-col">
          <div className="flex space-x-4">
            <h1 className="font-[800] font-work-sans text-[30px]">6</h1>
            <img src="/img/clock.svg" alt="clock" />
          </div>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Block <br /> time
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex flex-col ">
          <div className="flex space-x-4">
            <h1 className="font-[800] font-work-sans text-[30px]">11.82</h1>
            <img src="/img/dollar.svg" alt="" />
          </div>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Average <br /> validator free
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex flex-col">
          <div className="flex space-x-4">
            <h1 className="font-[800] font-work-sans text-[30px]">198</h1>
            <img src="/img/signal.svg" alt="clock" />
          </div>
          <p className="font-500 text-[20px] text-black_1 font-work-sans">
            Active <br /> validators
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
