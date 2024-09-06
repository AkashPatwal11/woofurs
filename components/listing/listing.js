import { petData } from '@database/data';
import ListingCard from '@components/listing/card';
import { Flex, Heading, Container } from "@chakra-ui/layout";
// import { getAllPet } from "@lib/actions/pet.action";

const cardsPerRow = 4; // Change this value to display the desired number of cards per row

function Listing() {
  const rows = Math.ceil(petData.length / cardsPerRow);
  const cardGroups = Array(rows).fill(0).map((_, index) => petData.slice(index * cardsPerRow, (index + 1) * cardsPerRow));

  return (
    <Flex
      id="petdirectoryListing"
      w="full"
      py="80px"
      px={['20px', '20px', '20px', '76px', '76px']}
      flexDirection="column"
    >
      <Flex alignItems="center"
        as="header"
        w={'full'}
        h="100px"
        px={['16px', '16px', '16px', '78px', '78px']}
        justifyContent='space-between'
        position="fixed"
        bgColor="white"
        zIndex="24"
        >
        <Heading
          fontSize={["50px", "50px", "76px", "76px", "76px"]}
          fontWeight="700"
          mt="40px"
          mb="20px"
        >
          Our Friends
        </Heading>
      </Flex>
      <Container maxW={'100vw'} overflowY={'auto'} mt="140px">
        <Flex gridGap="30px" justifyContent="space-between" w="100%" flexWrap={'wrap'}>
          {cardGroups.map((group, index) => (
            <Flex key={index} justifyContent="space-between" w="100%" flexWrap={'wrap'}>
              {group.map((profile, index) => (
                <ListingCard profile={profile} />
              ))}
            </Flex>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
}

export default Listing;