"use client";

import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsOfService() {
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
						<span className="gradient-text">Terms of Service</span>
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
							Welcome to UghOkay — the app that tries to help you do stuff instead of doomscrolling. By using this app, you agree to the following terms. They&apos;re not scary. Promise.
						</p>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								1. Use at Your Own Risk
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
								marginBottom: '0.5rem',
							}}>
								This app is designed to give you gentle nudges toward activities you actually care about. It does not replace professional advice, therapy, or your mom&apos;s voice in your head telling you to get your life together.
							</p>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
								marginBottom: '0.5rem',
							}}>
								We&apos;re not responsible if:
							</p>
							<ul style={{
								listStyleType: 'none',
								margin: '0.5rem 0 0 1rem',
								padding: 0,
							}}>
								<li style={{
									fontSize: '1.1rem',
									marginBottom: '0.5rem',
									color: 'var(--muted)',
									position: 'relative',
								}}>
									<span style={{
										position: 'absolute',
										left: '-1rem',
										color: 'var(--secondary)',
									}}>•</span>
									You ignore all suggestions and scroll anyway
								</li>
								<li style={{
									fontSize: '1.1rem',
									marginBottom: '0.5rem',
									color: 'var(--muted)',
									position: 'relative',
								}}>
									<span style={{
										position: 'absolute',
										left: '-1rem',
										color: 'var(--secondary)',
									}}>•</span>
									You take a walk and discover the meaning of life
								</li>
								<li style={{
									fontSize: '1.1rem',
									color: 'var(--muted)',
									position: 'relative',
								}}>
									<span style={{
										position: 'absolute',
										left: '-1rem',
										color: 'var(--secondary)',
									}}>•</span>
									You add &quot;Eat three cakes&quot; as a task and follow through
								</li>
							</ul>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								2. No Account, No Sync, No Cloud
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								Everything you add stays on your device. If you delete the app, all your data goes with it. No backup. No restoration. Just pure commitment to minimalism.
							</p>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								3. No Liability
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
								marginBottom: '0.5rem',
							}}>
								We try our best to make UghOkay helpful and bug-free. But we&apos;re not liable for any:
							</p>
							<ul style={{
								listStyleType: 'none',
								margin: '0.5rem 0 0 1rem',
								padding: 0,
							}}>
								<li style={{
									fontSize: '1.1rem',
									marginBottom: '0.5rem',
									color: 'var(--muted)',
									position: 'relative',
								}}>
									<span style={{
										position: 'absolute',
										left: '-1rem',
										color: 'var(--secondary)',
									}}>•</span>
									Productivity spirals
								</li>
								<li style={{
									fontSize: '1.1rem',
									marginBottom: '0.5rem',
									color: 'var(--muted)',
									position: 'relative',
								}}>
									<span style={{
										position: 'absolute',
										left: '-1rem',
										color: 'var(--secondary)',
									}}>•</span>
									Existential breakthroughs
								</li>
								<li style={{
									fontSize: '1.1rem',
									color: 'var(--muted)',
									position: 'relative',
								}}>
									<span style={{
										position: 'absolute',
										left: '-1rem',
										color: 'var(--secondary)',
									}}>•</span>
									Weird looks from people when the app tells you to talk to a plant
								</li>
							</ul>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								4. Updates
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								We may update the app or these Terms in the future. If we do, we&apos;ll try to make it obvious. But honestly, there won&apos;t be any shady changes — it&apos;s not that kind of app.
							</p>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								5. Respect the App
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
							}}>
								Don&apos;t reverse-engineer it, resell it, or use it for anything illegal or creepy. Just… don&apos;t.
							</p>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<h2 style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
								marginBottom: '1rem',
								color: 'var(--text)',
							}}>
								6. Contact
							</h2>
							<p style={{
								fontSize: '1.1rem',
								lineHeight: '1.6',
								color: 'var(--muted)',
								marginBottom: '0.5rem',
							}}>
								Have questions, suggestions, or want to tell us what the app told you to do?<br />
								Reach out:
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