import React, { useState, useEffect } from "react";
import { Flex, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { mensProducts } from "../Json/mensProduct";

const MensProductPage = () => {
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    let data = [];
    if (sortBy === "lowToHigh") {
      data = mensProducts.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
      });
      console.log(data, "data");
      setSortedData(data);
    } else if (sortBy === "highToLow") {
      data = mensProducts.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceB - priceA;
      });
      setSortedData(data);
    } else {
      setSortedData(mensProducts);
    }
  }, [sortBy]);

  return (
    <>
      <Flex justifyContent="center" my={4}>
        <Button
          colorScheme={sortBy === "lowToHigh" ? "blue" : "gray"}
          onClick={() => setSortBy("lowToHigh")}
          mr={4}
        >
          High to Low
        </Button>
        <Button
          colorScheme={sortBy === "highToLow" ? "blue" : "gray"}
          onClick={() => setSortBy("highToLow")}
        >
          Low to High
        </Button>
      </Flex>

      <SimpleGrid
        gridTemplateColumns={"repeat(4,1fr)"}
        ml={10}
        gap={20}
        w={"60%"}
        mt={6}
      >
        {sortedData.map((elem) => (
          <SimpleGrid
            key={elem.id}
            cursor={"pointer"}
            borderRadius={10}
            w={300}
            boxShadow="xs"
            rounded="md"
          >
            <img src={elem.image} alt="" />

            <Text
              ml={8}
              mt={2}
              fontWeight={400}
              fontSize={"18px"}
              color={"rgb(0, 96, 169)"}
              _hover={{ textDecoration: "underline" }}
            >
              {elem.title}
            </Text>
            <Text
              ml={8}
              mt={2}
              fontWeight={200}
              fontSize={"14px"}
              color={"rgb(0, 96, 169)"}
              _hover={{ textDecoration: "underline" }}
            >
              {elem.text}
            </Text>
            <Text mt={8} ml={10} fontWeight={700}>
              {elem.price}
            </Text>
            <Text
              bgGradient="linear(to-r, #F8F2E0,  white)"
              mt={2}
              p={2}
              fontWeight={400}
              fontSize={"14px"}
              color={"#B69C53"}
              _hover={{ textDecoration: "underline" }}
            >
              {elem.footer}
            </Text>
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MensProductPage;
