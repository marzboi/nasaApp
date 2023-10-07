import { Project } from "../../models/data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Heading,
  Box,
  Text,
  Image,
  ListItem
} from '@chakra-ui/react'

type PropsType = {
  item: Project;
};

export function ProjectCard({ item }: PropsType) {
  return (
    <Card maxW='md'>
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Sr. Encheng' src='https://bit.ly/sage-adebayo' />
            <Box>
              <Heading size='sm'>{item.author.firstName} {item.author.lastName}</Heading>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
            <Image src={item.img} objectFit='cover' alt="Image of project"/>
            <h2>{item.name}</h2>
            <Text>{item.description}</Text>
          <button className="btn btn-success">View</button>
      </CardBody>
    </Card>
  );
}
