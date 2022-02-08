import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
