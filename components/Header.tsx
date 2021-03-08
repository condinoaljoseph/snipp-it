import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';
import {
	Flex,
	Container,
	Box,
	IconButton,
	Spacer,
	Button,
	Avatar,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	Image,
	HStack
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
	const [session, loading] = useSession();

	return (
		<Flex direction="column">
			<Box flexBasis={50} />
			<Box borderWidth="1px" bg="white" pos="fixed" top={0} w="100%" zIndex={2}>
				<Container maxW={'container.lg'}>
					<Flex alignItems="center" h="50px">
						<Box>
							<Link href="/">
								<a>
									<Image src="/assets/snipp-it.png" alt="Snipp-it" maxW="55%" />
								</a>
							</Link>
						</Box>
						<Spacer />
						<Box>
							{!session ? (
								<Link href="/api/auth/signin">
									<Button variant="link" fontWeight="normal">
										Login
									</Button>
								</Link>
							) : (
								<HStack spacing="10px">
									<IconButton
										aria-label="Notification"
										icon={<EditIcon />}
										variant="outline"
										borderRadius="full"
										size="sm"
									/>
									<Menu flip={false}>
										<MenuButton>
											<Avatar
												size="sm"
												name="Dan Abrahmov"
												src={session.user.image}
											/>
										</MenuButton>
										<MenuList>
											<MenuItem>Profile</MenuItem>
											<MenuItem>Saved</MenuItem>
											<MenuItem>Settings</MenuItem>
											<MenuDivider />
											<MenuItem onClick={() => signOut()}>Log Out</MenuItem>
										</MenuList>
									</Menu>
								</HStack>
							)}
						</Box>
					</Flex>
				</Container>
			</Box>
		</Flex>
	);
};

export default Header;
