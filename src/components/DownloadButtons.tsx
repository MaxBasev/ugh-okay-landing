"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DownloadButtons() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<section style={{
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
					gap: '1rem',
					flexWrap: 'wrap',
				}}>
					{/* App Store Button */}
					<Link
						href="#"
						className="btn-hover"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '0.5rem',
							backgroundColor: '#121212',
							color: '#FFFFFF',
							padding: '0.75rem 1.25rem',
							borderRadius: '12px',
							textDecoration: 'none',
							border: '1px solid rgba(255, 255, 255, 0.1)',
							boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
							transition: 'all 0.2s ease',
							minWidth: '180px',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-3px)';
							e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(0)';
							e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
						}}
					>
						<div style={{ fontSize: '1.75rem' }}>
							<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
								<path d="M16.02 11.583c-.015-1.947 1.603-2.891 1.677-2.937-0.917-1.333-2.339-1.515-2.839-1.531-1.198-0.125-2.359 0.708-2.969 0.708-0.615 0-1.552-0.693-2.557-0.672-1.297 0.021-2.505 0.761-3.172 1.922-1.375 2.38-0.349 5.891 0.974 7.817 0.661 0.943 1.438 1.995 2.458 1.958 0.995-0.041 1.365-0.635 2.568-0.635 1.193 0 1.542 0.635 2.583 0.609 1.068-0.016 1.745-0.953 2.391-1.906 0.766-1.089 1.073-2.156 1.088-2.214-0.026-0.011-2.078-0.792-2.099-3.151-0.016-1.563 1.276-2.328 1.333-2.359-0.734-1.068-1.865-1.182-2.266-1.208-1.167-0.078-2.172 0.675-2.734 0.675s-1.479-0.656-2.432-0.635c-1.256 0.021-2.422 0.734-3.068 1.859-1.323 2.297-0.339 5.698 0.938 7.568 0.635 0.917 1.391 1.943 2.375 1.906 0.953-0.037 1.318-0.615 2.479-0.615s1.479 0.615 2.479 0.594c1.026-0.016 1.682-0.927 2.297-1.854 0.74-1.052 1.036-2.089 1.052-2.141-0.021-0.0-2.005-0.766-2.026-3.031z" />
								<path d="M13.083 5.063c0.516-0.635 0.871-1.505 0.776-2.385-0.75 0.031-1.682 0.51-2.219 1.135-0.479 0.563-0.912 1.479-0.802 2.344 0.844 0.063 1.713-0.422 2.245-1.094z" />
							</svg>
						</div>
						<div style={{ textAlign: 'left' }}>
							<div style={{ fontSize: '0.65rem', lineHeight: '1', marginBottom: '0.25rem' }}>Download on the</div>
							<div style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: '1' }}>App Store</div>
						</div>
					</Link>

					{/* Google Play Button */}
					<Link
						href="#"
						className="btn-hover"
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '0.5rem',
							backgroundColor: '#121212',
							color: '#FFFFFF',
							padding: '0.75rem 1.25rem',
							borderRadius: '12px',
							textDecoration: 'none',
							border: '1px solid rgba(255, 255, 255, 0.1)',
							boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
							transition: 'all 0.2s ease',
							minWidth: '180px',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = 'translateY(-3px)';
							e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = 'translateY(0)';
							e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
						}}
					>
						<div style={{ fontSize: '1.75rem' }}>
							<svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor">
								<path d="M1.05469 0.708984C0.825521 0.979167 0.711132 1.36545 0.711132 1.86784V20.1322C0.711132 20.6346 0.825521 21.0208 1.05469 21.291L1.11979 21.3538L11.0339 11.4397V11.3571V11H11.0287L1.11979 1.08594L1.05469 0.708984Z" />
								<path d="M14.4208 14.8425L11.0339 11.4555V11V10.9873L14.4208 7.60034L14.5001 7.63997L18.5222 9.92187C19.6979 10.5994 19.6979 11.7006 18.5222 12.3833L14.5001 14.6651L14.4208 14.8425Z" />
								<path d="M14.4949 14.6651L11.0339 11.2041L1.05469 21.1833C1.42839 21.5955 2.0502 21.6378 2.76302 21.2256L14.4949 14.6651Z" />
								<path d="M14.4949 7.74288L2.76302 1.18229C2.0502 0.765462 1.42839 0.812826 1.05469 1.22498L11.0339 11.2041L14.4949 7.74288Z" />
							</svg>
						</div>
						<div style={{ textAlign: 'left' }}>
							<div style={{ fontSize: '0.65rem', lineHeight: '1', marginBottom: '0.25rem' }}>GET IT ON</div>
							<div style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: '1' }}>Google Play</div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
} 