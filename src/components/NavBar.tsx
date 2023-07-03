import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

import logo from '../assets/logo.webp';

function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize='60px' />
      <Text>Navbar</Text>
      {/* <SearchInput onSearch={onSearch} /> */}
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
