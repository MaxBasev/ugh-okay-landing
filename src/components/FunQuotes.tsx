"use client";

import { useState, useEffect } from 'react';

export default function FunQuotes() {
	const quotes = [
		{
			text: "\"Feels like a personal assistant with ADHD and good intentions.\"",
			author: "Alex, recovering procrastinator"
		},
		{
			text: "\"I clicked. I lived. I kinda cleaned my desk.\"",
			author: "Sam, professional tomorrow-doer"
		},
		{
			text: "\"I wanted to scroll TikTok, but this app told me to drink water. Now I&apos;m hydrated and confused.\"",
			author: "Jamie, reluctantly productive"
		},
		{
			text: "\"Finally, an app that respects my ambition and my laziness.\"",
			author: "Taylor, master of the bare minimum"
		}
	];

	const [currentQuote, setCurrentQuote] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);

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
			padding: '6rem 0',
			backgroundColor: '#f9fafb',
			background: 'linear-gradient(120deg, #f9f5ff 0%, #f9fafb 100%)'
		}}>
			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				padding: '0 1rem'
			}}>
				<h2 style={{
					fontSize: '2.5rem',
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: '3.5rem',
					color: '#222222'
				}}>
					What Users Say
				</h2>

				<div style={{
					maxWidth: '850px',
					margin: '0 auto',
					backgroundColor: '#FFFFFF',
					borderRadius: '1.5rem',
					boxShadow: '0 15px 30px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.02)',
					padding: '3rem 2rem',
					position: 'relative',
					overflow: 'hidden'
				}}>
					{/* Decorative elements */}
					<div style={{
						position: 'absolute',
						top: '0',
						left: '0',
						width: '120px',
						height: '120px',
						backgroundColor: '#9B00FF',
						opacity: '0.03',
						borderRadius: '0 0 120px 0'
					}}></div>
					<div style={{
						position: 'absolute',
						bottom: '0',
						right: '0',
						width: '120px',
						height: '120px',
						backgroundColor: '#FF4FDB',
						opacity: '0.03',
						borderRadius: '120px 0 0 0'
					}}></div>

					<div style={{ position: 'relative' }}>
						<div style={{
							height: '180px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
							<div
								style={{
									fontSize: '1.75rem',
									textAlign: 'center',
									fontStyle: 'italic',
									color: '#222222',
									transition: 'opacity 500ms, transform 500ms',
									opacity: 1,
									transform: 'translateY(0)',
									position: 'relative'
								}}
							>
								{quotes[currentQuote].text}
								<div style={{
									marginTop: '1.5rem',
									fontSize: '1.125rem',
									fontStyle: 'normal',
									color: '#666666'
								}}>
									— {quotes[currentQuote].author}
								</div>
							</div>
						</div>

						<div style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: '2rem'
						}}>
							<button
								onClick={() => setIsAutoplay(!isAutoplay)}
								style={{
									background: 'none',
									border: 'none',
									color: isAutoplay ? '#9B00FF' : '#888',
									fontSize: '0.875rem',
									padding: '0.5rem',
									cursor: 'pointer',
									marginRight: '1rem',
									fontWeight: 'bold'
								}}
							>
								{isAutoplay ? 'AUTOPLAY ON' : 'AUTOPLAY OFF'}
							</button>

							<div style={{ display: 'flex', gap: '0.5rem' }}>
								{quotes.map((_, index) => (
									<button
										key={index}
										onClick={() => {
											setCurrentQuote(index);
											setIsAutoplay(false);
										}}
										aria-label={`Quote ${index + 1}`}
										style={{
											width: '2.5rem',
											height: '0.375rem',
											borderRadius: '0.25rem',
											backgroundColor: currentQuote === index ? '#9B00FF' : '#e5e7eb',
											border: 'none',
											cursor: 'pointer',
											padding: 0,
											transition: 'all 0.2s ease'
										}}
										onMouseEnter={(e) => {
											if (currentQuote !== index) {
												e.currentTarget.style.backgroundColor = '#d1d5db';
											}
										}}
										onMouseLeave={(e) => {
											if (currentQuote !== index) {
												e.currentTarget.style.backgroundColor = '#e5e7eb';
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