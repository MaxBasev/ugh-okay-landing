"use client";

import { useState } from 'react';

type FAQItemProps = {
	question: string;
	answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div style={{ borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
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
				<h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#222222' }}>{question}</h3>
				<span style={{ marginLeft: '1.5rem', flexShrink: 0 }}>
					{isOpen ? (
						<svg style={{ height: '1.5rem', width: '1.5rem', color: '#9B00FF' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
						</svg>
					) : (
						<svg style={{ height: '1.5rem', width: '1.5rem', color: '#9B00FF' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
						</svg>
					)}
				</span>
			</button>
			{isOpen && (
				<div style={{ marginTop: '0.5rem', paddingRight: '3rem' }}>
					<p style={{ color: '#666666' }}>{answer}</p>
				</div>
			)}
		</div>
	);
}

export default function FAQ() {
	const faqItems = [
		{
			question: "Does it help with procrastination?",
			answer: "Yes, in the most low-pressure way."
		},
		{
			question: "Is it really offline?",
			answer: "Yep."
		},
		{
			question: "Will it yell at me?",
			answer: "No. That's your boss's job."
		}
	];

	return (
		<section style={{ padding: '4rem 0', backgroundColor: '#FFFFFF' }}>
			<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
				<h2 style={{
					fontSize: '2.25rem',
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: '3rem',
					color: '#222222'
				}}>
					FAQ
				</h2>

				<div style={{
					maxWidth: '42rem',
					margin: '0 auto',
					backgroundColor: '#FFFFFF',
					borderRadius: '0.5rem',
					boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
					padding: '1.5rem',
					border: '1px solid #e5e7eb'
				}}>
					{faqItems.map((item, index) => (
						<FAQItem
							key={index}
							question={item.question}
							answer={item.answer}
						/>
					))}
				</div>
			</div>
		</section>
	);
} 