import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "UghOkay — Stop Procrastinating Without Stress",
	description: "UghOkay helps you stop procrastinating just long enough to do one thing. And that's enough.",
	openGraph: {
		title: "UghOkay — Stop Procrastinating Without Stress",
		description: "UghOkay helps you stop procrastinating just long enough to do one thing. And that's enough.",
		url: "https://ughokay.app",
		siteName: "UghOkay",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/images/UghOkay-brain.png",
				width: 256,
				height: 256,
				alt: "UghOkay App",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "UghOkay — Stop Procrastinating Without Stress",
		description: "UghOkay helps you stop procrastinating just long enough to do one thing. And that's enough.",
		images: ["/images/UghOkay-brain.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
