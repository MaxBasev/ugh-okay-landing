"use client";

import { useState, useEffect } from 'react';

type FAQItemProps = {
	question: string;
	answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={{
			borderBottom: '1px solid var(--border)',
			padding: '0.9rem 0',
			transition: 'all 0.3s ease'
		}}>
			<button
				className="btn-hover"
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					textAlign: 'left',
					background: 'none',
					border: 'none',
					cursor: 'pointer',
					padding: '0',
					transition: 'all 0.2s ease'
				}}
				onClick={() => setIsOpen(!isOpen)}
				onMouseEnter={(e) => {
					e.currentTarget.style.transform = 'translateX(5px)';
					const h3 = e.currentTarget.querySelector('h3');
					if (h3) h3.style.color = 'var(--primary)';
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.transform = 'translateX(0)';
					const h3 = e.currentTarget.querySelector('h3');
					if (h3) h3.style.color = 'var(--text)';
				}}
			>
				<h3 style={{
					fontSize: '1.25rem',
					fontWeight: '600',
					color: 'var(--text)',
					transition: 'color 0.2s ease',
					opacity: '0.95',
					textShadow: '0 0 1px rgba(255, 255, 255, 0.2)'
				}}>{question}</h3>
				<span style={{
					marginLeft: '1.5rem',
					flexShrink: 0,
					transition: 'transform 0.3s ease',
					transform: isOpen ? 'rotate(-180deg)' : 'rotate(0)'
				}}>
					<svg style={{ height: '1.5rem', width: '1.5rem', color: 'var(--primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</span>
			</button>
			<div style={{
				height: isOpen ? 'auto' : '0',
				overflow: 'hidden',
				maxHeight: isOpen ? '20rem' : '0',
				opacity: isOpen ? 1 : 0,
				transition: 'all 0.4s ease',
				marginTop: isOpen ? '0.75rem' : '0',
				paddingRight: '3rem'
			}}>
				<p style={{
					color: 'var(--muted)',
					lineHeight: '1.6',
					fontSize: '1.125rem'
				}}>{answer}</p>
			</div>
		</div>
	);
}

export default function FAQ() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const faqItems = [
		{
			question: "Will it yell at me?",
			answer: "No. That's your boss's job. We're the nice app that gives you a digital pat on the back for drinking water. Low expectations are our specialty."
		},
		{
			question: "Is it actually helpful?",
			answer: "Well, it won't do your taxes, but it might get you to drink water. Success is relative. Our users report feeling 17% more accomplished and 24% less guilty about checking Instagram."
		},
		{
			question: "What if I still procrastinate using this app?",
			answer: "Then congratulations, you've reached procrastination inception! We should give you an award. But seriously, at least you're procrastinating with something designed to eventually help you do something."
		},
		{
			question: "Why is it offline only?",
			answer: "Because your productivity doesn't need to be monetized, tracked, or used to train AI. Also, we're too lazy to set up cloud infrastructure. That's our own procrastination story."
		},
		{
			question: "Can my boss/parent/overly productive friend install this remotely on my device?",
			answer: "Nope. We're on your side. UghOkay is strictly a consensual productivity relationship. Install it yourself or not at all."
		}
	];

	return (
		<section id="faq" style={{
			padding: '2rem 1.5rem 2rem',
			position: 'relative',
			overflow: 'hidden',
			background: 'var(--bg)'
		}}>
			<div className={`${isLoaded ? 'animate-in' : ''}`} style={{
				maxWidth: '1200px',
				margin: '0 auto',
				position: 'relative',
				zIndex: 1,
				opacity: isLoaded ? 1 : 0,
				transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
				transition: 'opacity 0.8s ease, transform 0.8s ease',
			}}>
				<h2 style={{
					fontSize: '2.5rem',
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: '1rem',
					color: 'var(--text)'
				}}>
					<span className="gradient-text">FAQ</span>
				</h2>

				<p style={{
					fontSize: '1.25rem',
					color: 'var(--muted)',
					textAlign: 'center',
					maxWidth: '600px',
					margin: '0 auto 2.5rem',
					fontStyle: 'italic'
				}}>
					(Frequently Avoided Questions)
				</p>

				<div className="quote-card" style={{
					maxWidth: '800px',
					margin: '0 auto',
					padding: '1.75rem'
				}}>
					{faqItems.map((item, index) => (
						<FAQItem
							key={index}
							question={item.question}
							answer={item.answer}
						/>
					))}

					<div style={{
						marginTop: '1.5rem',
						padding: '1.5rem',
						backgroundColor: 'var(--primary-subtle)',
						borderRadius: '0.75rem',
						display: 'flex',
						alignItems: 'center',
						gap: '1rem',
						border: '1px solid rgba(139, 92, 246, 0.1)'
					}}>
						<div style={{ fontSize: '1.5rem' }}>💡</div>
						<p style={{
							fontSize: '0.95rem',
							color: 'var(--muted)',
							margin: 0
						}}>
							Have more questions? Great way to procrastinate! Email us at <a href="mailto:ughokay@maxbasev.com" className="btn-hover" style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: '500', transition: 'all 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>ughokay@maxbasev.com</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
} 