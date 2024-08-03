import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import CloudRightImage2 from '@components/clouds/CloudRightImage2'
import BoneIcon from '@icons/BoneIcon';
import bgImage from '../../../resources/images/image-background-h.jpg'
import PhoneIcon from '@icons/PhoneIcon';
import AlarmClockIcon from '@icons/AlarmClockIcon';
import BallIcon from '@icons/BallIcon';
import { nanoid } from 'nanoid';
import Card from './Card';
import bgImg from '../../../resources/images/checkInTime-bgImage.png';

function Section9() {

    const data = [
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Innovation',
            description: `Continuously improving our AI to better serve pets and their parents`
        },
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Compassion',
            description: `Putting the well-being of pets at the heart of everything we do`
        },
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Accessibility',
            description: `Making expert pet care available to all, anytime, anywhere`
        },
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Community',
            description: `Fostering a supportive network of pet lovers`
        },
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Education',
            description: `Empowering pet parents with knowledge and resources`
        },
    ]

    return (
        <Flex
            w="full"
            className="scroll-mt"
            justifyContent={['center', 'center', 'center', 'space-between', 'space-between',]}
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
            pl={['0px', '0px', '0px', '78px', '78px']}
            textAlign={['center', 'center', 'center', 'left', 'left']}
            flexDirection={['column', 'column', 'column', 'row', 'row']}
            pt="80px"
        >

            <Box w="full" >
                <Heading fontSize={['50px', '50px', '70px', '70px', '70px']} fontWeight="700" mt="60px" >
                    What Drives <Text as="strong" fontSize="inherit" fontWeight="inherit" color="#ED6436">Us</Text>
                </Heading>
                <Flex direction="column" pt="77px" gridGap="44px" >

                    {
                        data.map(e => <Card key={e.id} data={e} />)
                    }

                </Flex>
                <Flex
                    w="260px"
                    mt={['0px', '0px', '0px', '30px', '30px']}
                    cursor="pointer"
                    transition="transform .3s ease"
                    position="relative"
                    mx={['auto', 'auto', 'auto', '0px', '0px']}
                    justifyContent="center"
                    _hover={{
                        transform: "rotate(10deg)"

                    }} >
                </Flex>
            </Box>

            <Box w={['100%', '100%', '100%', '160%', '160%']} maxW="1000px" position="relative" >
                <CloudRightImage2
                    fill={'#DF7D8C'}
                />

                <Box position="absolute" zIndex="2" w="full" h="full" top="0" >
                    <CloudRightImage2
                        id={'eed-fere-se32-fer'}
                        url={bgImg.src}
                        x={'20'}
                        y={'0'}
                        sizeW={'120%'}
                        sizeH={'120%'}
                    />
                </Box>
            </Box>

        </Flex>
    );
}

export default Section9;