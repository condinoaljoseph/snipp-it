import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma';
import { PostProps } from '../../components/Post';

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
	return <h1>{JSON.stringify(props)}</h1>;
};

export default Post;
