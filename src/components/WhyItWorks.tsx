"use client";

export default function WhyItWorks() {
	const reasons = [
		{
			icon: '🧠',
			title: 'Your list, not some guru\'s',
			text: 'Because let\'s be honest, that productivity guru is probably procrastinating too.'
		},
		{
			icon: '💤',
			title: 'No decision fatigue',
			text: 'We decide what to show you. Blame us if it\'s "drink water" again.'
		},
		{
			icon: '🧘',
			title: 'Zero guilt trips',
			text: 'Your mom already does that for free. We won\'t compete with her.'
		},
		{
			icon: '✅',
			title: 'Bare minimum = win',
			text: 'Did one thing? Congratulations, you\'re basically Elon Musk now.'
		},
		{
			icon: '🔕',
			title: 'Offline & distraction-free',
			text: 'No notifications, no cloud, no "Please update to version 73.1.4"'
		},
	];

	return (
		<section style={{
			padding: '6rem 0',
			backgroundColor: '#f9fafb'
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
					Why It Works
				</h2>

				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
					gap: '2rem',
					maxWidth: '1100px',
					margin: '0 auto'
				}}>
					{reasons.map((reason, index) => (
						<div
							key={index}
							style={{
								backgroundColor: '#FFFFFF',
								padding: '2rem',
								borderRadius: '1rem',
								boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
								border: '1px solid #f0f0f0',
								height: '100%',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-8px)';
								e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.08)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
							}}
						>
							<div style={{
								fontSize: '4rem',
								marginBottom: '1.25rem',
								transform: 'rotate(-5deg)',
								filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.1))'
							}}>{reason.icon}</div>
							<h3 style={{
								fontSize: '1.5rem',
								fontWeight: '600',
								color: '#222222',
								marginBottom: '0.75rem'
							}}>{reason.title}</h3>
							<p style={{
								fontSize: '1.125rem',
								color: '#666666',
								lineHeight: '1.5'
							}}>{reason.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 