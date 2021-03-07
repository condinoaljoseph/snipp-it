import { ReactNode } from 'react';
import Header from './Header';
import { Box, SimpleGrid, Container } from '@chakra-ui/react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Box bg="gray.50" minH="100vh">
			<Header />
			<Container maxW={'container.lg'}>
				<SimpleGrid columns={2} spacing={10} pt={6}>
					<Box>{children}</Box>
					<Box>Hello</Box>
				</SimpleGrid>
			</Container>
		</Box>
	);
};

export default Layout;
