import React from "react";
import { Inter } from "next/font/google";

interface MainProps {
	children: React.ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

const Main = ({ children }: MainProps) => {
	return <main className={inter.className}>{children}</main>;
};

export default Main;
