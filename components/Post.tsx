import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import {
	Stack,
	Button,
	Avatar,
	Flex,
	Text,
	Box,
	SkeletonCircle,
	SkeletonText
} from '@chakra-ui/react';
import { CheckIcon, ChatIcon } from '@chakra-ui/icons';

export type PostProps = {
	id: number;
	title: string;
	author: {
		name: string;
		email: string;
		image: string;
	} | null;
	content: string;
	published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
	const [session, loading] = useSession();

	return (
		<>
			<Box borderWidth="1px" borderRadius="sm" mb={4} bg="white">
				<Box p={4}>
					<Link href={`/p/${post.id}`}>
						<a>
							<Flex alignItems="center">
								<SkeletonCircle size="10" isLoaded={!loading}>
									<Avatar
										name={post.author.name}
										src={post.author.image}
										size="sm"
									/>
								</SkeletonCircle>
								<Box pl={2}>
									<SkeletonText isLoaded={!loading} noOfLines={2}>
										<Text fontWeight="bold" fontSize="xs">
											{post.author.name}
										</Text>
										<Text fontSize="xs" color="gray.600">
											Mar 4 (2 days ago)
										</Text>
									</SkeletonText>
								</Box>
							</Flex>
						</a>
					</Link>
				</Box>
				<Box pl={16} pr={4} pb={4}>
					<SkeletonText noOfLines={3} isLoaded={!loading}>
						<Link href={`/p/${post.id}`}>
							<a>
								<Text
									fontWeight="extrabold"
									fontSize="2xl"
									lineHeight="125%"
									mb={2}
								>
									{post.content}
								</Text>
							</a>
						</Link>

						<Text fontSize="sm" color="gray.600">
							#motivation #css <div id="html"></div>
						</Text>

						<Stack direction="row" spacing={0} align="center" mt={3} ml={-3}>
							<Button
								leftIcon={<CheckIcon />}
								colorScheme="teal"
								size="sm"
								variant="ghost"
							>
								94 reactions
							</Button>
							<Button
								leftIcon={<ChatIcon />}
								colorScheme="teal"
								size="sm"
								variant="ghost"
							>
								12 comments
							</Button>
						</Stack>
					</SkeletonText>
				</Box>
			</Box>
		</>
	);
};

export default Post;
