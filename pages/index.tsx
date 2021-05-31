import { GetStaticProps } from 'next';
import Head from 'next/head';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Post, { PostProps } from '@/components/Post';
import { UserProps } from '@/components/Aside';
import Layout from '@/components/Layout';

export const getStaticProps: GetStaticProps = async () => {
	const data = await fetcher('http://localhost:3000/api/');
	const { feed, users } = data;

	return { props: { feed, users } };
};

export const Home: React.FC<{ feed: PostProps[]; users: UserProps[] }> = ({
	feed,
	users
}) => {
	const { data } = useSWR('/api', fetcher, { initialData: { feed, users } });

	return (
		<>
			<Head>
				<title>snipp-it</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout users={data.users}>
				{data.feed.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</Layout>
		</>
	);
};

export default Home;
