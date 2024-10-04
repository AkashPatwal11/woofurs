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
            title: "Integrated Pet Care Platform",
            description: `Connect with multiple service providers through a single, user-friendly interface. Say goodbye to the hassle of coordinating between disconnected services.`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <CatIcon />,
            title: "Smart Business Management Tools",
            description: `Automate administrative tasks for pet care businesses, including appointment scheduling, customer management, and invoicing, allowing them to focus on providing quality care.`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <BrushIcon colorFill={'#82C55B'} />,
            title: "Centralized Pet Profiles",
            description: `Create comprehensive digital pet records accessible to authorized service providers, ensuring personalized care and informed decision-making across all pet services.`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <HouseDogIcon />,
            title: "AI-Powered Health Insights",
            description: `Leverage artificial intelligence to analyze pet data, providing personalized health recommendations, preventive care suggestions, and early warning signs for potential issues.`,
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