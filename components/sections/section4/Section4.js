import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { nanoid } from "nanoid"
import DogIcon from '@icons/DogIcon';
import CatIcon from '@icons/CatIcon';
import BrushIcon from '@icons/SpaIcon';
import HouseDogIcon from '@icons/HouseDogIcon';
import CardService from './CardService';

function Section4() {

    const services = [
        {
            id: nanoid(),
            url: "",
            icon: <DogIcon />,
            title: "The Pet Parent's Dilemma",
            description: `Did you know that over 95% of pet parents are unaware of their pets' true health status? With more than 60% of pets in India facing health issues, it's time for a revolution in pet care.`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <CatIcon />,
            title: "Expert Access Made Easy",
            description: `Connect with veterinarians and pet care specialists at the touch of a button. No more waiting or worrying - get professional advice when you need it most, all through WhatsApp.`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <BrushIcon colorFill={'#82C55B'} />,
            title: "Comprehensive Pet Wellness",
            description: `Woofurs isn't just about solving problems - it's about preventing them. Our platform offers: Customized care plans, Preventive health recommendations
            , Nutrition guidance & Behavior support`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <HouseDogIcon />,
            title: "Community of Pet Lovers",
            description: `Join our 'Belly Rub Club' and connect with fellow pet parents. Share experiences, get tips, and be part of a supportive community that understands the joys and challenges of pet parenting.`,
        },

    ]

    return (
        <Flex
            id="features"
            w="full"
            py="128px"
            px={['20px', '20px', '20px', '76px', '76px']}
            gridGap="30px"
            justifyContent="center"
            alignItems="center"
            flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
            flexDirection={['column', 'column', 'row', 'row', 'row']}
        >
            {
                services.map(e => <CardService key={e.id} data={e} />)
            }

        </Flex>
    );
}

export default Section4;