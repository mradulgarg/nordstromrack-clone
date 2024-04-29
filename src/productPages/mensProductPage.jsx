import { Flex,  SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const MensProductPage = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get("src/Json/mensProduct.json");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (sortBy === "desc") {
      setSortedData([...data].sort((a, b) =>  (a.price) -  (b.price)));
    } else if (sortBy === "asc") {
      setSortedData([...data].sort((a, b) => ( b.price) -  (a.price)));
    } else {
      setSortedData(data);
    }
  }, [sortBy, data]);
  return (
    <>
  
      <Flex>
      
        <SimpleGrid gridTemplateColumns={"repeat(4,1fr)"} ml={10} gap={20} w={"60%"} mt={6}>
          {sortedData.map((elem) => (
            <SimpleGrid  key={elem.id} cursor={"pointer"} borderRadius={10} w={300} boxShadow="xs" rounded="md">
               
              <img src={elem.image} alt="" />
              
              <Text ml={8} mt={2} fontWeight={400} fontSize={"18px"} color={"rgb(0, 96, 169)"} _hover={{ textDecoration: "underline" }}>
                {elem.title}
              </Text>
              <Text ml={8} mt={2} fontWeight={200} fontSize={"14px"} color={"rgb(0, 96, 169)"} _hover={{ textDecoration: "underline" }}>
                {elem.text}
              </Text>
              <Text mt={8} ml={10} fontWeight={700}>
                {elem.price}
              </Text>
              <Text   bgGradient='linear(to-r, #F8F2E0,  white)' mt={2} p={2} fontWeight={400} fontSize={"14px"} color={"#B69C53"} _hover={{ textDecoration: "underline" }}>
                {elem.footer}
              </Text>
              
            </SimpleGrid>
          ))}
        </SimpleGrid>
      </Flex>
      
    </>
  );
};
export default MensProductPage;