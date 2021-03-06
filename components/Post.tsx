import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import { SkeletonText } from '@chakra-ui/react';

export type PostProps = {
	id: number;
	title: string;
	author: {
		name: string;
		email: string;
	} | null;
	content: string;
	published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
	const [session, loading] = useSession();

	return (
		<SkeletonText isLoaded={loading}>
			<h1>
				<Link href={`/p/${post.id}`}>
					<a>
						{post.title}
						dfsdfsdfsdfdfsdfsdfsdfdfsdfsdfsdfdfsdfsdfsdfdfsdfsdfsdfdfsdfsdfsdfdfsdfsdfsdfdfsdfsdfsdfdfsdfsdfsdfdfsdfsdfsdf
					</a>
				</Link>
			</h1>
		</SkeletonText>
	);
};

export default Post;
