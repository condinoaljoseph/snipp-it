import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';
import {
	Flex,
	Container,
	Box,
	Spacer,
	Button,
	Avatar,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider
} from '@chakra-ui/react';

const Header: React.FC = () => {
	const [session, loading] = useSession();
	console.log(session, 'hello');

	return (
		<Box paddingY={3} borderWidth="1px" bg="white">
			<Container maxW={'container.lg'}>
				<Flex alignItems="center">
					<Box>
						<Link href="/">
							<a>snipp-it</a>
						</Link>
					</Box>
					<Spacer />
					<Box>
						{!session ? (
							<Link href="/api/auth/signin">
								<Button colorScheme="teal" variant="link">
									Login
								</Button>
							</Link>
						) : (
							<Menu flip={false}>
								<MenuButton>
									<Avatar
										size="xs"
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
						)}
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
