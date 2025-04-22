import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
	return (
		<main>
			<Header />
			<div className="container mx-auto px-4 py-16">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

					<div className="prose prose-lg max-w-none">
						<p className="mb-4">Last updated: June 20, 2024</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
						<p>
							UghOkay respects your privacy and is committed to protecting your personal data.
							This Privacy Policy explains how we collect, use, and protect your information.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
						<p>
							<strong>We collect very little information.</strong> UghOkay works completely offline
							and does not require an account or login. The app does not collect analytics or track your usage.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
						<p>
							All data is stored locally on your device. We don&apos;t have access to your tasks or usage patterns.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">4. Changes to This Policy</h2>
						<p>
							We may update this policy occasionally. We will notify you of any changes by posting the new
							Privacy Policy on this page.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
						<p>
							If you have any questions about this Privacy Policy, please contact us at info@ughokay.app
						</p>

						<div className="mt-12">
							<Link href="/" className="text-primary hover:underline">← Back to home</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
} 