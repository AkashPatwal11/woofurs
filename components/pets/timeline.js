import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

import {calculateMilestoneDate, calculateAge} from 'lib/utils'
import ArrowRightIcon from '@icons/ArrowRightIcon';

const TimelineItem = ({ year, title, isHighlighted }) => (
  <div className="flex flex-col items-center">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isHighlighted ? 'bg-orange-500' : 'bg-green-400'}`}>
      <div className="w-2 h-2 bg-white rounded-full" />
    </div>
    <div className="mt-2 text-center">
      <p className="text-xs font-semibold">{year}</p>
      <p className="mt-1 text-sm font-medium">{title}</p>
    </div>
  </div>
);

export const PetTimeline = ({ pet }) => {
    const milestones = [
        { name: 'Adoption day ', date: calculateMilestoneDate(pet.dateOfBirth, 'adoption'), isHighlighted: true},
        { name: 'First Vaccination ', date: calculateMilestoneDate(pet.dateOfBirth, '1 week') },
        { name: 'First Bath ', date: calculateMilestoneDate(pet.dateOfBirth, '4 weeks') },
        { name: 'First Walk on a Leash ', date: calculateMilestoneDate(pet.dateOfBirth, '8 weeks'), isHighlighted: true},
        { name: 'Basic Training ', date: calculateMilestoneDate(pet.dateOfBirth, '3 months') },
        { name: 'First Pet-Friendly Vacation ', date: calculateMilestoneDate(pet.dateOfBirth, '5 months') },
    ];

    // Check if the pet has 'Spayed' or 'Neutered' in healthStatus before adding the 'Spay/Neuter' milestone
    if (pet.healthStatus.includes('Spayed')) {
        milestones.push({ name: 'Spayed', date: calculateMilestoneDate(pet.dateOfBirth, '6 months') });
    }else if (pet.healthStatus.includes('Neutered')){
        milestones.push({ name: 'Neutered', date: calculateMilestoneDate(pet.dateOfBirth, '6 months') });
    }

    // Add conditional milestones based on the pet's age
    const petAge = calculateAge(pet.dateOfBirth);
    // for (let i = 1; i <= petAge; i++) {
    milestones.push({ name: `Birthday#${petAge} `, date: calculateMilestoneDate(pet.dateOfBirth, `${petAge} years`) , isHighlighted: true});
    // }

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <div className="relative">
        <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-300" />
        <div className="relative flex justify-between">
          {milestones.map((item, index) => (
            <React.Fragment key={index}>
              
              <TimelineItem year={item.date} title={item.name} isHighlighted={item.isHighlighted}/>
              
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};