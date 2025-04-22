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
			padding: '8rem 1.5rem 6rem',
			textAlign: 'center',
			background: 'linear-gradient(180deg, var(--bg) 0%, #131313 100%)',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* Background gradient */}
			<div style={{
				position: 'absolute',
				top: '10%',
				left: '5%',
				width: '80vw',
				height: '80vh',
				background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 40%, transparent 70%)',
				filter: 'blur(60px)',
				zIndex: 0
			}}></div>

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
				<div style={{
					width: '180px',
					height: '180px',
					position: 'relative',
					margin: '0 auto 1.5rem'
				}}>
					<Image
						src="/images/UghOkay-brain.png"
						alt="UghOkay Logo"
						fill
						style={{
							objectFit: 'contain',
							filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))'
						}}
					/>
				</div>

				{/* App name */}
				<h2 style={{
					fontSize: '2.5rem',
					fontWeight: 'bold',
					marginBottom: '3rem',
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
					margin: '0 auto 4rem',
					padding: '3rem 2rem',
					animation: 'fadeIn 0.8s ease-out forwards',
					animationDelay: '0.2s',
				}}>
					<h1 style={{
						fontSize: 'clamp(2.5rem, 7vw, 4rem)',
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
						href="#"
						style={{
							padding: '1.25rem 2rem',
							background: 'var(--gradient)',
							color: '#FFFFFF',
							borderRadius: '100px',
							fontWeight: '600',
							fontSize: '1.25rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '0.75rem',
							textDecoration: 'none',
							boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
							maxWidth: '300px',
							width: '100%',
							transition: 'all 0.3s ease',
							position: 'relative',
							overflow: 'hidden'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-5px)';
							e.currentTarget.style.boxShadow = '0 15px 30px rgba(139, 92, 246, 0.4)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(0)';
							e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.3)';
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
						Нажмите для загрузки или прокрутите вниз, чтобы узнать, почему прокрастинация тоже заслуживает поддержки.
					</p>
				</div>
			</div>
		</section>
	);
} 