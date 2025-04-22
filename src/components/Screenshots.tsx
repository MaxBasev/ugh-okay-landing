"use client";

export default function Screenshots() {
	const screenshots = [
		{
			id: 'main',
			title: 'Main screen',
			tagline: 'Your panic button, reimagined.',
			color: '#9B00FF',
			bgColor: '#f9f5ff',
			textColor: '#222222',
			iconText: '✅'
		},
		{
			id: 'add',
			title: 'Add activities',
			tagline: 'Because your brain refuses to.',
			color: '#FF4FDB',
			bgColor: '#fff5fb',
			textColor: '#222222',
			iconText: '📝'
		},
		{
			id: 'about',
			title: 'Offline info',
			tagline: 'Just vibes. No cloud.',
			color: '#f3f4f6',
			bgColor: '#f9fafb',
			textColor: '#222222',
			iconText: 'ℹ️'
		},
	];

	return (
		<section style={{
			padding: '6rem 0',
			backgroundColor: '#FFFFFF',
			background: 'linear-gradient(0deg, #f9fafb 0%, #FFFFFF 100%)'
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
					Screenshots
				</h2>

				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
					gap: '3rem',
					maxWidth: '1100px',
					margin: '0 auto'
				}}>
					{screenshots.map((screenshot) => (
						<div
							key={screenshot.id}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'flex-start',
								textAlign: 'center'
							}}
						>
							{/* Phone Mockup */}
							<div style={{
								position: 'relative',
								width: '270px',
								height: '550px',
								borderRadius: '36px',
								backgroundColor: '#222222',
								padding: '12px',
								boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
								overflow: 'hidden',
								marginBottom: '1.5rem',
								transition: 'transform 0.3s ease, box-shadow 0.3s ease'
							}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'scale(1.03) rotate(1deg)';
									e.currentTarget.style.boxShadow = '0 35px 60px -15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1) inset';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
									e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1) inset';
								}}
							>
								{/* Notch */}
								<div style={{
									position: 'absolute',
									top: '0',
									left: '50%',
									transform: 'translateX(-50%)',
									width: '150px',
									height: '28px',
									backgroundColor: '#222222',
									borderBottomLeftRadius: '14px',
									borderBottomRightRadius: '14px',
									zIndex: '1'
								}}></div>

								{/* Screen Content */}
								<div style={{
									backgroundColor: screenshot.bgColor,
									borderRadius: '26px',
									width: '100%',
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									overflow: 'hidden',
									position: 'relative'
								}}>
									<div style={{
										fontSize: '6rem',
										marginBottom: '1rem',
										filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
									}}>
										{screenshot.iconText}
									</div>

									{/* App UI Elements */}
									<div style={{
										backgroundColor: 'white',
										borderRadius: '16px',
										width: '80%',
										padding: '1rem',
										boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
										marginBottom: '1rem'
									}}>
										<div style={{
											height: '24px',
											width: '70%',
											backgroundColor: screenshot.color,
											opacity: '0.2',
											borderRadius: '6px',
											margin: '0 auto 0.75rem'
										}}></div>
										<div style={{
											height: '16px',
											width: '90%',
											backgroundColor: screenshot.color,
											opacity: '0.1',
											borderRadius: '4px',
											margin: '0 auto'
										}}></div>
									</div>

									<div style={{
										backgroundColor: screenshot.color,
										color: 'white',
										borderRadius: '100px',
										padding: '0.75rem 1.5rem',
										fontSize: '1rem',
										fontWeight: '600',
										boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
										textTransform: 'uppercase',
										letterSpacing: '0.5px'
									}}>
										Tap Here
									</div>
								</div>
							</div>

							{/* Caption */}
							<h3 style={{
								fontSize: '1.5rem',
								fontWeight: '600',
								marginBottom: '0.5rem',
								color: '#222222'
							}}>
								{screenshot.title}
							</h3>
							<p style={{
								color: '#666666',
								fontStyle: 'italic',
								fontSize: '1.125rem'
							}}>
								{screenshot.tagline}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
} 