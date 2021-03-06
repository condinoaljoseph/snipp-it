import Link from 'next/link';
import { signOut, useSession } from 'next-auth/client';
import {
	Flex,
	Container,
	Box,
	Spacer,
	Heading,
	Button
} from '@chakra-ui/react';

const Header: React.FC = () => {
	const [session, loading] = useSession();

	return (
		<Container maxW={'container.lg'} paddingY={2}>
			<Flex alignItems="center">
				<Box>
					<Heading size="md">&lt;snipp-it&gt;</Heading>
				</Box>
				<Spacer />
				<Box>
					{!session ? (
						<Link href="/api/auth/signin">
							<a>Log in</a>
						</Link>
					) : (
						<Button colorScheme="teal" mr="4" onClick={() => signOut()}>
							Log out
						</Button>
					)}
				</Box>
			</Flex>
		</Container>
	);
};

export default Header;
