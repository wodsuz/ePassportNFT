import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = ({
  title,
  content,
  children,
}: {
  title: string;
  content: string;
  children: any;
}) => {
  return (
    <>
      <Header title={title} content={content} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
