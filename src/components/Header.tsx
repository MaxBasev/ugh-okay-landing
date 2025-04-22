"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header style={{
			width: '100%',
			padding: '1.5rem 0',
			borderBottom: '1px solid #f3f4f6',
			backgroundColor: '#FFFFFF'
		}}>
			<div style={{
				maxWidth: '1200px',
				margin: '0 auto',
				padding: '0 1rem',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<Link href="/" style={{
					display: 'flex',
					alignItems: 'center',
					gap: '0.5rem',
					textDecoration: 'none'
				}}
					onMouseEnter={(e) => {
						e.currentTarget.style.opacity = '0.9';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.opacity = '1';
					}}
				>
					<div style={{ position: 'relative', width: '2.5rem', height: '2.5rem' }}>
						<Image
							src="/images/UghOkay-brain.png"
							alt="UghOkay Logo"
							fill
							style={{ objectFit: 'contain' }}
							priority
						/>
					</div>
					<span style={{
						fontSize: '1.5rem',
						fontWeight: 'bold',
						color: '#222222'
					}}>UghOkay</span>
				</Link>
			</div>
		</header>
	);
} 