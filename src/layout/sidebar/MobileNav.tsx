import {
  Flex,
  FlexProps,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 6, md: 24 }}
      height="0"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.900")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        position="fixed"
        right="1"
        marginTop={24}
      />
    </Flex>
  );
};
