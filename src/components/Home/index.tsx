import React from "react";
import Cards from "@/components/Cards";
import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table";
import ChadscanMiniLogo from "@/components/ChadscanMiniLogo";

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

const Home: React.FC = () => {
  const transactionsHeader: ITableHeader[] = [
    {
      headingOne: "Transactions",
      headingTwo: "Block",
      headingThree: "Amount (IDEP)",
      headingFour: "Fee (IDEP)",
      headingFive: "Time",
    },
  ];
  const blocksHeader: ITableHeader[] = [
    {
      headingOne: "Transactions",
      headingTwo: "Block",
      headingThree: "Amount",
      headingFour: "By",
      headingFive: "Time",
    },
  ];

  const transactions: ITableData[] = [
    {
      id: 1,
      hasGreenBadge: true,
      hasRedBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "157058",
      amountIDEP: "0.001",
      feeIDEP: "0.25",
      time: "1s",
    },
    {
      id: 2,
      hasGreenBadge: false,
      hasRedBadge: true,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "112358",
      amountIDEP: "0.021",
      feeIDEP: "0.41",
      time: "30s",
    },
    {
      id: 3,
      hasGreenBadge: true,
      hasRedBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "157058",
      amountIDEP: "0.001",
      feeIDEP: "0.25",
      time: "1s",
    },
    {
      id: 4,
      hasGreenBadge: true,
      hasRedBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "112358",
      amountIDEP: "0.021",
      feeIDEP: "0.41",
      time: "30s",
    },
    {
      id: 5,
      hasGreenBadge: true,
      hasRedBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "157058",
      amountIDEP: "0.001",
      feeIDEP: "0.25",
      time: "1s",
    },
    {
      id: 6,
      hasGreenBadge: true,
      hasRedBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "112358",
      amountIDEP: "0.021",
      feeIDEP: "0.41",
      time: "30s",
    },
  ];

  const blocks: ITableData[] = [
    {
      id: 1,
      hasGreenBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "157058",
      amountIDEP: "3 Txs",
      feeIDEP: <ChadscanMiniLogo />,
      time: "1s",
    },
    {
      id: 2,
      hasRedBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "112358",
      amountIDEP: "3 Txs",
      feeIDEP: <ChadscanMiniLogo />,
      time: "30s",
    },
    {
      id: 3,
      hasGreenBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "157058",
      amountIDEP: "3 Txs",
      feeIDEP: <ChadscanMiniLogo />,
      time: "1s",
    },
    {
      id: 4,
      hasGreenBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "112358",
      amountIDEP: "3 Txs",
      feeIDEP: <ChadscanMiniLogo />,
      time: "30s",
    },
    {
      id: 5,
      hasGreenBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "157058",
      amountIDEP: "3 Txs",
      feeIDEP: <ChadscanMiniLogo />,
      time: "1s",
    },
    {
      id: 6,
      hasGreenBadge: false,
      transactionID: "D63A0D5E99723AD874...",
      blockNumber: "112358",
      amountIDEP: "3 Txs",
      feeIDEP: <ChadscanMiniLogo />,
      time: "30s",
    },
  ];

  return (
    <>
      <div className="pb-20">
        <Navbar />
        <HeroComponent />
        <Cards />
        <div className="flex container mx-auto space-x-16">
          <div className="w-1/2">
            <Table
              tableData={transactions}
              tableHeader={transactionsHeader}
              tableHeading="Transactions"
            />
          </div>
          <div className="w-1/2">
            <Table
              tableData={blocks}
              tableHeader={blocksHeader}
              tableHeading="Blocks"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
