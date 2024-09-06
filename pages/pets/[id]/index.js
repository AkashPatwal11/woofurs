import React from 'react';
import { useState, useEffect } from 'react';
import { PetProfile } from '@components/pets/profile';

import { petData } from '@database/data';
import { useRouter } from 'next/router';

export default function PetDetail(){
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [petDetails, setPetDetails] = useState({});
  const { id } = router.query;
  const petId = id; 
  

  useEffect(() => {
    if (!petId) {
      return; // If there's no data yet, do nothing
    }
    const data = petData.find(pet => pet.id === petId);
    setPetDetails(data);
    setIsLoading(false);
  }, [petId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PetProfile pet={petDetails} />
      )}
    </div>
  );
};