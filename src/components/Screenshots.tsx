"use client";
import { useState, useEffect } from 'react';

export default function Screenshots() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);

	// Анимация при загрузке
	useEffect(() => {
		setIsLoaded(true);
	}, []);

	// Автоматическая смена скриншота каждые 5 секунд
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % screenshots.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const screenshots = [
		{
			id: 'main',
			title: 'Main screen',
			tagline: 'This is what clarity looks like.',
			color: 'var(--primary)',
			iconText: '✅'
		},
		{
			id: 'add',
			title: 'Add activities',
			tagline: 'Yes, this button fixes your life.',
			color: 'var(--secondary)',
			iconText: '📝'
		},
		{
			id: 'about',
			title: 'Offline access',
			tagline: 'Like the 90s, but more purple.',
			color: '#4F46E5',
			iconText: 'ℹ️'
		},
	];

	return (
		<section style={{
			padding: '8rem 1.5rem',
			backgroundColor: '#0D0D0D',
			backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.1), transparent 40%)',
			position: 'relative',
			overflow: 'hidden'
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
						fontSize: '3rem',
						fontWeight: 'bold',
						textAlign: 'center',
						marginBottom: '2.5rem',
						color: 'var(--text)'
					}}>
						<span className="gradient-text">Screenshots</span>
					</h2>

					<p style={{
						fontSize: '1.25rem',
						color: 'var(--muted)',
						textAlign: 'center',
						maxWidth: '600px',
						margin: '0 auto 5rem',
						lineHeight: '1.6'
					}}>
						Feast your eyes on these masterpieces of minimalism.
					</p>
				</div>

				{/* Карусель скриншотов */}
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '3rem',
					position: 'relative',
					height: '600px'
				}}>
					{screenshots.map((screenshot, index) => (
						<div
							key={screenshot.id}
							style={{
								position: 'absolute',
								top: '0',
								left: '50%',
								transform: `translateX(-50%) scale(${activeIndex === index ? 1 : 0.8}) translateY(${activeIndex === index ? 0 : activeIndex > index ? '-20px' : '20px'})`,
								opacity: activeIndex === index ? 1 : 0.4,
								zIndex: activeIndex === index ? 2 : 1,
								transition: 'all 0.6s ease',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								width: '100%',
								maxWidth: '350px'
							}}
						>
							{/* Телефон с макетом */}
							<div className="quote-card" style={{
								width: '300px',
								height: '550px',
								marginBottom: '2rem',
								padding: '0',
								overflow: 'hidden',
								borderRadius: '2rem',
								boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
								position: 'relative',
								background: '#161616'
							}}>
								{/* Notch */}
								<div style={{
									position: 'absolute',
									top: '0',
									left: '50%',
									transform: 'translateX(-50%)',
									width: '150px',
									height: '28px',
									backgroundColor: '#000',
									borderBottomLeftRadius: '14px',
									borderBottomRightRadius: '14px',
									zIndex: 3
								}}></div>

								{/* Контент экрана */}
								<div style={{
									backgroundColor: 'var(--bg)',
									padding: '2rem 1rem',
									height: '100%',
									width: '100%',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									position: 'relative',
									overflow: 'hidden'
								}}>
									{/* Блики на экране */}
									<div style={{
										position: 'absolute',
										top: '-50%',
										left: '-50%',
										width: '200%',
										height: '200%',
										background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent 60%)',
										pointerEvents: 'none'
									}}></div>

									{/* Лого приложения */}
									<div style={{
										fontSize: '4rem',
										marginBottom: '2rem',
										filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
									}}>
										{screenshot.iconText}
									</div>

									{/* Заголовок экрана */}
									<div style={{
										background: 'linear-gradient(135deg, #1F1F1F, #252525)',
										padding: '1.5rem',
										borderRadius: '1rem',
										width: '80%',
										textAlign: 'center',
										marginBottom: '2rem',
										boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)'
									}}>
										<h3 style={{
											color: 'var(--text)',
											fontSize: '1.25rem',
											fontWeight: '600',
											marginBottom: '0.5rem'
										}}>
											{screenshot.title}
										</h3>
										<div style={{
											height: '4px',
											width: '40px',
											background: `linear-gradient(to right, ${screenshot.color}, transparent)`,
											margin: '0.5rem auto'
										}}></div>
									</div>

									{/* Кнопка действия */}
									<button style={{
										padding: '1rem 2rem',
										borderRadius: '100px',
										border: 'none',
										background: `linear-gradient(135deg, ${screenshot.color}, ${screenshot.color}CC)`,
										color: 'white',
										fontWeight: '600',
										fontSize: '1rem',
										cursor: 'default',
										boxShadow: `0 10px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px ${screenshot.color}33`,
									}}>
										Just Tap Me
									</button>
								</div>
							</div>

							{/* Подпись карточки */}
							<div style={{
								textAlign: 'center',
								maxWidth: '300px'
							}}>
								<p style={{
									fontSize: '1.25rem',
									fontWeight: '600',
									color: 'var(--text)',
									margin: '0 0 0.5rem'
								}}>
									{screenshot.title}
								</p>
								<p style={{
									fontSize: '1rem',
									fontStyle: 'italic',
									color: 'var(--secondary)',
									marginTop: '0.5rem'
								}}>
									{screenshot.tagline}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Индикаторы */}
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					gap: '1rem',
					marginTop: '2rem'
				}}>
					{screenshots.map((_, index) => (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							aria-label={`Screenshot ${index + 1}`}
							style={{
								width: '2.5rem',
								height: '0.375rem',
								borderRadius: '1rem',
								backgroundColor: activeIndex === index
									? 'var(--primary)'
									: 'rgba(255, 255, 255, 0.1)',
								border: 'none',
								cursor: 'pointer',
								transition: 'all 0.3s ease'
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
} 