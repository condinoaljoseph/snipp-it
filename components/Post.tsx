import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/client';
import {
	Button,
	Avatar,
	Flex,
	Text,
	Box,
	SkeletonCircle,
	SkeletonText,
	IconButton,
	HStack,
	Spacer
} from '@chakra-ui/react';
import { ChatIcon, AttachmentIcon } from '@chakra-ui/icons';

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
				<Box px={4} py={3}>
					<Link href={`/u/${post.author.name}`} passHref>
						<a>
							<Flex alignItems="center">
								<SkeletonCircle isLoaded={!loading}>
									<Avatar
										name={post.author.name}
										src={post.author.image}
										size="sm"
									/>
								</SkeletonCircle>
								<Box pl={3}>
									<SkeletonText isLoaded={!loading} noOfLines={2}>
										<Text fontWeight="bold" fontSize="sm">
											{post.author.name}
										</Text>
									</SkeletonText>
								</Box>
							</Flex>
						</a>
					</Link>
				</Box>
				<Box>
					<Image
						src="/assets/example.png"
						alt="code"
						width={1498}
						height={985}
						layout="responsive"
					/>
				</Box>
				<Box px={5} py={4}>
					<Flex alignItems="center" ml={-2} mt={-2}>
						<HStack spacing="5px">
							<Link href={`/p/${post.id}`} passHref>
								<IconButton
									aria-label="Share"
									icon={<ChatIcon />}
									variant="link"
									borderRadius="full"
									size="sm"
								/>
							</Link>
						</HStack>
						<Spacer />
						<IconButton
							mr={-2}
							aria-label="Share"
							icon={<AttachmentIcon />}
							variant="unstyled"
							borderRadius="full"
							size="sm"
						/>
					</Flex>
					<Button size="sm" variant="unstyled" fontWeight="bold">
						94 likes
					</Button>
					<SkeletonText isLoaded={!loading} noOfLines={2}>
						<Text fontSize="sm">{post.content}</Text>
					</SkeletonText>
					<Text fontSize="xs" color="gray.500" mt={2}>
						5 DAYS AGO
					</Text>
				</Box>
			</Box>
		</>
	);
};

export default Post;
