import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import CloudRightImage2 from '@components/clouds/CloudRightImage2'

import bgImage from '../../../resources/images/image-background-h.jpg'

import BallIcon from '@icons/BallIcon';
import { nanoid } from 'nanoid';
import Card from './Card';
import bgImg from '../../../resources/images/checkInTime-bgImage.png';
import ContainerImage from './ContainerImage'

function Section9() {

    const data = [
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Community',
            description: `We believe in fostering a strong, supportive community of pet owners and caregivers.`
        },
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Accessibility',
            description: `We’re committed to making expert pet care available to all, anytime, anywhere through our AI-powered platform.`
        },
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Responsible',
            description: `We uphold the highest standards of responsibility in all our actions, from caring for pets to managing our platform.`
        },
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Empathy',
            description: `We approach every interaction with understanding and compassion, recognizing the emotional bond between pets and their parents.`
        },
    ]

    return (
        <Flex
            w="full" id="values"
            className="scroll-mt"
            justifyContent={['center', 'center', 'center', 'space-between', 'space-between',]}
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
            pl={['0px', '0px', '0px', '78px', '78px']}
            textAlign={['center', 'center', 'center', 'left', 'left']}
            flexDirection={['column', 'column', 'column', 'row', 'row']}
            mb="100px"
        >

            <Box w="full" >
                <Heading fontSize={['50px', '50px', '70px', '70px', '70px']} fontWeight="700" mt="40px" >
                    Our Values <br/><Text as="strong" fontSize="inherit" fontWeight="inherit" color="#ED6436"> CARE</Text>
                </Heading>
                <Flex direction="column" pt="50px" gridGap="44px" mr="5px">

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

            <ContainerImage />

        </Flex>
    );
}

export default Section9;