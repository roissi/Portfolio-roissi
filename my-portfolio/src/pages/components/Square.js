import React from "react";
import { Button, Image, useColorMode } from "@chakra-ui/react";

const Square = ({ value, onClick, isDisabled }) => {
  const { colorMode } = useColorMode();

  const renderContent = () => {
    if (value === "X") {
      if (colorMode === "light") {
        return <Image src="/Xl.png" alt="X" />;
      } else {
        return <Image src="/X.png" alt="X" />;
      }
    } else if (value === "O") {
      if (colorMode === "light") {
        return <Image src="/Ol.png" alt="O" />;
      } else {
        return <Image src="/O.png" alt="O" />;
      }
    }
  };

  const bgColor = value
    ? colorMode === "light"
      ? "#212e40"
      : "#f9f4da"
    : "#f73b68";

  return (
    <Button
      width="100px"
      height="100px"
      bg={bgColor}
      _hover={{ bg: value ? bgColor : "#ed809a" }}
      transition="background-color 0.2s"
      disabled={isDisabled}
      onClick={onClick}
      m={2}
    >
      {renderContent()}
    </Button>
  );
};

export default Square;
