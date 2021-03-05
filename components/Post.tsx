import React from 'react';
import Link from 'next/link';

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
	return (
		<h1>
			<Link href={`/p/${post.id}`}>
				<a>{post.title}</a>
			</Link>
		</h1>
	);
};

export default Post;
