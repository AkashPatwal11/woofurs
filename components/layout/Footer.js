import React from 'react';
import { Box, Flex, Heading, Stack, Text, Link } from '@chakra-ui/layout';
import logo from '../../resources/images/woofurs-logo-v.png'
import { Image } from '@chakra-ui/image';
import Facebook from '@components/social_networks/Facebook';
import Instagram from '@components/social_networks/Instagram';
import Linkedin from '@components/social_networks/Linkedin';
import ContainerSocialNetworks from '@components/social_networks/ContainerSocialNetworks';
import { Input } from '@chakra-ui/input';
import Btn from '@components/Btn';
import { nanoid } from 'nanoid';


function Footer() {

    const info = {
        about: [
            {
                id: nanoid(),
                title: "Bengaluru, India",
            },
            {
                id: nanoid(),
                title: "care@woofurs.com",
            },
            {
                id: nanoid(),
                title: "+91 9743127063",
            }

        ],
        quickLinks: [
            {
                id: nanoid(),
                title: "Dog Boarding Services",
            },
            {
                id: nanoid(),
                title: "Cat Boarding Services",
            },
            {
                id: nanoid(),
                title: "Spa and Grooming Services",
            },
        ]
    }

    const socialNetworks = [
        {
            id: nanoid(),
            socialNetwork: 'Facebook',
            iconSvg: <Facebook />,
            url: 'https://www.facebook.com/profile.php?id=61563482695848',
            pl: '6px'
        },
        {
            id: nanoid(),
            socialNetwork: 'Instagram',
            iconSvg: <Instagram />,
            url: 'https://www.instagram.com/bellyrub__club',
        },
        {
            id: nanoid(),
            socialNetwork: 'Linkedin',
            iconSvg: <Linkedin />,
            url: 'https://www.linkedin.com/company/woofurs',
        }
    ]


    return (
        <Flex
            bgColor="transparent"
            mt="40px"
            px={['0px', '0px', '0px', '78px', '78px']}
            direction={['column', 'column', 'column', 'row', 'row']}
            flexWrap="wrap"
            gridGap={['20px', '20px', '20px', '100px', '100px']}
            justifyContent={['center', 'center', 'center', 'center', 'space-between']}
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
            textAlign={['center', 'center', 'center', 'left', 'left']}
            paddingBlockEnd="26px"
        >
            <Stack position={"relative"} top={"-30"}>
                <Image src={logo.src} w="196px" />
                <Text as="strong" fontSize="inherit" fontWeight="inherit" >Copyright © 2024 Woofurs </Text> <br />
            </Stack>
            <Stack gridGap="2px" >
                <Heading as="h3" color="#ed6436" fontSize="23px" >About</Heading>
                {
                    info.about.map(e => <Box key={e.id} >{e.title}</Box>)
                }
            </Stack>
            <Stack gridGap="2px" >
                <Heading as="h3" color="#ed6436" fontSize="23px" >Quick Links</Heading>
                {
                    info.quickLinks.map(e => <Box key={e.id} >{e.title}</Box>)
                }
            </Stack>
            <Stack >
                <Link href="https://chat.whatsapp.com/BvC4FihB7Qv18m283rkoV6" target='_blank' style={{ textDecoration: 'none' }}>
                    <Btn
                        fSize={'18px'}
                        letterSpacing={'1.2px'}
                        title={'Join our Community'}
                        borderTopEndRadius={'none'}
                        change={true}
                        colorHover={'#ed6436'}
                        color={'white'}
                        width={'200px'}
                        gap={'20px'}
                        fw={'700'}
                        
                    />
                </Link>
                <ContainerSocialNetworks data={socialNetworks} mtSize={'29px !important'} gap={'14px'} />

            </Stack>
        </Flex>
    );
}

export default Footer;