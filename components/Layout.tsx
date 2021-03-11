import { ReactNode } from 'react';
import Header from './Header';
import Aside, { UserProps } from './Aside';
import { Box, Flex, Container, Spacer } from '@chakra-ui/react';

const Layout: React.FC<{ children: ReactNode; users?: UserProps[] }> = ({
	children,
	users
}) => {
	return (
		<Box bg="gray.50" minH="100vh">
			<Header />
			<Container maxW={'container.lg'} pt={6}>
				<Flex>
					<Box flexBasis="65%">{children}</Box>
					<Spacer />
					<Aside users={users} />
				</Flex>
			</Container>
		</Box>
	);
};

export default Layout;
