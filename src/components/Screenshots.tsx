"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Screenshots() {
	const [isLoaded, setIsLoaded] = useState(false);

	// Animation on load
	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const screenshots = [
		{
			id: 'screen4',
			title: 'Main Screen',
			tagline: 'Minimalist interface for maximum focus.',
			color: '#0EA5E9',
			iconText: '📱',
			imageSrc: '/screenshots/UghOkay-Screen4.jpg'
		},
		{
			id: 'screen2',
			title: 'Add Tasks',
			tagline: 'Simple and quick task addition with a single tap.',
			color: 'var(--secondary)',
			iconText: '📝',
			imageSrc: '/screenshots/UghOkay-Screen2.jpg'
		},
		{
			id: 'screen3',
			title: 'About Screen',
			tagline: 'Learn how the app works to boost your productivity.',
			color: '#4F46E5',
			iconText: 'ℹ️',
			imageSrc: '/screenshots/UghOkay-Screen3.jpg'
		}
	];

	return (
		<section style={{
			padding: '2rem 1.5rem 2rem',
			position: 'relative',
			overflow: 'hidden',
			background: 'var(--bg)'
		}}>
			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				position: 'relative',
				zIndex: 1
			}}>
				<div className={isLoaded ? 'animate-in' : ''} style={{
					opacity: isLoaded ? 1 : 0,
					transition: 'opacity 0.8s ease'
				}}>
					<h2 style={{
						fontSize: '2.5rem',
						fontWeight: 'bold',
						textAlign: 'center',
						marginBottom: '2.5rem',
						color: 'var(--text)'
					}}>
						<span className="gradient-text">Screenshots</span>
					</h2>

					<p style={{
						fontSize: '1.25rem',
						color: 'var(--muted)',
						textAlign: 'center',
						maxWidth: '600px',
						margin: '0 auto 4rem',
						lineHeight: '1.6'
					}}>
						Feast your eyes on these masterpieces of minimalism.
					</p>
				</div>

				{/* Screenshot grid */}
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
					gap: '2.5rem',
					margin: '0 auto'
				}}>
					{screenshots.map((screenshot, index) => (
						<div
							key={screenshot.id}
							className={isLoaded ? 'fade-in-slide' : ''}
							style={{
								opacity: isLoaded ? 1 : 0,
								transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
								transition: `all 0.7s ease ${index * 0.2}s`,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center'
							}}
						>
							{/* Phone mockup */}
							<div className="quote-card btn-hover" style={{
								width: '280px',
								height: '520px',
								marginBottom: '2rem',
								padding: '0',
								overflow: 'hidden',
								borderRadius: '1.5rem',
								boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 0 3px rgba(139, 92, 246, 0.05)',
								position: 'relative',
								background: 'var(--card-bg)',
								transition: 'transform 0.2s ease, box-shadow 0.2s ease',
								border: '1px solid rgba(255, 255, 255, 0.05)'
							}}
								onMouseEnter={(e) => {
									e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15), 0 0 0 4px rgba(139, 92, 246, 0.1)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 0 3px rgba(139, 92, 246, 0.05)';
								}}
							>
								{/* Notch */}
								<div style={{
									position: 'absolute',
									top: '0',
									left: '50%',
									transform: 'translateX(-50%)',
									width: '150px',
									height: '28px',
									backgroundColor: '#0A0A0A',
									borderBottomLeftRadius: '14px',
									borderBottomRightRadius: '14px',
									zIndex: 3
								}}></div>

								{/* Screen content */}
								<div style={{
									height: '100%',
									width: '100%',
									position: 'relative',
									overflow: 'hidden'
								}}>
									{/* Actual Screenshot */}
									<Image
										src={screenshot.imageSrc}
										alt={screenshot.title}
										fill
										style={{
											objectFit: 'cover',
											objectPosition: 'center top'
										}}
									/>

									{/* Screen glare */}
									<div style={{
										position: 'absolute',
										top: '-50%',
										left: '-50%',
										width: '200%',
										height: '200%',
										background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05), transparent 60%)',
										pointerEvents: 'none',
										zIndex: 2
									}}></div>
								</div>
							</div>

							{/* Card caption */}
							<div style={{
								textAlign: 'center',
								maxWidth: '250px'
							}}>
								<p style={{
									fontSize: '1.25rem',
									fontWeight: '700',
									color: 'var(--text)',
									margin: '0 0 0.5rem',
									letterSpacing: '-0.01em'
								}}>
									{screenshot.title}
								</p>
								<p style={{
									fontSize: '1rem',
									fontStyle: 'italic',
									color: 'var(--primary)',
									marginTop: '0.5rem',
									opacity: 0.9
								}}>
									{screenshot.tagline}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 