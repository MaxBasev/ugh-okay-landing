"use client";

import { useState, useEffect } from 'react';

export default function FunQuotes() {
	const quotes = [
		"\"Feels like a personal assistant with ADHD and good intentions.\"",
		"\"I clicked. I lived. I kinda cleaned my desk.\"",
		"\"I wanted to scroll TikTok, but this app told me to drink water. Now I&apos;m hydrated and confused.\"",
		"\"Finally, an app that respects my ambition and my laziness.\""
	];

	const [currentQuote, setCurrentQuote] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentQuote((prev) => (prev + 1) % quotes.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [quotes.length]);

	return (
		<section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
			<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
				<h2 style={{
					fontSize: '2.25rem',
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: '3rem',
					color: '#222222'
				}}>
					What Users Say
				</h2>

				<div style={{
					maxWidth: '768px',
					margin: '0 auto',
					backgroundColor: '#FFFFFF',
					borderRadius: '0.75rem',
					boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
					padding: '2rem',
					border: '1px solid #e5e7eb'
				}}>
					<div style={{
						height: '12rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<div
							style={{
								fontSize: '1.5rem',
								textAlign: 'center',
								fontStyle: 'italic',
								color: '#666666',
								transition: 'opacity 500ms'
							}}
						>
							{quotes[currentQuote]}
						</div>
					</div>

					<div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', gap: '0.5rem' }}>
						{quotes.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentQuote(index)}
								style={{
									width: '0.75rem',
									height: '0.75rem',
									borderRadius: '9999px',
									backgroundColor: currentQuote === index ? '#9B00FF' : '#d1d5db',
									border: 'none',
									cursor: 'pointer'
								}}
								aria-label={`Quote ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
} 