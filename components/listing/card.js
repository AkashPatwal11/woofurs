import { FaMapMarkerAlt } from 'react-icons/fa';
import { GiSittingDog, GiCat } from 'react-icons/gi';
import { MdFamilyRestroom } from 'react-icons/md';
import { Flex, Text } from "@chakra-ui/layout";
import {dummyPetUrl} from 'lib/constants';
import { useRouter } from "next/navigation";
import {calculateAge} from 'lib/utils'

const ListingCard = ({ profile }) => {
  const router = useRouter();
  const speciesIcon = profile.species === 'Dog' ? <GiSittingDog /> : <GiCat />;

  return (
    <Flex
      borderRadius="3xl"
      bgColor="#F2F2F4"
      px="40px"
      cursor="pointer"
      width="320px"
      py="50px"
      direction="column"
      gridGap="40px"
      alignItems={["center", "center", "center", "center", "flex-start"]}
      textAlign={["center", "center", "center", "center", "left"]}
      onClick={() => router.push(`/pets/${profile.id}`)}
    >
      <div className="flex items-center mb-4">
        <img
          className="w-20 h-20 rounded-full border-4 border-orange-500 mr-4"
          src={profile.imageUrl || dummyPetUrl}
          alt={profile.name}
        />
        <div>
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <p className="flex items-center text-sm text-gray-500">
            {speciesIcon} 
            <span className="ml-2">{profile.breed}</span>
          </p>
          <p className="flex items-center text-sm text-gray-500">
            <FaMapMarkerAlt className="mr-1" /> 
            {profile.location}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">{`${calculateAge(profile.dateOfBirth)} years`}</p>
          <p className="flex items-center text-sm">
            <MdFamilyRestroom />
            <span className="ml-2">{profile.owner}</span>
          </p>
        </div>
        <Flex className="text-center" ml="20">
          <span className="bg-orange-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-xs font-semibold shadow-md">
              {profile.badge}
          </span>
        </Flex>
      </div>
      <div className="mt-4">
        {profile.healthStatus.map((status, index) => (
          <span
            key={index}
            className="bg-lightblue-400 text-sm text-white px-2 py-1 rounded-full mr-2 shadow-sm"
          >
            {status}
          </span>
        ))}
      </div>
    </Flex>
      
  );
};

export default ListingCard;
