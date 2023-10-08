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
  Stack,
} from "@chakra-ui/react";
import React from "react";
import styles from "./project-card.module.scss";

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
              src={`${item.img + Math.floor(Math.random() * 12) + 1}`}
              objectFit="cover"
              borderRadius="xl"
              mx="auto"
              alt="Image of project"
            />
            <Heading as="h4" size="md">
              {item.name}
            </Heading>
            <Text>{item.description}</Text>
            <Button onClick={() => handleSizeClick("xl")}>View</Button>
          </CardBody>
        </Card>
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className={styles.title}>
              {item.name} : {item.id}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={10} className={styles.modal}>
                <Text>{item.description}</Text>
                <Text>
                  {item.author.firstName} {item.author.lastName}
                </Text>
                <Image
                  src={`${item.img + Math.floor(Math.random() * 12) + 1}`}
                  boxSize="400px"
                />
              </Stack>
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
