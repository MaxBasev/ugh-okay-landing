"use client";

export default function WhyItWorks() {
	const reasons = [
		{ icon: '🧠', text: 'Uses your own list — not some guru\'s' },
		{ icon: '💤', text: 'Removes decision fatigue' },
		{ icon: '🧘', text: 'Doesn\'t guilt you' },
		{ icon: '✅', text: 'Rewards bare minimum effort' },
		{ icon: '🔕', text: 'Works offline, no distractions' },
	];

	return (
		<section style={{
			padding: '4rem 0',
			backgroundColor: '#f9fafb'
		}}>
			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				padding: '0 1rem'
			}}>
				<h2 style={{
					fontSize: '2.25rem',
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: '3rem',
					color: '#222222'
				}}>
					Why It Works
				</h2>

				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
					gap: '2rem',
					maxWidth: '72rem',
					margin: '0 auto'
				}}>
					{reasons.map((reason, index) => (
						<div
							key={index}
							style={{
								backgroundColor: '#FFFFFF',
								padding: '1.5rem',
								borderRadius: '0.5rem',
								boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
								display: 'flex',
								alignItems: 'flex-start',
								gap: '1rem',
								border: '1px solid #f3f4f6',
								transition: 'box-shadow 0.2s ease-in-out'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
							}}
						>
							<div style={{ fontSize: '2rem' }}>{reason.icon}</div>
							<p style={{ fontSize: '1.125rem', color: '#222222' }}>{reason.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 