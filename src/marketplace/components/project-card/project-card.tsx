import { Project } from "../../models/data";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import React from "react";

type PropsType = {
  item: Project;
};

export function ProjectCard({ item }: PropsType) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize: React.SetStateAction<string>) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Center>
        <Card maxW="md" boxShadow={"2xl"} rounded={"md"}>
          <CardHeader>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                name="Sr. Encheng"
                src={`./img/photo${Math.floor(Math.random() * 7) + 1}.jpeg`}
              />
              <Box>
                <Heading size="sm">
                  {item.author.firstName} {item.author.lastName}
                </Heading>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody>
            <Image
              src={item.img}
              objectFit="cover"
              borderRadius="xl"
              mx="auto"
              alt="Image of project"
            />
            <Heading as="h4" size="md">
              {item.name}
            </Heading>
            <Text>{item.description}</Text>
            <Button onClick={() => handleSizeClick("full")}>View</Button>
          </CardBody>
        </Card>
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {item.name} : {item.id}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{item.description}</Text>
              <Text>
                {item.author.firstName} {item.author.lastName}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
}
