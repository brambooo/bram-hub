import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

import logo from '../assets/logo.webp';
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}


function NavBar({ onSearch }: Props) {
  return (
    <HStack justifyContent='space-between' padding="10px">
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
