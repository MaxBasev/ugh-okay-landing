import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "UghOkay — Stop scrolling, start doing",
	description: "Before you scroll again, tap this. UghOkay helps your brain pick a task — and escape the doomscroll trap.",
	keywords: "productivity, minimal app, anti-procrastination, offline app, habit app",
	authors: [{ name: "Maxim Basev" }],
	themeColor: "#8A2BE2",
	icons: {
		icon: "/UghOkay-brain.ico",
		apple: "/UghOkay-brain.ico",
	},
	openGraph: {
		type: "website",
		url: "https://ughokay.maxbasev.com",
		title: "UghOkay — Stop scrolling, start doing",
		description: "Before you scroll again, tap this. UghOkay helps your brain pick a task — and escape the doomscroll trap.",
		siteName: "UghOkay",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "UghOkay App",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "UghOkay — Stop scrolling, start doing",
		description: "Before you scroll again, tap this. UghOkay helps your brain pick a task — and escape the doomscroll trap.",
		images: ["/og-image.png"],
	},
	metadataBase: new URL('https://ughokay.maxbasev.com'),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SmoothScroll />
				{children}
			</body>
		</html>
	);
}
