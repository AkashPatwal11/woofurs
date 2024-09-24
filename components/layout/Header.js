import { Center, Flex } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"
import { nanoid } from 'nanoid';
import logo from "../../resources/images/woofurs-logo-v.svg"
import ContainerNavHeader from './ContainerNavHeader';
import ContainerNavHeaderResponsive from './ContainerNavHeaderResponsive';


function Header() {

	const nav = [
		{
			id: nanoid(),
			url: '/#home',
			title: 'home',
		},
		{
			id: nanoid(),
			url: '/#why',
			title: 'why',
		},
		{
			id: nanoid(),
			url: '/#features',
			title: 'features',
		},
		// {
		// 	id: nanoid(),
		// 	url: '/#reviews',
		// 	title: 'reviews',
		// },
		{
			id: nanoid(),
			url: '/#values',
			title: 'values',
		},
		{
			//*id: nanoid(),
			//*url: '/shop',
			//*title: 'shop',
			
		},
	]

	const phoneNumber = "+91 9743127063"

	return (
		<Flex
			as="header"
			w={'full'}
			h="80px"
			px={['16px', '16px', '16px', '78px', '78px']}
			justifyContent='space-between'
			position="fixed"
			bgColor="white"
			zIndex="24"
		>
			<Center>
				<Image width="full" src={logo.src} alt={'logo'} />
			</Center>
			<ContainerNavHeaderResponsive data={nav} phoneNumber={phoneNumber} />
			<ContainerNavHeader data={nav} phoneNumber={phoneNumber} />
		</Flex >
	);
}

export default Header;
