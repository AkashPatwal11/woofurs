import { Center, Flex } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"
import { nanoid } from 'nanoid';
import logo from "../../resources/images/woofurs-logo-v.png"
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
			url: '/#about',
			title: 'about',
		},
		{
			id: nanoid(),
			url: '/#services',
			title: 'services',
		},
		{
			id: nanoid(),
			url: '/#reviews',
			title: 'reviews',
		},
		{
			id: nanoid(),
			url: '/#pricing',
			title: 'pricing',
		},
		{
			id: nanoid(),
			url: '/shop',
			title: 'shop',
		},
	]

	const phoneNumber = "+91 8979819387"

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
				<Image width="full" h="140px" src={logo.src} alt={'logo'} />
			</Center>
			<ContainerNavHeaderResponsive data={nav} phoneNumber={phoneNumber} />
			<ContainerNavHeader data={nav} phoneNumber={phoneNumber} />
		</Flex >
	);
}

export default Header;
