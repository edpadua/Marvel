import React from "react";

import Logo from "../Logo";

import Search from "../Search";

import { Nav, NavContainer, SearchBarContainer, LogoContainer } from "./styles";

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <SearchBarContainer>
          <Search />
        </SearchBarContainer>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
