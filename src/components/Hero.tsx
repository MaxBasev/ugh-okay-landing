"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
	return (
		<section style={{
			padding: '6rem 0 8rem',
			textAlign: 'center',
			background: 'linear-gradient(to bottom, #FFFFFF, #f9fafb)',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* Большая иконка мозга в качестве фонового элемента */}
			<div style={{
				position: 'absolute',
				right: '-5%',
				top: '50%',
				transform: 'translateY(-50%)',
				width: '40%',
				height: '90%',
				opacity: 0.06,
				zIndex: 0,
				pointerEvents: 'none'
			}}>
				<Image
					src="/images/UghOkay-brain.png"
					alt="UghOkay Brain Background"
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>

			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				padding: '0 1rem',
				position: 'relative',
				zIndex: 1
			}}>
				{/* Видимая небольшая иконка мозга над заголовком */}
				<div style={{
					width: '80px',
					height: '80px',
					position: 'relative',
					margin: '0 auto 2rem'
				}}>
					<Image
						src="/images/UghOkay-brain.png"
						alt="UghOkay Logo"
						fill
						style={{ objectFit: 'contain' }}
					/>
				</div>

				<h1 style={{
					fontSize: 'clamp(3rem, 7vw, 4.5rem)',
					fontWeight: '800',
					lineHeight: '1.1',
					marginBottom: '1.5rem',
					color: '#222222',
					letterSpacing: '-0.02em'
				}}>
					Before you scroll again, tap this.
				</h1>
				<p style={{
					fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
					color: '#666666',
					marginBottom: '3.5rem',
					maxWidth: '42rem',
					margin: '0 auto 3.5rem',
					lineHeight: '1.5'
				}}>
					UghOkay helps you stop procrastinating just long enough to do one thing. And that&apos;s enough.
				</p>
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1.5rem'
				}}>
					{/* Неактивная кнопка App Store */}
					<div
						style={{
							padding: '0.75rem 1.5rem',
							backgroundColor: '#f3f4f6',
							color: '#666666',
							borderRadius: '0.375rem',
							fontWeight: '500',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '0.5rem',
							maxWidth: '280px',
							width: '100%',
							cursor: 'default',
							border: '1px solid #e5e7eb'
						}}
					>
						<span>App Store</span>
						<span style={{ fontSize: '0.875rem', opacity: '0.75' }}>(Coming soon)</span>
					</div>

					{/* Активная кнопка Google Play */}
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
							boxShadow: '0 8px 20px -3px rgba(155, 0, 255, 0.3)',
							maxWidth: '280px',
							width: '100%',
							transform: 'scale(1.05)'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.opacity = '0.95';
							e.currentTarget.style.transform = 'scale(1.08)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.opacity = '1';
							e.currentTarget.style.transform = 'scale(1.05)';
						}}
					>
						<span>Google Play</span>
						<span style={{ fontSize: '0.875rem', opacity: '0.85' }}>Download now</span>
					</Link>
				</div>
			</div>
		</section>
	);
} 