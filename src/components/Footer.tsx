"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer style={{
			padding: '3rem 1.5rem',
			backgroundColor: '#1A1A1A',
			color: '#FFFFFF',
			borderTop: '5px solid #9B00FF'
		}}>
			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
				gap: '2rem'
			}}>
				{/* Branding and Tagline */}
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem'
				}}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
						<Image
							src="/images/UghOkay-brain.png"
							alt="UghOkay Mini Logo"
							width={40}
							height={40}
							style={{ filter: 'brightness(1.2)' }}
						/>
						<span style={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
							background: 'linear-gradient(90deg, #9B00FF 0%, #FF4FDB 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text'
						}}>
							UghOkay
						</span>
					</div>

					<p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#B3B3B3', marginTop: '0.5rem' }}>
						The procrastination app that finally understands you don&apos;t want to be yelled at about productivity.
					</p>

					<p style={{
						fontSize: '0.875rem',
						color: '#777777',
						marginTop: '1rem'
					}}>
						© {new Date().getFullYear()} UghOkay. All rights, I guess.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 style={{
						fontSize: '1.125rem',
						fontWeight: '600',
						marginBottom: '1rem',
						color: '#FFFFFF'
					}}>Quick Links</h3>

					<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						{[
							{ text: 'Home', href: '/' },
							{ text: 'Features', href: '/#why-it-works' },
							{ text: 'Screenshots', href: '/#screenshots' },
							{ text: 'FAQ', href: '/#faq' },
							{ text: 'Download', href: '/#download' },
						].map((link, index) => (
							<li key={index} style={{ marginBottom: '0.75rem' }}>
								<Link href={link.href} style={{
									color: '#B3B3B3',
									textDecoration: 'none',
									transition: 'color 0.2s ease',
									display: 'flex',
									alignItems: 'center',
									gap: '0.5rem'
								}}
									onMouseEnter={(e) => {
										e.currentTarget.style.color = '#FF4FDB';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.color = '#B3B3B3';
									}}
								>
									<svg style={{ height: '0.75rem', width: '0.75rem', color: '#FF4FDB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
						fontSize: '1.125rem',
						fontWeight: '600',
						marginBottom: '1rem',
						color: '#FFFFFF'
					}}>Contact</h3>

					<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						<li style={{ marginBottom: '1rem' }}>
							<a
								href="mailto:hi@ughokay.app"
								style={{
									color: '#B3B3B3',
									textDecoration: 'none',
									display: 'flex',
									alignItems: 'center',
									gap: '0.75rem',
									transition: 'color 0.2s ease'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.color = '#FFFFFF';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.color = '#B3B3B3';
								}}
							>
								<div style={{
									background: 'rgba(155, 0, 255, 0.2)',
									borderRadius: '50%',
									width: '32px',
									height: '32px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}>
									<svg style={{ height: '16px', width: '16px', color: '#FF4FDB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								hi@ughokay.app
							</a>
						</li>
						<li>
							<div style={{
								marginTop: '2rem',
								padding: '1rem',
								background: 'linear-gradient(135deg, rgba(155, 0, 255, 0.1) 0%, rgba(255, 79, 219, 0.1) 100%)',
								borderRadius: '0.5rem',
								border: '1px solid rgba(255, 255, 255, 0.1)'
							}}>
								<p style={{
									margin: 0,
									fontSize: '0.95rem',
									color: '#FFFFFF',
									fontStyle: 'italic'
								}}>
									&quot;I&apos;ll finish this app... tomorrow.&quot;
								</p>
								<p style={{
									margin: '0.5rem 0 0 0',
									fontSize: '0.8rem',
									color: '#FF4FDB',
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
				margin: '2rem auto 0',
				padding: '1.5rem 0 0',
				borderTop: '1px solid rgba(255, 255, 255, 0.1)',
				display: 'flex',
				justifyContent: 'center',
				gap: '2rem',
				flexWrap: 'wrap'
			}}>
				<Link
					href="/#privacy"
					style={{
						color: '#999999',
						textDecoration: 'none',
						fontSize: '0.875rem',
						transition: 'color 0.2s ease'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.color = '#FFFFFF';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.color = '#999999';
					}}
				>
					Privacy Policy
				</Link>
				<Link
					href="/#terms"
					style={{
						color: '#999999',
						textDecoration: 'none',
						fontSize: '0.875rem',
						transition: 'color 0.2s ease'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.color = '#FFFFFF';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.color = '#999999';
					}}
				>
					Terms of Service
				</Link>
				<a
					href="https://github.com/ugh-okay"
					style={{
						color: '#999999',
						textDecoration: 'none',
						fontSize: '0.875rem',
						transition: 'color 0.2s ease'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.color = '#FFFFFF';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.color = '#999999';
					}}
				>
					GitHub
				</a>
			</div>
		</footer>
	);
} 