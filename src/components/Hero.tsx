"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<section style={{
			padding: '6rem 1.5rem 2rem',
			textAlign: 'center',
			position: 'relative',
			overflow: 'hidden',
			background: 'var(--bg)',
			marginBottom: 0
		}}>
			{/* Main content */}
			<div className={`${isLoaded ? 'animate-in' : ''}`} style={{
				maxWidth: '1200px',
				margin: '0 auto',
				position: 'relative',
				zIndex: 1,
				opacity: isLoaded ? 1 : 0,
				transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
				transition: 'opacity 0.8s ease, transform 0.8s ease',
			}}>
				{/* Logo */}
				<div className="float" style={{
					width: '160px',
					height: '160px',
					position: 'relative',
					margin: '0 auto 1rem'
				}}>
					<Image
						src="/images/UghOkay-brain.png"
						alt="UghOkay Logo"
						fill
						style={{
							objectFit: 'contain',
							filter: 'drop-shadow(var(--neon-glow))'
						}}
					/>
				</div>

				{/* App name */}
				<h2 style={{
					fontSize: '2.5rem',
					fontWeight: 'bold',
					marginBottom: '2rem',
					background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text',
					display: 'inline-block'
				}}>
					UghOkay
				</h2>

				{/* Quote card */}
				<div className="quote-card" style={{
					maxWidth: '800px',
					margin: '0 auto 3rem',
					padding: '2.5rem 2rem',
					animation: 'fadeIn 0.8s ease-out forwards',
					animationDelay: '0.2s'
				}}>
					<h1 style={{
						fontSize: 'clamp(2.3rem, 7vw, 3.8rem)',
						fontWeight: '800',
						lineHeight: '1.2',
						marginBottom: '1.5rem',
						fontStyle: 'italic',
						color: 'var(--text)',
					}}>
						&quot;Before you scroll again, tap this.&quot;
					</h1>
					<p style={{
						fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
						color: 'var(--secondary)',
						fontWeight: '500',
						textAlign: 'right',
						opacity: 0.9
					}}>
						— Your better self, hiding behind TikTok
					</p>
				</div>

				{/* Action buttons */}
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1.5rem'
				}}>
					{/* Primary button */}
					<Link
						href="#download"
						className="btn-hover"
						style={{
							padding: '1.25rem 2rem',
							background: 'var(--gradient)',
							color: '#FFFFFF',
							borderRadius: '100px',
							fontWeight: '700',
							fontSize: '1.35rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '0.75rem',
							textDecoration: 'none',
							boxShadow: 'var(--neon-glow), 0 0 15px rgba(139, 92, 246, 0.5)',
							maxWidth: '320px',
							width: '100%',
							transition: 'all 0.3s ease',
							position: 'relative',
							overflow: 'hidden',
							animation: 'pulse 2s infinite'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
							e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.4)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(0) scale(1)';
							e.currentTarget.style.boxShadow = 'var(--neon-glow), 0 0 15px rgba(139, 92, 246, 0.5)';
						}}
					>
						<span>Change my brain 🧠</span>
					</Link>

					{/* Secondary info */}
					<p style={{
						color: 'var(--muted)',
						fontSize: '0.95rem',
						margin: '0.5rem 0 0 0',
						maxWidth: '500px',
						lineHeight: '1.6'
					}}>
						Click to download or scroll down to learn why procrastination deserves support too.
					</p>
				</div>
			</div>
		</section>
	);
} 