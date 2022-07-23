import React, { useEffect, useMemo, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Filter } from "./FillterData";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FILLTER } from "../../Redux/FillterReducer/actionType";

export const LeftSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const Fillter = useSelector((store)=>store.Fillters.Fillter)

  const dispatch = useDispatch();

  const handleAddFilter = (category) =>{

    let newFillter = [...Fillter];

    if (newFillter.includes(category)) {
      newFillter.splice(newFillter.indexOf(category), 1);
    } else {
      newFillter.push(category);
    }

    dispatch({type:ADD_FILLTER, payload:newFillter})

  }

  useEffect(() => {
    if (Fillter) {
      setSearchParams({ category: Fillter });
    }
  }, [ setSearchParams, Fillter]);

  useEffect(()=>{
    dispatch({type:ADD_FILLTER, payload:searchParams.getAll("category")})
  },[])

  return (
    <Box mt={5} w="25%">
      <Heading size="sm" mt={5} >
        MAKEUP CATEGORY
      </Heading>
      <Text mb={1} fontSize="xs" color={"#dbdee4"}>
        Select One to narrow results
      </Text>
      <hr />
      <Text mt={1} fontSize="md" color={"#929aa9"}>
        Brushes & Tools
      </Text>
      <Text fontSize="md" color={"#929aa9"}>
        Eyes
      </Text>
      <Text fontSize="md" color={"#929aa9"}>
        Face & Cheek
      </Text>
      <Text fontSize="md" color={"#929aa9"}>
        Gift Sets
      </Text>
      <Text fontSize="md" color={"#929aa9"}>
        Lips
      </Text>
      <Text fontSize="md" color={"#929aa9"}>
        Makeup Bags & Accessories
      </Text>
      <Text fontSize="md" color={"#929aa9"}>
        Makeup Remover
      </Text>
      <Text fontSize="md" color={"#929aa9"}>
        Nails
      </Text>
      <Text mb={5} fontSize="md" color={"#929aa9"}>
        Palettes & Sets
      </Text>
      <Heading size="sm" mb={2}>FILTER MAKEUP BY</Heading>

      <Accordion allowToggle>
        {Filter.map((obj,index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg">{obj.Name}</Text>
                  <Text fontSize="xs">{obj.subtitle}</Text>
                </Box>
                <AddIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <hr />
              <InputGroup size="sm" my={2}>
                <Input placeholder="mysite" />
                <InputRightAddon>
                  <SearchIcon />
                </InputRightAddon>
              </InputGroup>
              <Stack
                spacing={2}
                direction="column"
                h={"200px"}
                overflowX="auto"
                sx={{
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {obj.Sub.map((item, index) => (
                  <Checkbox
                  defaultChecked={Fillter?.includes(item)? true : false} 
                  colorScheme="gray" size="lg" key={index} 
                  onChange={() => handleAddFilter(item)}
                  >
                    {item}
                  </Checkbox>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
