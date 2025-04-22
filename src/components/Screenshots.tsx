"use client";

export default function Screenshots() {
	const screenshots = [
		{
			id: 'main',
			title: 'Главный экран',
			color: '#9B00FF',
			textColor: '#FFFFFF',
			iconText: '✅'
		},
		{
			id: 'add',
			title: 'Добавление активности',
			color: '#FF4FDB',
			textColor: '#FFFFFF',
			iconText: '📝'
		},
		{
			id: 'about',
			title: 'О приложении',
			color: '#f3f4f6',
			textColor: '#222222',
			iconText: 'ℹ️'
		},
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
					Screenshots
				</h2>

				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
					gap: '1.5rem',
					maxWidth: '1000px',
					margin: '0 auto'
				}}>
					{screenshots.map((screenshot) => (
						<div
							key={screenshot.id}
							style={{
								backgroundColor: screenshot.color,
								borderRadius: '0.75rem',
								overflow: 'hidden',
								boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
								width: '250px',
								height: '500px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								margin: '0 auto',
								border: '1px solid #e5e7eb'
							}}
						>
							<div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{screenshot.iconText}</div>
							<div style={{ textAlign: 'center', padding: '0 1rem' }}>
								<h3 style={{
									fontSize: '1.125rem',
									fontWeight: '600',
									marginBottom: '0.5rem',
									color: screenshot.textColor
								}}>
									{screenshot.title}
								</h3>
								<p style={{ color: screenshot.textColor, opacity: '0.8' }}>
									Здесь будет скриншот приложения
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 