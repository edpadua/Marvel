import React from 'react'

import tw from "tailwind-styled-components"

export const Nav = tw.nav`
    bg-primary
    top-0 
    left-0 
    right-0 
    w-full 
    h-20 
    fixed
`;

export const NavContainer = tw.div`
    px-16 
    text-slate-800
    pt-navbar
    flex w-full flex-wrap items-center justify-between
`;


export const LogoContainer = tw.div`
  
    
    w-logo

`;

export const SearchBarContainer=tw.div`
   w-1/2 
`;

