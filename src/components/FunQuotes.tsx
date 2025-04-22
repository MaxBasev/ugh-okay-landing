"use client";

import { useState, useEffect } from 'react';

export default function FunQuotes() {
	const quotes = [
		{
			text: "Feels like a personal assistant with ADHD and good intentions.",
			author: "A user, allegedly"
		},
		{
			text: "I clicked. I lived. I kinda cleaned my desk.",
			author: "Someone who probably exists"
		},
		{
			text: "I wanted to scroll TikTok, but this app told me to drink water. Now I'm hydrated and confused.",
			author: "An influencer who forgot to influence"
		},
		{
			text: "Finally, an app that respects my ambition and my laziness.",
			author: "You, in an alternate universe"
		}
	];

	const [currentQuote, setCurrentQuote] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		let interval: NodeJS.Timeout | undefined;
		if (isAutoplay) {
			interval = setInterval(() => {
				setCurrentQuote((prev) => (prev + 1) % quotes.length);
			}, 5000);
		}
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [quotes.length, isAutoplay]);

	return (
		<section style={{
			padding: '8rem 1.5rem',
			backgroundColor: '#0D0D0D',
			backgroundImage: 'linear-gradient(to bottom, #0F0F0F, #0D0D0D)',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* Градиентное свечение */}
			<div style={{
				position: 'absolute',
				bottom: '0',
				left: '0',
				width: '100%',
				height: '100%',
				background: 'radial-gradient(ellipse at bottom left, rgba(236, 72, 153, 0.1), transparent 70%)',
				filter: 'blur(60px)',
				zIndex: 0
			}}></div>

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
						fontSize: '3rem',
						fontWeight: 'bold',
						textAlign: 'center',
						marginBottom: '1rem',
						color: 'var(--text)'
					}}>
						<span className="gradient-text">What People Pretend To Say</span>
					</h2>

					<p style={{
						fontSize: '1.25rem',
						color: 'var(--muted)',
						textAlign: 'center',
						maxWidth: '600px',
						margin: '0 auto 5rem',
						lineHeight: '1.6'
					}}>
						We definitely didn&apos;t make these up. Trust us.
					</p>
				</div>

				<div className="quote-card" style={{
					maxWidth: '850px',
					margin: '0 auto',
					padding: '4rem 3rem',
					position: 'relative',
					overflow: 'hidden',
					minHeight: '300px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					{/* Декоративные элементы */}
					<div style={{
						position: 'absolute',
						top: '1rem',
						left: '1rem',
						fontSize: '4rem',
						opacity: 0.1,
						color: 'var(--primary)',
						fontFamily: 'serif'
					}}>
						&quot;
					</div>
					<div style={{
						position: 'absolute',
						bottom: '1rem',
						right: '1rem',
						fontSize: '4rem',
						opacity: 0.1,
						color: 'var(--primary)',
						fontFamily: 'serif'
					}}>
						&quot;
					</div>

					<div style={{ position: 'relative', width: '100%' }}>
						<div style={{
							minHeight: '180px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
							<div
								style={{
									fontSize: '2rem',
									textAlign: 'center',
									fontStyle: 'italic',
									color: 'var(--text)',
									transition: 'opacity 500ms, transform 500ms',
									opacity: 1,
									transform: 'translateY(0)',
									position: 'relative',
									maxWidth: '90%'
								}}
							>
								&quot;{quotes[currentQuote].text}&quot;
								<div style={{
									marginTop: '2rem',
									fontSize: '1.25rem',
									fontStyle: 'normal',
									color: 'var(--secondary)',
									fontWeight: '600'
								}}>
									— {quotes[currentQuote].author}
								</div>
							</div>
						</div>

						<div style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: '3rem'
						}}>
							<button
								onClick={() => setIsAutoplay(!isAutoplay)}
								style={{
									background: 'none',
									border: 'none',
									color: isAutoplay ? 'var(--secondary)' : 'rgba(255, 255, 255, 0.3)',
									fontSize: '0.875rem',
									padding: '0.5rem',
									cursor: 'pointer',
									marginRight: '1.5rem',
									fontWeight: 'bold',
									transition: 'color 0.3s ease'
								}}
							>
								{isAutoplay ? 'AUTOPLAY ON' : 'AUTOPLAY OFF'}
							</button>

							<div style={{ display: 'flex', gap: '0.75rem' }}>
								{quotes.map((_, index) => (
									<button
										key={index}
										onClick={() => {
											setCurrentQuote(index);
											setIsAutoplay(false);
										}}
										aria-label={`Quote ${index + 1}`}
										style={{
											width: '3rem',
											height: '0.375rem',
											borderRadius: '0.25rem',
											backgroundColor: currentQuote === index
												? 'var(--secondary)'
												: 'rgba(255, 255, 255, 0.1)',
											border: 'none',
											cursor: 'pointer',
											padding: 0,
											transition: 'all 0.3s ease'
										}}
										onMouseEnter={(e) => {
											if (currentQuote !== index) {
												e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
											}
										}}
										onMouseLeave={(e) => {
											if (currentQuote !== index) {
												e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
											}
										}}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 