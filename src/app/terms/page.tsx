import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsOfService() {
	return (
		<main>
			<div className="container mx-auto px-4 py-16">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

					<div className="prose prose-lg max-w-none">
						<p className="mb-4">Last updated: June 20, 2024</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
						<p>
							By using UghOkay, you agree to these Terms of Service.
							If you don&apos;t agree with these terms, please don&apos;t use the app.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
						<p>
							UghOkay is a productivity app that helps users manage procrastination by suggesting
							one task at a time from their own list. The app works offline and does not require an account.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">3. User Conduct</h2>
						<p>
							Users are responsible for all content they add to the app. We don&apos;t monitor or access this data,
							which is stored locally on your device.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
						<p>
							UghOkay is provided &quot;as is&quot; without warranties of any kind, either express or implied.
							We are not liable for any damages arising from the use of the app.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to Terms</h2>
						<p>
							We may update these terms occasionally. Please review them periodically.
							Continued use of the app after changes constitutes acceptance of the new terms.
						</p>

						<h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
						<p>
							If you have any questions about these Terms, please contact us at info@ughokay.app
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