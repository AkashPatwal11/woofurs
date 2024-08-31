import { petData }  from '@database/data';
import ListingCard from '@components/listing/card';
import { Flex, Heading } from "@chakra-ui/layout";
// import { getAllPet } from "@lib/actions/pet.action";

function Listing(){
  // const petData = await getAllPet();
  return (
    <Flex
      id="petdirectoryListing"
      w="full"
      py="128px"
      px={['20px', '20px', '20px', '76px', '76px']}
      justifyContent="center"
      alignItems="center"
      flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
      flexDirection="column"
      >
       <Heading
          fontSize={["50px", "50px", "76px", "76px", "76px"]}
          fontWeight="700"
          mt="40px"
          mb="20px"
        >
          Our Friends 
          </Heading>
      <Flex 
        gridGap="30px"
        flexDirection={['column', 'column', 'row', 'row', 'row']}>{petData.map((profile, index) => (
          <ListingCard key={index} profile={profile} />
        ))}
      </Flex>
      
    </Flex>
  );
}

export default Listing;
