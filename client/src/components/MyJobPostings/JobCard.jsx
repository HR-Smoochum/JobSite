/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React, { useState } from 'react';
import {
  Card, CardHeader, CardBody, Text, Heading, Flex, Image, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Icon, Center,
} from '@chakra-ui/react';
import { HiEllipsisVertical, HiChevronDoubleDown } from 'react-icons/hi2';
// import { AiFillHeart } from 'react-icons/ai';
import { IoMdPaw } from 'react-icons/io';
import JobDetail from './JobDetail.jsx';

export default function JobCard({
  Job, handleCheck, handleSingleApply, handleInterested,
}) {
  const [showMore, setShowMore] = useState(0);

  const handleDetail = () => {
    setShowMore(1);
  };

  return (
    <>
      {
        showMore === 0 && (
          <Box>
            <input type="checkbox" id={Job.id} style={{ width: '15px', height: '15px', color: 'brand.light' }} onChange={handleCheck} />
            <label htmlFor={Job.id}>
              <Card w="sm" maxW="md">
                <CardHeader>
                  <Flex spacing="8">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Image
                        borderRadius="full"
                        boxSize="40px"
                        src={Job.logo}
                        alt="company logo"
                      />
                      <Box>
                        <Heading size="sm">{Job.company}</Heading>
                        <Text>{Job.title}</Text>
                      </Box>
                    </Flex>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<HiEllipsisVertical />}
                        variant="ghost"
                      />
                      <MenuList>
                        <MenuItem onClick={(e) => handleInterested(e, Job.id)} value="interested">
                          <Icon as={IoMdPaw} color="#ffcccc" mr="3px" />
                          Interested
                        </MenuItem>
                        <MenuItem onClick={(e) => handleInterested(e, Job.id)} value="veryInterested">
                          <Icon as={IoMdPaw} color="#ff8080" mr="3px" />
                          Very Interested
                        </MenuItem>
                        <MenuItem onClick={(e) => handleInterested(e, Job.id)} value="extremelyInterested">
                          <Icon as={IoMdPaw} color="#ff0000" mr="3px" />
                          Extremely Interested
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text h="50px">
                    {Job.description.substring(0, 80)}
                  </Text>
                  <Center>
                    <IconButton aria-label="show more" icon={<HiChevronDoubleDown />} variant="ghost" onClick={handleDetail} />
                  </Center>
                </CardBody>
              </Card>

            </label>
          </Box>
        )
      }
      {
        showMore === 1
        && (
          <Box>
            <JobDetail Job={Job} setShowMore={setShowMore} handleSingleApply={handleSingleApply} />
          </Box>
        )
      }
    </>
  );
}
