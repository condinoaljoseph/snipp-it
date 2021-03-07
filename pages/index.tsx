import Head from 'next/head';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import Post, { PostProps } from '../components/Post';
import Layout from '../components/Layout';

export const getStaticProps: GetStaticProps = async () => {
	const feed = await prisma.post.findMany({
		where: { published: true },
		include: {
			author: {
				select: { name: true, image: true }
			}
		}
	});

	return { props: { feed } };
};

export const Home: React.FC<{ feed: PostProps[] }> = ({ feed }) => {
	return (
		<>
			<Head>
				<title>snipp-it</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				{feed.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</Layout>
		</>
	);
};

export default Home;
