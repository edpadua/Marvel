import React from "react";

import Image from "next/image";

import Link from "next/link";

import { Nav, NavContainer, Logo } from "./styles";

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo>
          <Link href="/">
            <Image
              src="/marvel_logo.svg"
              alt="Marvel Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </Logo>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
