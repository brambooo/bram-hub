import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack padding="10px">
      <h1>BramHub</h1>
      {/* <Image src={logo} boxSize='60px' /> */}
      {/* <SearchInput onSearch={onSearch} /> */}
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
