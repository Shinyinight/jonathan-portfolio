import { Abel, Jost } from "next/font/google";
import React from "react";

interface MainProps {
  children: React.ReactNode;
}

const abel = Jost({ weight: "400", subsets: ["latin"] });

const Main = ({ children }: MainProps) => {
  return <main className={abel.className}>{children}</main>
};

export default Main;
