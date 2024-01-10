import { Inter } from "next/font/google";
import React from "react";

interface MainProps {
	children: React.ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

const Main = ({ children }: MainProps) => {
	return <main className={inter.className}>{children}</main>;
};

export default Main;
