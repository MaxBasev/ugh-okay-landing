"use client";

import { useState, useEffect, useRef } from 'react';

export default function FunQuotes() {
	const quotes = [
		{
			quote: "I was skeptical about another productivity app until I realized it didn't actually make me productive. It just made me feel less bad about it. 10/10.",
			author: "Sarah H., Professional Procrastinator",
			avatar: "👩‍💼"
		},
		{
			quote: "Finally, an app that doesn't make me feel guilty for watching YouTube instead of working. The gentle sarcasm is *chef's kiss*.",
			author: "Michael R., Deadline Avoider",
			avatar: "👨‍💻"
		},
		{
			quote: "My therapist recommended this app to help with my productivity anxiety. Now I need therapy for my app addiction instead.",
			author: "Jamie L., Task Postponer",
			avatar: "🧘‍♀️"
		},
		{
			quote: "I've tried all the productivity apps. This is the only one that understands I'm never going to change, and that's oddly comforting.",
			author: "Alex B., Professional Overthinker",
			avatar: "🤔"
		},
		{
			quote: "The notifications that say 'You know what to do. Or don't. Whatever.' are strangely more motivating than anything else I've tried.",
			author: "Taylor S., Chronic List-Maker",
			avatar: "📝"
		}
	];

	const [currentQuote, setCurrentQuote] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		setIsLoaded(true);

		// Auto-rotate quotes every 7 seconds
		intervalRef.current = setInterval(() => {
			changeQuote();
		}, 7000);

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, []);

	const changeQuote = () => {
		setIsTransitioning(true);

		setTimeout(() => {
			setCurrentQuote((prev) => (prev + 1) % quotes.length);
			setIsTransitioning(false);
		}, 500);
	}

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
						margin: '0 auto 4rem',
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
					<div style={{ position: 'relative', width: '100%' }}>
						<div style={{
							minHeight: '180px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
							<div
								className={!isTransitioning ? 'fade-in-slide' : ''}
								style={{
									fontSize: '2rem',
									fontWeight: '300',
									fontStyle: 'italic',
									textAlign: 'center',
									opacity: isTransitioning ? 0 : 1,
									transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
									transition: 'opacity 0.5s ease, transform 0.5s ease',
									lineHeight: '1.4',
									color: 'var(--text)'
								}}>
								{quotes[currentQuote].quote}
							</div>
						</div>

						<div style={{
							marginTop: '2rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '1rem',
							opacity: isTransitioning ? 0 : 1,
							transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)',
							transition: 'opacity 0.5s ease, transform 0.5s ease',
						}}>
							<div style={{
								fontSize: '2.5rem',
								background: 'var(--primary-subtle)',
								width: '60px',
								height: '60px',
								borderRadius: '50%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
								{quotes[currentQuote].avatar}
							</div>
							<div>
								<div style={{
									fontSize: '1.25rem',
									fontWeight: '600',
									color: 'var(--primary)',
								}}>
									{quotes[currentQuote].author}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div style={{
					display: 'flex',
					justifyContent: 'center',
					gap: '0.75rem',
					margin: '2rem auto 0'
				}}>
					{quotes.map((_, index) => (
						<button
							key={index}
							onClick={() => {
								if (intervalRef.current) clearInterval(intervalRef.current);
								setCurrentQuote(index);
							}}
							style={{
								width: '12px',
								height: '12px',
								borderRadius: '50%',
								backgroundColor: currentQuote === index ? 'var(--primary)' : 'var(--muted)',
								opacity: currentQuote === index ? 1 : 0.3,
								border: 'none',
								cursor: 'pointer',
								transition: 'all 0.3s ease'
							}}
							aria-label={`View quote ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
} 