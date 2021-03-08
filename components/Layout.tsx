import Link from 'next/link';
import { ReactNode } from 'react';
import { useSession } from 'next-auth/client';
import Header from './Header';
import { Box, Flex, Container, Avatar, Spacer, Text } from '@chakra-ui/react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [session, loading] = useSession();

	return (
		<Box bg="gray.50" minH="100vh">
			<Header />
			<Container maxW={'container.lg'} pos="relative" pt={6}>
				<Box w="65%">{children}</Box>
				{session && (
					<Box
						maxW="320px"
						pl={6}
						pt={6}
						top={16}
						right={0}
						pos="fixed"
						h="100vh"
						mb="30px"
						left="1086px"
					>
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
								<Link href="/">
									<a>
										<Text fontWeight="bold" fontSize="xs">
											See All
										</Text>
									</a>
								</Link>
							</Flex>
							<Box mt={3}>
								<Flex alignItems="center" justifyContent="space-between" mb={3}>
									<Box>
										<Flex alignItems="center">
											<Avatar
												name="Dan Abrahmov"
												src="https://bit.ly/dan-abramov"
												size="sm"
											/>
											<Box pl={2}>
												<Text fontWeight="bold" fontSize="xs">
													dan_abramov
												</Text>
												<Text color="gray.500" fontSize="xs">
													Followed by ry
												</Text>
											</Box>
										</Flex>
									</Box>
									<Link href="/">
										<a>
											<Text fontWeight="bold" fontSize="xs" color="blue.400">
												Follow
											</Text>
										</a>
									</Link>
								</Flex>
								<Flex alignItems="center" justifyContent="space-between" mb={3}>
									<Box>
										<Flex alignItems="center">
											<Avatar
												name="Prosper Otemuyiwa"
												src="https://bit.ly/prosper-baba"
												size="sm"
											/>
											<Box pl={2}>
												<Text fontWeight="bold" fontSize="xs">
													prosper_otemuyiwa
												</Text>
												<Text color="gray.500" fontSize="xs">
													Followed by elpmid
												</Text>
											</Box>
										</Flex>
									</Box>
									<Link href="/">
										<a>
											<Text fontWeight="bold" fontSize="xs" color="blue.400">
												Follow
											</Text>
										</a>
									</Link>
								</Flex>
								<Flex alignItems="center" justifyContent="space-between" mb={3}>
									<Box>
										<Flex alignItems="center">
											<Avatar
												name="Ryan Florence"
												src="https://bit.ly/ryan-florence"
												size="sm"
											/>
											<Box pl={2}>
												<Text fontWeight="bold" fontSize="xs">
													ry
												</Text>
												<Text color="gray.500" fontSize="xs">
													Followed by vindecodex
												</Text>
											</Box>
										</Flex>
									</Box>
									<Link href="/">
										<a>
											<Text fontWeight="bold" fontSize="xs" color="blue.400">
												Follow
											</Text>
										</a>
									</Link>
								</Flex>
								<Flex alignItems="center" justifyContent="space-between" mb={3}>
									<Box>
										<Flex alignItems="center">
											<Avatar
												name="Kent Dodds"
												src="https://bit.ly/kent-c-dodds"
												size="sm"
											/>
											<Box pl={2}>
												<Text fontWeight="bold" fontSize="xs">
													kent
												</Text>
												<Text color="gray.500" fontSize="xs">
													Followed by condinoaj
												</Text>
											</Box>
										</Flex>
									</Box>
									<Link href="/">
										<a>
											<Text fontWeight="bold" fontSize="xs" color="blue.400">
												Follow
											</Text>
										</a>
									</Link>
								</Flex>
								<Flex alignItems="center" justifyContent="space-between" mb={3}>
									<Box>
										<Flex alignItems="center">
											<Avatar
												name="Kola Tioluwani"
												src="https://bit.ly/tioluwani-kolawole"
												size="sm"
											/>
											<Box pl={2}>
												<Text fontWeight="bold" fontSize="xs">
													kola
												</Text>
												<Text color="gray.500" fontSize="xs">
													Followed by vindecodex
												</Text>
											</Box>
										</Flex>
									</Box>
									<Link href="/">
										<a>
											<Text fontWeight="bold" fontSize="xs" color="blue.400">
												Follow
											</Text>
										</a>
									</Link>
								</Flex>
							</Box>
						</Box>
					</Box>
				)}
			</Container>
		</Box>
	);
};

export default Layout;
