"use client";
import { useEffect, useState } from 'react';

export default function WhyItWorks() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	const quotes = [
		{
			text: "Sometimes all you need is a sarcastic push.",
			author: "UghOkay v1.0",
			delay: "0.1s"
		},
		{
			text: "Procrastination? Never heard of her.",
			author: "Definitely not you",
			delay: "0.3s"
		},
		{
			text: "You could scroll... or you could tap.",
			author: "The wise app",
			delay: "0.5s"
		},
		{
			text: "Your screen can either waste time or save it.",
			author: "Choose wisely",
			delay: "0.7s"
		}
	];

	return (
		<section style={{
			padding: '8rem 1.5rem',
			backgroundColor: '#0F0F0F',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* Декоративный фон */}
			<div style={{
				position: 'absolute',
				top: '0',
				right: '0',
				width: '100%',
				height: '100%',
				background: 'radial-gradient(circle at top right, rgba(236, 72, 153, 0.1), transparent 60%)',
				zIndex: 0
			}}></div>

			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				position: 'relative',
				zIndex: 1
			}}>
				<div className={loaded ? 'animate-in' : ''} style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
					<h2 style={{
						fontSize: '3rem',
						fontWeight: 'bold',
						textAlign: 'center',
						marginBottom: '5rem',
						color: 'var(--text)',
						position: 'relative',
						display: 'inline-block'
					}}>
						<span className="gradient-text">Why It Works</span>
					</h2>
				</div>

				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
					gap: '2.5rem',
					maxWidth: '1100px',
					margin: '0 auto'
				}}>
					{quotes.map((quote, index) => (
						<div
							key={index}
							className="quote-card"
							style={{
								opacity: loaded ? 1 : 0,
								transform: loaded ? 'translateY(0)' : 'translateY(30px)',
								transition: `all 0.7s ease ${quote.delay}`,
								padding: '2.5rem',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								height: '100%',
								minHeight: '180px'
							}}
						>
							<p style={{
								fontSize: '1.5rem',
								fontWeight: '500',
								fontStyle: 'italic',
								color: 'var(--text)',
								marginBottom: '1.5rem',
								lineHeight: '1.4',
								textAlign: 'center'
							}}>
								&quot;{quote.text}&quot;
							</p>

							<p style={{
								color: 'var(--secondary)',
								fontSize: '0.95rem',
								fontWeight: '600',
								textAlign: 'right',
								marginTop: 'auto'
							}}>
								— {quote.author}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 