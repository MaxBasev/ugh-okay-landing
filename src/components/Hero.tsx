"use client";

import Link from 'next/link';

export default function Hero() {
	return (
		<section style={{
			padding: '4rem 0 6rem',
			textAlign: 'center',
			background: 'linear-gradient(to bottom, #FFFFFF, #f9fafb)'
		}}>
			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				padding: '0 1rem'
			}}>
				<h1 style={{
					fontSize: 'clamp(2.25rem, 5vw, 3rem)',
					fontWeight: 'bold',
					marginBottom: '1rem',
					color: '#222222'
				}}>
					Before you scroll again, tap this.
				</h1>
				<p style={{
					fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
					color: '#666666',
					marginBottom: '2.5rem',
					maxWidth: '42rem',
					margin: '0 auto 2.5rem'
				}}>
					UghOkay helps you stop procrastinating just long enough to do one thing. And that&apos;s enough.
				</p>
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1rem'
				}}>
					<Link
						href="#"
						style={{
							padding: '0.75rem 1.5rem',
							backgroundColor: '#9B00FF',
							color: '#FFFFFF',
							borderRadius: '0.375rem',
							fontWeight: '500',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '0.5rem',
							textDecoration: 'none',
							boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
							maxWidth: '250px',
							width: '100%'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.opacity = '0.9';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.opacity = '1';
						}}
					>
						<span>App Store</span>
						<span style={{ fontSize: '0.75rem', opacity: '0.75' }}>(Coming soon)</span>
					</Link>
					<Link
						href="#"
						style={{
							padding: '0.75rem 1.5rem',
							backgroundColor: '#FF4FDB',
							color: '#FFFFFF',
							borderRadius: '0.375rem',
							fontWeight: '500',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '0.5rem',
							textDecoration: 'none',
							boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
							maxWidth: '250px',
							width: '100%'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.opacity = '0.9';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.opacity = '1';
						}}
					>
						<span>Google Play</span>
						<span style={{ fontSize: '0.75rem', opacity: '0.75' }}>(Coming soon)</span>
					</Link>
				</div>
			</div>
		</section>
	);
} 