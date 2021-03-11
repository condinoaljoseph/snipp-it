import Link from 'next/link';
import { useSession } from 'next-auth/client';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

export type UserProps = {
	id: number;
	name: string;
	email: string;
	image: string;
};

const Aside: React.FC<{ users: UserProps[] }> = ({ users }) => {
	const [session, loading] = useSession();

	return session ? (
		<Box flexBasis="35%" pl={8} pt={6} h="100vh" mb="30px" left="1086px">
			<Box>
				<Flex alignItems="center">
					<Avatar name={session.user.name} src={session.user.image} />
					<Box pl={4}>
						<Text fontWeight="bold" fontSize="sm">
							{session.user.name}
						</Text>
						<Text color="gray.500" fontSize="xs">
							{session.user.email || 'email not verified'}
						</Text>
					</Box>
				</Flex>
			</Box>
			<Box mt={6}>
				<Flex alignItems="center" justifyContent="space-between">
					<Text color="gray.500" fontWeight="bold" fontSize="sm">
						Suggestions for you
					</Text>
					<Link href="/" passHref>
						<a>
							<Text fontWeight="bold" fontSize="xs">
								See All
							</Text>
						</a>
					</Link>
				</Flex>
				<Box mt={3}>
					{users &&
						users.map(
							({ name, image, email }) =>
								name !== session.user.name && (
									<Flex
										alignItems="center"
										justifyContent="space-between"
										mb={3}
									>
										<Box>
											<Flex alignItems="center">
												<Avatar name={name} src={image} size="sm" />
												<Box pl={2}>
													<Text fontWeight="bold" fontSize="xs">
														{name}
													</Text>
													<Text color="gray.500" fontSize="xs">
														{email || 'email not verified'}
													</Text>
												</Box>
											</Flex>
										</Box>
										<Link href="/" passHref>
											<a>
												<Text fontWeight="bold" fontSize="xs" color="blue.400">
													Follow
												</Text>
											</a>
										</Link>
									</Flex>
								)
						)}
				</Box>
			</Box>
		</Box>
	) : null;
};

export default Aside;
