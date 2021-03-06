import Head from 'next/head';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import Post, { PostProps } from '../components/Post';
import Header from '../components/Header';
import { Flex, Container } from '@chakra-ui/react';

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

export const Home: React.FC<{ feed: PostProps[] }> = ({ feed }) => {
	return (
		<>
			<Head>
				<title>snipp-it</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Flex>
				<Container maxW={'container.lg'}>
					{feed.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</Container>
			</Flex>
		</>
	);
};

export default Home;
