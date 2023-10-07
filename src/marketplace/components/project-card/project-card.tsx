import { useState } from "react";
import { Project } from "../../models/data";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
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
      <li key={item.id} className="container-sm text-center">
        <div>
          <h2>{item.name}</h2>
          <img src={item.img} alt="" className="rounded mx-auto d-block" />
          <div>
            <p>{item.description}</p>
            <p>
              {item.author.firstName} {item.author.lastName}
            </p>
          </div>
        </div>
        <button
          className="btn btn-success"
          onClick={() => handleSizeClick("full")}
        >
          View
        </button>
      </li>
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
