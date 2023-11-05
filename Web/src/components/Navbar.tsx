'use client';

import React from 'react';
import { usePathname } from "next/navigation";
import { Navbar as NextNavBar, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar } from "@nextui-org/react";


const Navbar = () => {
    // 获取当前网页路径
    const pathname = usePathname();

    // 判断字符串包含关系
    function includes(pathname: any, arg1: string) {
        return pathname.indexOf(arg1) !== -1
    }

    return (
        <NextNavBar classNames={{
            item: [
                "flex",
                "relative",
                "h-full",
                "items-center",
                "data-[active=true]:after:content-['']",
                "data-[active=true]:after:absolute",
                "data-[active=true]:after:bottom-0",
                "data-[active=true]:after:left-0",
                "data-[active=true]:after:right-0",
                "data-[active=true]:after:h-[2px]",
                "data-[active=true]:after:rounded-[2px]",
                "data-[active=true]:after:bg-primary",
            ],
        }}>
            <NavbarBrand>
                <Link color="foreground" id="Home" href="/">
                    <p className="font-bold text-inherit">DogDay</p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem data-active={includes(pathname, "Config")}>
                    <Link color="foreground" id="Config" href="/Config">
                        Config
                    </Link>
                </NavbarItem>
                <NavbarItem data-active={includes(pathname, "Docs")}>
                    <Link color="foreground" id="Docs" href="/Docs">
                        Docs
                    </Link>
                </NavbarItem>
                <NavbarItem data-active={includes(pathname, "About")}>
                    <Link color="foreground" id="About" href="/About">
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
    )
};

export default Navbar;