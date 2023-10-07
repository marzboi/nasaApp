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
      <Card maxW="md">
        <CardHeader>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Sr. Encheng" src="https://bit.ly/sage-adebayo" />
              <Box>
                <Heading size="sm">
                  {item.author.firstName} {item.author.lastName}
                </Heading>
              </Box>
            </Flex>
        </CardHeader>
        <CardBody>
          <Image src={item.img} objectFit="cover" alt="Image of project" />
          <h2>{item.name}</h2>
          <Text>{item.description}</Text>
          <button
            className="btn btn-success"
            onClick={() => handleSizeClick("full")}
          >
            View
          </button>
        </CardBody>
      </Card>
      <>
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{item.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>{item.description}</p>
              <p>
                {item.author.firstName} {item.author.lastName}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
}
