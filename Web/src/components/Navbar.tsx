'use client';

import React from "react";
import { Navbar as NextNavBar, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar } from "@nextui-org/react";


const Navbar = () => (
    <NextNavBar>
        <NavbarBrand>
            <p className="font-bold text-inherit">DogDay</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive>
                <Link href="/" aria-current="page" color="secondary">
                    Home
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="/Config">
                    Config
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Docs
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    About
                </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
            <Link isExternal href="https://github.com/easterNday">
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="easterNday"
                    size="sm"
                    src="https://avatars.githubusercontent.com/u/44698238?v=4"
                />
            </Link>
        </NavbarContent>
    </NextNavBar>
);

export default Navbar;