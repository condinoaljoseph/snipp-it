import Head from 'next/head';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import Post, { PostProps } from '../components/Post';
import { UserProps } from '../components/Aside';
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

	const users = await prisma.user.findMany({
		take: 10,
		select: { id: true, name: true, email: true, image: true }
	});

	return { props: { feed, users } };
};

export const Home: React.FC<{ feed: PostProps[]; users: UserProps[] }> = ({
	feed,
	users
}) => {
	return (
		<>
			<Head>
				<title>snipp-it</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout users={users}>
				{feed.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</Layout>
		</>
	);
};

export default Home;
