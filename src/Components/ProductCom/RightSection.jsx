import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Select,
  Stack,
  Switch,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { Pagination } from "./Pagination";
import { ProductCard } from "./ProductCard";
import axios from "axios"
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const RightSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.getAll("category") || []
  );

  const Fillter = useSelector((store)=>store.Fillters.Fillter)
  console.log(Fillter);
  const [curretpage, setcurretpage] = useState(1);
  const [products, setproducts] = useState([])

  const onPageChange = (direction) => {
    if (direction === "Prev") {
      setcurretpage(curretpage - 1);
    } else if (direction === "Next") {
      setcurretpage(curretpage + 1);
    }else{
      setcurretpage(direction);
    }
  };

  const FetchDataFromServer = () =>{
    axios.get(`http://localhost:8080/skincare?_page=${curretpage}&_limit=50`).then((res)=>{
      console.log(res.data);
      setproducts(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(() => {
    FetchDataFromServer()
  }, [curretpage])
  

  return (
    <Box w="72%">
      <Box borderBottom={"1px solid"} h={"82px"}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Heading>MAKEUP</Heading>
          <Stack direction={"row"} align="center" pt={"5"}>
            <Heading size={"md"}>SORT BY</Heading>
            <Stack spacing={3}>
              <Select variant="outline" >
                <option value="Featured">Featured</option>
                <option value="NewArrivals">New Arrivals</option>
                <option value="BestSellers">Best Sellers</option>
                <option value="PriceLowToHigh">Price, Low to High</option>
                <option value="PriceHighToLow">Price, High to Low</option>    
              </Select>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Stack direction="row" justifyContent="space-between" mt="2" mb={5}>
        <Heading size={"sm"}>{Fillter.length} FILTERS APPLIED</Heading>
        <Stack direction="row" align="center" gap="10px">
          <Text fontSize="sm" color={"#888c92"}>
            Show out of stock items
          </Text>
          <Switch colorScheme="gray" />
          <Text fontSize="sm" color={"#888c92"}>
            1463 results
          </Text>
        </Stack>
      </Stack>
      <Box my={2}>
        {Fillter?.map((item, index)=>(
         <Tag
         m={2}
         size={"md"}
         key={index}
         borderRadius='full'
         variant='outline'
         colorScheme='gray'
       >
         <TagLabel>{item}</TagLabel>
         <TagCloseButton />
       </Tag>   
        ))}
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={5} >
        {products?.map((item, index)=>(
        <GridItem w="100%" h="350" key={index}>
           <Link to={`/products/${item.id}`}> <ProductCard item={item}/> </Link> 
        </GridItem>
          ))}
      </Grid>

      <Box w={"70%"} m={"20px auto"}>
        <Pagination
          total={10}
          selected={curretpage}
          onPageChange={onPageChange}
        />
      </Box>
    </Box>
  );
};
