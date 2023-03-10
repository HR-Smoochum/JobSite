/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
// LIBRARY IMPORTS
import React from 'react';
import {
  Card, CardHeader, CardBody, Text, Heading, Flex, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Icon, Avatar,
} from '@chakra-ui/react';
import { HiEllipsisVertical } from 'react-icons/hi2';
// import { AiFillHeart } from 'react-icons/ai';
import { IoMdPaw } from 'react-icons/io';
import Skill from './Skill.jsx';

export default function SeekerCard({ seeker, handleInterested }) {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="8">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Dan Abrahmov" src={seeker.photo} />
            <Box>
              <Heading size="sm">
                {seeker.first_name}
                &nbsp;
                {seeker.last_name}
              </Heading>
              <Text>{seeker.industry}</Text>
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
              <MenuItem onClick={(e) => handleInterested(e, seeker.uid)} value="interested">
                <Icon as={IoMdPaw} color="#ffcccc" mr="3px" />
                Interested
              </MenuItem>
              <MenuItem onClick={(e) => handleInterested(e, seeker.uid)} value="veryInterested">
                <Icon as={IoMdPaw} color="#ff8080" mr="3px" />
                Very Interested
              </MenuItem>
              <MenuItem onClick={(e) => handleInterested(e, seeker.uid)} value="extremelyInterested">
                <Icon as={IoMdPaw} color="#ff0000" mr="3px" />
                Extremely Interested
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody>
        {
          seeker.resume.skills.map((skill, index) => {
            return <Skill skill={skill} key={index} />;
          })
        }
      </CardBody>
    </Card>
  );
}
