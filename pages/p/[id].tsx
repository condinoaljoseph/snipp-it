import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma';
import { PostProps } from '../../components/Post';
import { useSession } from 'next-auth/client';
import { Skeleton } from '@chakra-ui/react';
import Layout from '../../components/Layout';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const post = await prisma.post.findUnique({
		where: {
			id: Number(params?.id) || -1
		},
		include: {
			author: {
				select: { name: true }
			}
		}
	});

	return {
		props: post
	};
};

const Post: React.FC<{ post: PostProps }> = (props) => {
	const [session, loading] = useSession();

	return (
		<Layout>
			<Skeleton isLoaded={!loading}>{JSON.stringify(props)}</Skeleton>
		</Layout>
	);
};

export default Post;
