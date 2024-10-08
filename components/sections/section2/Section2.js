import React from "react";
import { Flex, Heading, Text, Link } from "@chakra-ui/layout";

import Btn from "@components/Btn";
import ContainerImages from "./ContainerImages";

function Section2() {
  return (
    <Flex
      w="full"
      id="why"
      className="scroll-mt"
      flexDirection={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
        "row",
      ]}
      mt={["40px", "40px", "40px", "78px", "78px"]}
    >
      <ContainerImages />
      <Flex
        direction="column"
        gridGap="30px"
        px={["20px", "36px", "36px", "36px", "36px"]}
        justifyContent="center"
        textAlign={["center", "center", "center", "left", "left"]}
      >
        <Heading
          fontSize={["50px", "50px", "68px", "68px", "68px"]}
          fontWeight="700"
        >
          Why
          <Heading
            as="strong"
            color="#ED6436"
            fontSize="inherit"
            fontWeight="700"
          >
            {" "}
            Woofurs?
          </Heading>
        </Heading>
        <Text whiteSpace="pre-wrap" fontSize="18px" lineHeight="1.7">
          We envision a future where pet care is effortless for businesses, transparent for pet parents, and better for every animal, creating happier, healthier pet families.
        </Text>
        <Link
          href="https://chat.whatsapp.com/BvC4FihB7Qv18m283rkoV6"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Btn
            py={"22px"}
            fSize={"14px"}
            letterSpacing={"1.2px"}
            title={"JOIN NOW"}
            borderTopStartRadius={"none"}
            change={true}
            colorHover={"#ed6436"}
            color={"white"}
            width={"164px"}
            gap={"12px"}
            fw={"700"}
            alignSelf={[
              "center",
              "center",
              "center",
              "flex-start",
              "flex-start",
            ]}
          />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Section2;
