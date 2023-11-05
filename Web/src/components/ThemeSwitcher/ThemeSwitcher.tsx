// app/components/ThemeSwitcher.tsx
"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])


    const onChange = (e) => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps
    } = useSwitch({

        isSelected: theme === "light",
        "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
        onChange,
    });

    if (!mounted) return null


    return (

        <div className="flex flex-col gap-2">
            <Component {...getBaseProps()} onValueChange={onChange}>
                <VisuallyHidden>
                    <input {...getInputProps()} />
                </VisuallyHidden>
                <div
                    {...getWrapperProps()}
                    className={slots.wrapper({
                        class: [
                            "w-8 h-8",
                            "flex items-center justify-center",
                            "rounded-lg bg-default-100 hover:bg-default-200",
                        ],
                    })}
                    onChange={onChange}
                >
                    {isSelected ? <SunIcon /> : <MoonIcon />}
                </div>
            </Component>
        </div>
        // <Switch
        //     defaultSelected
        //     size="lg"
        //     color="secondary"
        //     thumbIcon={({ isSelected, className }) =>
        //         isSelected ? (
        //             <SunIcon className={className} />
        //         ) : (
        //             <MoonIcon className={className} />
        //         )
        //     }
        //     onChange={onChange}
        // />
    )
};