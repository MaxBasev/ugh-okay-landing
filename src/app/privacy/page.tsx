"use client";

import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
	return (
		<main>
			<div style={{
				padding: '6rem 1.5rem',
				position: 'relative',
				background: 'var(--bg)',
			}}>
				<div style={{
					maxWidth: '800px',
					margin: '0 auto',
					position: 'relative',
					zIndex: 1,
				}}>
					<h1 style={{
						fontSize: '2.5rem',
						fontWeight: 'bold',
						marginBottom: '1rem',
						color: 'var(--text)',
						textAlign: 'center',
					}}>
						<span className="gradient-text">Privacy Policy</span>
					</h1>

					<p style={{
						color: 'var(--muted)',
						textAlign: 'center',
						fontSize: '1rem',
						marginBottom: '3rem',
					}}>
						Last updated: April 2025
					</p>

					<div className="quote-card" style={{
						padding: '2.5rem',
						marginBottom: '2.5rem',
					}}>
						<p style={{
							fontSize: '1.25rem',
							lineHeight: '1.6',
							color: 'var(--text)',
							marginBottom: '2rem',
						}}>
							Welcome to UghOkay — the app that encourages better decisions without spying on yours.
						</p>

						<div style={{
							background: 'var(--primary-subtle)',
							padding: '1.5rem',
							borderRadius: '0.75rem',
							marginBottom: '2rem',
							border: '1px solid rgba(139, 92, 246, 0.1)',
						}}>
							<p style={{
								fontSize: '1.2rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--primary)',
							}}>
								TL;DR
							</p>
							<ul style={{
								listStyleType: 'none',
								margin: 0,
								padding: 0,
							}}>
								<li style={{
									fontSize: '1.1rem',
									marginBottom: '0.5rem',
									color: 'var(--text)',
								}}>We don&apos;t collect your data.</li>
								<li style={{
									fontSize: '1.1rem',
									marginBottom: '0.5rem',
									color: 'var(--text)',
								}}>We don&apos;t store your data.</li>
								<li style={{
									fontSize: '1.1rem',
									marginBottom: '0.5rem',
									color: 'var(--text)',
								}}>We don&apos;t send your data anywhere.</li>
								<li style={{
									fontSize: '1.1rem',
									color: 'var(--text)',
								}}>Your brain stays your brain.</li>
							</ul>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								1. No Data Collection
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
								marginBottom: '0.5rem',
							}}>
								UghOkay operates entirely offline. All of your added activities, app settings, and preferences stay on your device and never leave it.
							</p>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								There are no servers. No accounts. No tracking.
							</p>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								2. No Analytics
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
								marginBottom: '0.5rem',
							}}>
								We do not use Google Analytics, Firebase, or any other service to monitor your usage.
							</p>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
								marginBottom: '0.5rem',
							}}>
								Yes, that means we have no idea how often you use the app, what buttons you tap, or how long you procrastinate.
							</p>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								We&apos;re cool with that.
							</p>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								3. No Ads, No Trackers
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								We don&apos;t serve ads. We don&apos;t partner with third-party networks. Your attention span is safe here.
							</p>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								4. Third-Party Services
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								We do not use any third-party SDKs or integrations that collect or process personal data.
							</p>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								5. Your Control
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
								marginBottom: '0.5rem',
							}}>
								You can delete all your data by simply uninstalling the app. There&apos;s no backup, no sync, and no cloud.
							</p>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								If that sounds terrifying, UghOkay might not be the app for you.
							</p>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								6. Children&apos;s Privacy
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								UghOkay is not intended for children under the age of 13, and we do not knowingly collect information from anyone. We wouldn&apos;t even know how.
							</p>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								7. Contact
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
								marginBottom: '0.5rem',
							}}>
								Got questions?<br />
								Want to say hi?<br />
								Need help procrastinating productively?
							</p>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--primary)',
								fontWeight: 'bold',
								marginBottom: '0.5rem',
							}}>
								📮 ughokay@maxbasev.com
							</p>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								We&apos;re happy to help, unless we&apos;re also avoiding something.
							</p>
						</div>

						<div style={{
							marginTop: '3rem',
							textAlign: 'center'
						}}>
							<Link href="/"
								className="btn-hover"
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: '0.5rem',
									textDecoration: 'none',
									color: 'var(--secondary)',
									fontWeight: '500',
									padding: '0.5rem 1rem',
									borderRadius: '100px',
									transition: 'all 0.2s ease',
								}}
							>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M19 12H5M12 19l-7-7 7-7" />
								</svg>
								Back to home
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
} 