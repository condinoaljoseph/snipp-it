import Head from 'next/head';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import Post, { PostProps } from '../components/Post';
import {
	Flex,
	Container,
	Box,
	Spacer,
	Heading,
	Button
} from '@chakra-ui/react';

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
		<div>
			<Head>
				<title>snipp-it</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxW={'container.lg'} paddingY={2}>
				<Flex alignItems="center">
					<Box>
						<Heading size="md">&lt;snipp-it&gt;</Heading>
					</Box>
					<Spacer />
					<Box>
						<Button colorScheme="teal" mr="4">
							Sign Up
						</Button>
						<Button colorScheme="teal" mr="4">
							Log in
						</Button>
						<Button colorScheme="teal">Toggle Dark</Button>
					</Box>
				</Flex>
			</Container>
			<Flex>
				<Container maxW={'container.lg'}>
					{feed.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</Container>
			</Flex>
		</div>
	);
};

export default Home;
