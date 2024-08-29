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
            title: "AI-Powered Vet Connect",
            description: `Access veterinary expertise instantly through our AI-integrated platform, connecting you with the right care at the right time.`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <CatIcon />,
            title: "PetID: Digital Pet Identity",
            description: `Create a comprehensive digital identity for your pet, including health records and care history - accessible anytime, anywhere.`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <BrushIcon colorFill={'#82C55B'} />,
            title: "Unified Pet Care Management",
            description: `Seamlessly manage all aspects of your pet's care - from vet visits to grooming appointments - in one centralized platform.`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <HouseDogIcon />,
            title: "Intelligent Health Insights",
            description: `Receive personalized health recommendations and preventive care suggestions powered by AI analysis of your pet's unique profile.`,
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