import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Form from '../components/Form';

export default function Home({ imageTitle, imageUrl }) {
	let today = new Date();
	let endDate = new Date(2020, 8, 1);
	// One day Time in ms (milliseconds)
	const one_day = 1000 * 60 * 60 * 24;
	let daysLeft = Math.round(endDate.getTime() - today.getTime()) / one_day;
	let finalResult = daysLeft.toFixed(0);
	let formattedToday = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

	return (
		<div className='container'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1 className='title'>
					My attendance sheet for<br /> SELF-LEARNING
					<br />
				</h1>
				<section className='info'>
					<h2 className='subTitle'>Today is <span className='today'>{formattedToday}</span><br />
					There is <span className='daysLeft'>{finalResult}</span> days left before I can get a</h2>
					<img width='400' src='/images/gucci.jpg' title='Gucci bag' />
				</section>

				<Form />
				<div>
					<p>The sky looks like this today: </p>
					<img width='400' src={imageUrl} title={imageTitle} />
				</div>
			</main>

		</div>
	);
}



Home.getInitialProps = async (ctx) => {
	const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
	const data = await res.json();
	return {
		imageTitle: data.title,
		imageUrl: data.url
	};
};
