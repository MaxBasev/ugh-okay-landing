"use client";

import { useState } from 'react';

type FAQItemProps = {
	question: string;
	answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={{
			borderBottom: '1px solid #e5e7eb',
			padding: '1.25rem 0',
			transition: 'all 0.3s ease'
		}}>
			<button
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					textAlign: 'left',
					background: 'none',
					border: 'none',
					cursor: 'pointer',
					padding: '0'
				}}
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 style={{
					fontSize: '1.25rem',
					fontWeight: '600',
					color: '#222222',
					transition: 'color 0.2s ease'
				}}>{question}</h3>
				<span style={{
					marginLeft: '1.5rem',
					flexShrink: 0,
					transition: 'transform 0.3s ease',
					transform: isOpen ? 'rotate(-180deg)' : 'rotate(0)'
				}}>
					<svg style={{ height: '1.5rem', width: '1.5rem', color: '#9B00FF' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
					color: '#666666',
					lineHeight: '1.6',
					fontSize: '1.125rem'
				}}>{answer}</p>
			</div>
		</div>
	);
}

export default function FAQ() {
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
		<section style={{
			padding: '6rem 0',
			backgroundColor: '#FFFFFF',
			background: 'linear-gradient(180deg, #FFFFFF 0%, #f9fafb 100%)'
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
					marginBottom: '1rem',
					color: '#222222'
				}}>
					FAQ
				</h2>

				<p style={{
					fontSize: '1.25rem',
					color: '#666666',
					textAlign: 'center',
					maxWidth: '600px',
					margin: '0 auto 3.5rem',
					fontStyle: 'italic'
				}}>
					(Frequently Avoided Questions)
				</p>

				<div style={{
					maxWidth: '800px',
					margin: '0 auto',
					backgroundColor: '#FFFFFF',
					borderRadius: '1rem',
					boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.03)',
					padding: '1.5rem 2rem',
					border: '1px solid #f3f4f6'
				}}>
					{faqItems.map((item, index) => (
						<FAQItem
							key={index}
							question={item.question}
							answer={item.answer}
						/>
					))}

					<div style={{
						marginTop: '2rem',
						padding: '1rem',
						backgroundColor: 'rgba(155, 0, 255, 0.03)',
						borderRadius: '0.5rem',
						display: 'flex',
						alignItems: 'center',
						gap: '1rem'
					}}>
						<div style={{ fontSize: '1.5rem' }}>💡</div>
						<p style={{
							fontSize: '0.875rem',
							color: '#666666',
							margin: 0
						}}>
							Have more questions? Great way to procrastinate! Email us at <a href="mailto:hi@ughokay.app" style={{ color: '#9B00FF', textDecoration: 'none' }}>hi@ughokay.app</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
} 