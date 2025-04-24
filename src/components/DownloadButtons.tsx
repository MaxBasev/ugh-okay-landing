"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DownloadButtons() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<section id="download" style={{
			padding: '0.5rem 1.5rem 2.5rem',
			textAlign: 'center',
			position: 'relative',
			overflow: 'hidden',
			background: 'var(--bg)',
			marginTop: '-1rem'
		}}>
			<div className={`${isLoaded ? 'animate-in' : ''}`} style={{
				maxWidth: '600px',
				margin: '0 auto',
				position: 'relative',
				zIndex: 1,
				opacity: isLoaded ? 1 : 0,
				transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
				transition: 'opacity 0.8s ease, transform 0.8s ease',
			}}>
				<h3 style={{
					fontSize: '1.25rem',
					fontWeight: '500',
					marginBottom: '1.25rem',
					color: 'var(--muted)',
				}}>
					Available on
				</h3>

				<div style={{
					display: 'flex',
					justifyContent: 'center',
					gap: '1.5rem',
					flexWrap: 'wrap',
					alignItems: 'center'
				}}>
					{/* App Store Button */}
					<Link
						href="https://apps.apple.com/kg/app/ugh-okay/id6744969077"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-hover"
						style={{
							display: 'inline-block',
							transition: 'all 0.2s ease',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-3px)';
							e.currentTarget.style.opacity = '0.9';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(0)';
							e.currentTarget.style.opacity = '1';
						}}
					>
						<Image
							src="/images/Download-on-the-App-Store-1.svg"
							alt="Download on the App Store"
							width={180}
							height={53}
							style={{
								filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))'
							}}
						/>
					</Link>

					{/* Google Play Button */}
					<Link
						href="#"
						className="btn-hover"
						style={{
							display: 'inline-block',
							transition: 'all 0.2s ease',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-3px)';
							e.currentTarget.style.opacity = '0.9';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(0)';
							e.currentTarget.style.opacity = '1';
						}}
					>
						<Image
							src="/images/GetItOnGooglePlay_Badge_Web_color_English.png"
							alt="Get it on Google Play"
							width={180}
							height={53}
							style={{
								filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))'
							}}
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}