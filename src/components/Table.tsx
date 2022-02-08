import React, { useState, useEffect } from "react";
import cn from "classnames";

interface ITableData {
  id: string | number;
  hasGreenBadge?: boolean;
  hasRedBadge?: boolean;
  transactionID: string;
  blockNumber: string;
  amountIDEP: string;
  feeIDEP: string | React.ReactElement;
  time: string;
}

interface ITableHeader {
  headingOne: string;
  headingTwo: string;
  headingThree: string;
  headingFour: string;
  headingFive: string;
}

type Props = {
  tableData: ITableData[];
  tableHeading: string;
  tableHeader: ITableHeader[];
};

const Table: React.FC<Props> = ({ tableData, tableHeading, tableHeader }) => {
  const renderTableHeader = tableHeader.map(
    (item: ITableHeader, index: number) => {
      return (
        <React.Fragment key={index}>
          <th
            className={cn(
              "font-work-sans text-black font-medium text-left pl-6 w-[35%]"
            )}
          >
            {item.headingOne}
          </th>
          <th
            className={cn(
              "font-work-sans text-black font-medium text-left w-[20%]"
            )}
          >
            {item.headingTwo}
          </th>
          <th
            className={cn(
              "font-work-sans text-black font-medium text-left w-[20%]"
            )}
          >
            {item.headingThree}
          </th>
          <th
            className={cn(
              "font-work-sans text-black font-medium text-left w-[15%]"
            )}
          >
            {item.headingFour}
          </th>
          <th
            className={cn(
              "font-work-sans text-black font-medium text-right w-[10%]"
            )}
          >
            {item.headingFive}
          </th>
        </React.Fragment>
      );
    }
  );
  const renderTableData = tableData.map((item: ITableData) => {
    return (
      <React.Fragment key={item.id}>
        <tr className="flex items-center mt-5 border-b-[1.2px] border-gray-300 pb-5 w-full h-16">
          <td className={cn("flex items-center w-[35%]")}>
            {item.hasGreenBadge && <img src="/img/greentick.svg" alt="" />}
            {item.hasRedBadge && <img src="/img/redcross.svg" alt="" />}
            {item.hasGreenBadge && (
              <span className="bg-green_3 rounded-[4.78px] px-3 py-0.5 text-green_-1 font-bold mx-2">
                Delegate
              </span>
            )}
            {item.hasRedBadge && (
              <span className="bg-red_3 rounded-[4.78px] px-3 py-0.5 text-red_-1 font-bold mx-2">
                Delegate
              </span>
            )}
            <p
              className={cn("font-work-sans text-blue_-1 mt-1 truncate", {
                "pl-6": !item.hasGreenBadge && !item.hasRedBadge,
              })}
            >
              {item.transactionID}
            </p>
          </td>
          <td className={cn("text-blue_-1 w-[20%]")}>{item.blockNumber}</td>
          <td className={cn("text-[#44476A] w-[20%]")}>{item.amountIDEP}</td>
          <td className={cn("text-[#44476A] w-[15%]")}>{item.feeIDEP}</td>
          <td className={cn("text-[#44476A] w-[10%] text-right")}>
            {item.time}
          </td>
        </tr>
      </React.Fragment>
    );
  });

  return (
    <div className="mt-20">
      <div className="flex items-center">
        <h1 className="text-[#31344B] font-semibold font-work-sans text-[27.93px]">
          Latest {tableHeading}
        </h1>
        <div className="flex ml-3 -mb-2">
          <button className="flex items-center">
            <p className="font-bold font-nunito text-blue_-1 text-[16.29px]">
              View all
            </p>
            <img
              src="/img/chevronright.svg"
              alt="chevronright"
              className="ml-2"
            />
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead className="mt-10 flex border-b-[1.2px] border-gray-300 pb-5 w-full items-center">
          {renderTableHeader}
        </thead>
        <tbody className="">{renderTableData}</tbody>
      </table>
    </div>
  );
};

export default Table;
