import Head from 'next/head';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';

export default function Home({ feed }) {
	return (
		<div>
			<Head>
				<title>snipp-it</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>{JSON.stringify(feed)}</main>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const feed = await prisma.post.findMany({
		where: { published: true },
		include: {
			author: {
				select: { name: true }
			}
		}
	});

	return { props: { feed } };
};
