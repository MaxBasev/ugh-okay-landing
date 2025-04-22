import Hero from '@/components/Hero';
import WhyItWorks from '@/components/WhyItWorks';
import Screenshots from '@/components/Screenshots';
import FunQuotes from '@/components/FunQuotes';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main>
			<Hero />
			<WhyItWorks />
			<Screenshots />
			<FunQuotes />
			<FAQ />
			<Footer />
		</main>
	);
}
