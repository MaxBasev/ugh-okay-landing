"use client";

import Link from 'next/link';

export default function Footer() {
	const socialLinks = [
		{ name: 'Blog', href: '#' },
		{ name: 'GitHub', href: '#' },
		{ name: 'Twitter', href: '#' },
		{ name: 'Email', href: 'mailto:info@ughokay.app' },
	];

	return (
		<footer style={{
			padding: '3rem 0',
			backgroundColor: '#f9fafb',
			borderTop: '1px solid #e5e7eb'
		}}>
			<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
				<div style={{ maxWidth: '1024px', margin: '0 auto' }}>
					<div style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
						gap: '2rem'
					}}>
						<div>
							<Link href="/" style={{
								fontSize: '1.25rem',
								fontWeight: 'bold',
								color: '#222222',
								textDecoration: 'none'
							}}>
								UghOkay
							</Link>
							<p style={{
								marginTop: '1rem',
								color: '#666666'
							}}>
								© 2024 Max Basev / SkazOff
							</p>
						</div>

						<div>
							<h3 style={{
								fontSize: '1.125rem',
								fontWeight: '500',
								marginBottom: '1rem',
								color: '#222222'
							}}>Links</h3>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
								{socialLinks.map((link) => (
									<li key={link.name} style={{ marginBottom: '0.5rem' }}>
										<Link href={link.href} style={{
											color: '#666666',
											textDecoration: 'none'
										}}
											onMouseEnter={(e) => {
												e.currentTarget.style.color = '#9B00FF';
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.color = '#666666';
											}}
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 style={{
								fontSize: '1.125rem',
								fontWeight: '500',
								marginBottom: '1rem',
								color: '#222222'
							}}>Legal</h3>
							<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
								<li style={{ marginBottom: '0.5rem' }}>
									<Link href="/privacy" style={{
										color: '#666666',
										textDecoration: 'none'
									}}
										onMouseEnter={(e) => {
											e.currentTarget.style.color = '#9B00FF';
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.color = '#666666';
										}}
									>
										Privacy Policy
									</Link>
								</li>
								<li style={{ marginBottom: '0.5rem' }}>
									<Link href="/terms" style={{
										color: '#666666',
										textDecoration: 'none'
									}}
										onMouseEnter={(e) => {
											e.currentTarget.style.color = '#9B00FF';
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.color = '#666666';
										}}
									>
										Terms of Service
									</Link>
								</li>
							</ul>

							<div style={{ marginTop: '1.5rem' }}>
								<h3 style={{
									fontSize: '1.125rem',
									fontWeight: '500',
									marginBottom: '0.5rem',
									color: '#222222'
								}}>Language</h3>
								<select
									style={{
										width: '100%',
										padding: '0.5rem',
										border: '1px solid #d1d5db',
										borderRadius: '0.375rem',
										backgroundColor: '#FFFFFF',
										color: '#222222'
									}}
									defaultValue="en"
								>
									<option value="en">English</option>
									<option value="ru">Русский</option>
								</select>
							</div>
						</div>
					</div>

					<div style={{
						marginTop: '3rem',
						paddingTop: '2rem',
						borderTop: '1px solid #e5e7eb',
						textAlign: 'center',
						color: '#666666'
					}}>
						<p>Procrastinators unite. Just... one tiny tap at a time.</p>
					</div>
				</div>
			</div>
		</footer>
	);
} 