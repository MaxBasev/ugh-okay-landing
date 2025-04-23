"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<footer style={{
			padding: '8rem 1.5rem 5rem',
			color: 'var(--text)',
			position: 'relative',
			overflow: 'hidden',
			background: 'var(--bg)'
		}}>
			<div className={`${isLoaded ? 'animate-in' : ''}`} style={{
				maxWidth: '1200px',
				margin: '0 auto',
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
				gap: '3rem',
				position: 'relative',
				zIndex: 1,
				opacity: isLoaded ? 1 : 0,
				transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
				transition: 'opacity 0.8s ease, transform 0.8s ease',
			}}>
				{/* Branding and Tagline */}
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1.5rem'
				}}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
						<Image
							src="/images/UghOkay-brain.png"
							alt="UghOkay Mini Logo"
							width={45}
							height={45}
							style={{ filter: 'brightness(1.1)' }}
							className="float"
						/>
						<span style={{
							fontSize: '1.75rem',
							fontWeight: 'bold',
							background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text'
						}}>
							UghOkay
						</span>
					</div>

					<p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--muted)', marginTop: '0.5rem' }}>
						The procrastination app that finally understands you don&apos;t want to be yelled at about productivity.
					</p>

					<div style={{
						display: 'flex',
						gap: '1rem',
						marginTop: '1.5rem',
						flexWrap: 'wrap'
					}}>
						<Link
							href="#"
							className="btn-hover"
							style={{
								display: 'inline-block',
								transition: 'all 0.2s ease',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-3px)';
								e.currentTarget.style.opacity = '0.9';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.opacity = '1';
							}}
						>
							<Image
								src="/images/Download-on-the-App-Store-1.svg"
								alt="Download on the App Store"
								width={140}
								height={42}
								style={{
									filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))'
								}}
							/>
						</Link>

						<Link
							href="#"
							className="btn-hover"
							style={{
								display: 'inline-block',
								transition: 'all 0.2s ease',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-3px)';
								e.currentTarget.style.opacity = '0.9';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.opacity = '1';
							}}
						>
							<Image
								src="/images/GetItOnGooglePlay_Badge_Web_color_English.png"
								alt="Get it on Google Play"
								width={140}
								height={42}
								style={{
									filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))'
								}}
							/>
						</Link>
					</div>

					<p style={{
						fontSize: '0.95rem',
						color: 'rgba(255, 255, 255, 0.3)',
						marginTop: '1rem'
					}}>
						© {new Date().getFullYear()} UghOkay. All rights, I guess.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 style={{
						fontSize: '1.25rem',
						fontWeight: '600',
						marginBottom: '1.5rem',
						color: 'var(--text)'
					}}>Quick Links</h3>

					<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						{[
							{ text: 'Home', href: '/' },
							{ text: 'Features', href: '/#why-it-works' },
							{ text: 'Screenshots', href: '/#screenshots' },
							{ text: 'FAQ', href: '/#faq' },
							{ text: 'Download', href: '/#download' },
						].map((link, index) => (
							<li key={index} style={{ marginBottom: '1rem' }}>
								<Link href={link.href} style={{
									color: 'var(--muted)',
									textDecoration: 'none',
									transition: 'all 0.2s ease',
									display: 'flex',
									alignItems: 'center',
									gap: '0.5rem',
									fontSize: '1rem'
								}}
									className="btn-hover"
									onMouseEnter={(e) => {
										e.currentTarget.style.color = 'var(--secondary)';
										e.currentTarget.style.transform = 'translateX(5px)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.color = 'var(--muted)';
										e.currentTarget.style.transform = 'translateX(0)';
									}}
								>
									<svg style={{ height: '0.75rem', width: '0.75rem', color: 'var(--secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h3 style={{
						fontSize: '1.25rem',
						fontWeight: '600',
						marginBottom: '1.5rem',
						color: 'var(--text)'
					}}>Contact</h3>

					<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						<li style={{ marginBottom: '1.5rem' }}>
							<a
								href="mailto:ughokay@maxbasev.com"
								className="btn-hover"
								style={{
									color: 'var(--muted)',
									textDecoration: 'none',
									display: 'flex',
									alignItems: 'center',
									gap: '0.75rem',
									transition: 'all 0.2s ease',
									fontSize: '1rem'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.color = 'var(--text)';
									e.currentTarget.style.transform = 'translateY(-2px)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.color = 'var(--muted)';
									e.currentTarget.style.transform = 'translateY(0)';
								}}
							>
								<div style={{
									background: 'var(--primary-subtle)',
									borderRadius: '50%',
									width: '36px',
									height: '36px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}>
									<svg style={{ height: '18px', width: '18px', color: 'var(--secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								ughokay@maxbasev.com
							</a>
						</li>
						<li>
							<div style={{
								marginTop: '2rem',
								padding: '1.5rem',
								background: 'var(--card-bg)',
								borderRadius: '0.75rem',
								border: '1px solid var(--border)'
							}}>
								<p style={{
									margin: 0,
									fontSize: '1rem',
									color: 'var(--text)',
									fontStyle: 'italic'
								}}>
									&quot;I&apos;ll finish this app... tomorrow.&quot;
								</p>
								<p style={{
									margin: '0.5rem 0 0 0',
									fontSize: '0.9rem',
									color: 'var(--secondary)',
									textAlign: 'right'
								}}>
									— The UghOkay founder, probably
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

			{/* Bottom Bar */}
			<div style={{
				maxWidth: '1200px',
				margin: '3rem auto 0',
				padding: '2rem 0 0',
				borderTop: '1px solid var(--border)',
				display: 'flex',
				justifyContent: 'center',
				gap: '3rem',
				flexWrap: 'wrap',
				position: 'relative',
				zIndex: 1
			}}>
				<Link
					href="/privacy"
					className="btn-hover"
					style={{
						color: 'rgba(255, 255, 255, 0.4)',
						textDecoration: 'none',
						fontSize: '1rem',
						transition: 'all 0.2s ease'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.color = 'var(--text)';
						e.currentTarget.style.transform = 'translateY(-2px)';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
						e.currentTarget.style.transform = 'translateY(0)';
					}}
				>
					Privacy Policy
				</Link>
				<Link
					href="/terms"
					className="btn-hover"
					style={{
						color: 'rgba(255, 255, 255, 0.4)',
						textDecoration: 'none',
						fontSize: '1rem',
						transition: 'all 0.2s ease'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.color = 'var(--text)';
						e.currentTarget.style.transform = 'translateY(-2px)';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
						e.currentTarget.style.transform = 'translateY(0)';
					}}
				>
					Terms of Service
				</Link>
				<a
					href="https://github.com/MaxBasev/ugh-okay-landing"
					className="btn-hover"
					style={{
						color: 'rgba(255, 255, 255, 0.4)',
						textDecoration: 'none',
						fontSize: '1rem',
						transition: 'all 0.2s ease'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.color = 'var(--text)';
						e.currentTarget.style.transform = 'translateY(-2px)';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
						e.currentTarget.style.transform = 'translateY(0)';
					}}
				>
					GitHub
				</a>
			</div>
		</footer>
	);
} 