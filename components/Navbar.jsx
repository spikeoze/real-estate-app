import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

function Navbar() {
  return (
    <Flex p="2" mb={10} borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Realtor
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outline"
            color="red.400"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem fontSize={18} icon={<FcHome />}>
                Home
              </MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem fontSize={18} icon={<BsSearch />}>
                Search
              </MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem fontSize={18} icon={<FcAbout />}>
                Buy Property
              </MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem fontSize={18} icon={<FiKey />}>
                Rent Property
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Navbar;
