import React from 'react';
import BallIcon from '@icons/BallIcon';
import BrushIcon from '@icons/BrushIcon';
import Bone2Icon from '@icons/Bone2Icon';
import ContainerButtons from './ContainerButtons';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import ContainerIconServices from './ContainerIconServies';
import CloudRightImage4 from '@components/clouds/CloudRightImage4';
import dogImage from '../../../resources/images/dog-swimming.jpg'
import { nanoid } from 'nanoid';
import TaxIcon from '@icons/TaxIcon';

function Section3() {

    const data = {
        services: [
            {
                id: nanoid(),
                title: "Groomers",
                icon: <Bone2Icon />,
                description: `Streamline appointment bookings, manage client records.`
            },
            {
                id: nanoid(),
                title: "Boarders",
                icon: <BallIcon colorFill={'white'} />,
                description: `Efficiently manage bookings, track pet preferences and special needs.`
            },
            {
                id: nanoid(),
                title: "Trainers",
                icon: <BrushIcon colorFill={'white'} />,
                description: `Schedule sessions, track training progress, and share updates.`
            },
            {
                id: nanoid(),
                title: "Veterinarians",
                icon: <TaxIcon />,
                description: `Access comprehensive pet health histories, schedule appointments.`
            }
        ],
        buttons: [
            // {
            //     id: nanoid(),
            //     title: "view more",
            // },
            {
                id: nanoid(),
                title: "schedule demo",
                url: 'https://topmate.io/gssridhar/1248303'
            },
        ]
    }

    return (
        <Flex
            w="full"
            pt="20px"
            pb="100px"
            id="business"
            direction={['column', 'column', 'column', 'row', 'row']}
            justifyContent="space-between"
            className="scroll-mt"
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
            pl={['0px', '0px', '0px', '78px', '78px']}
            textAlign={['center', 'center', 'center', 'left', 'left']}
        >
            <Flex
                direction="column"
                gridGap="40px"
                px={['20px', '36px', '36px', '0px', '0px']}
            >
                <Heading fontSize={['50px', '50px', '68px', '68px', '68px']} fontWeight="700" >
                    For 
                    <Heading as="strong" color="#ED6436" fontSize="inherit" fontWeight="700" > Pet Care Businesses </Heading>
                </Heading>
                {/* <Text whiteSpace="pre-wrap" fontSize="18px" lineHeight="1.7" >
                    Our puppies and other very active dogs have plenty of
                    space to run and romp, and comfy blankets.
                </Text> */}
                <ContainerIconServices data={data.services} />
            </Flex>
            <Flex w={['full', 'full', 'full', '1300px', '1300px']} mt={['0px', '0px', '0px', '-100px', '-100px']} direction="column" alignItems="center">
                <CloudRightImage4
                    id={'1szqADW'}
                    url={dogImage.src}
                    sizeW={'120%'}
                    sizeH={'140%'}
                    x={'-120'}
                    y={'0'}
                />
                <ContainerButtons data={data.buttons} />
            </Flex>
        </Flex>
    );
}

export default Section3;