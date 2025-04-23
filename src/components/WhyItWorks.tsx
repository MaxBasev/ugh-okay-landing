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
			padding: '2rem 1.5rem 2rem',
			position: 'relative',
			overflow: 'hidden',
			background: 'var(--bg)'
		}}>
			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				position: 'relative',
				zIndex: 1,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
				<div className={loaded ? 'animate-in' : ''} style={{
					opacity: loaded ? 1 : 0,
					transition: 'opacity 0.5s ease',
					textAlign: 'center',
					width: '100%'
				}}>
					<h2 style={{
						fontSize: 'clamp(2rem, 5vw, 2.5rem)',
						fontWeight: 'bold',
						textAlign: 'center',
						marginBottom: 'clamp(3rem, 10vw, 5rem)',
						color: 'var(--text)',
						position: 'relative',
						display: 'inline-block'
					}}>
						<span className="gradient-text">Why It Works</span>
					</h2>
				</div>

				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
					gap: '2.5rem',
					maxWidth: '800px',
					margin: '0 auto',
					justifyContent: 'center',
					width: '100%'
				}}>
					{quotes.map((quote, index) => (
						<div
							key={index}
							className="quote-card btn-hover"
							style={{
								opacity: loaded ? 1 : 0,
								transform: loaded ? 'translateY(0)' : 'translateY(30px)',
								transition: `all 0.7s ease ${quote.delay}`,
								padding: 'clamp(1.5rem, 5vw, 2.5rem)',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								height: '100%',
								minHeight: '180px',
								cursor: 'default'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-5px)';
								e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.boxShadow = 'var(--card-shadow)';
							}}
						>
							<p style={{
								fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
								fontWeight: '500',
								fontStyle: 'italic',
								color: 'var(--text)',
								marginBottom: '1.5rem',
								lineHeight: '1.4',
								textAlign: 'center',
								wordWrap: 'break-word',
								hyphens: 'auto'
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