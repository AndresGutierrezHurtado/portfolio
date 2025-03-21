"use client";

import { useLocale, useTranslations } from "next-intl";
import { SpainIcon, UsaIcon } from "@/components/icons";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
    const t = useTranslations("Layout");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                navbarRef.current.classList.add("bg-white/40", "shadow-lg", "px-8");
            } else {
                navbarRef.current.classList.remove("bg-white/40", "shadow-lg", "px-8");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="w-full px-3 sticky top-0 z-50">
            <div className="w-full max-w-[1200px] mx-auto py-3">
                <div
                    className="navbar rounded-full duration-300 backdrop-blur-[2px]"
                    ref={navbarRef}
                >
                    <div className="navbar-start text-5xl font-passion-one">
                        <Link href="/">
                            Andres Dev <span className="text-5xl text-primary">.</span>
                        </Link>
                    </div>
                    <div className="navbar-center">
                        <ul className="flex flex-row gap-7 text-lg font-medium">
                            <li className="duration-300 hover:text-primary hover:font-bold hover:scale-[1.05]">
                                <Link href="/#about">{t("header__link--1")}</Link>
                            </li>
                            <li className="duration-300 hover:text-primary hover:font-bold hover:scale-[1.05]">
                                <Link href="/#projects">{t("header__link--2")}</Link>
                            </li>
                            <li className="duration-300 hover:text-primary hover:font-bold hover:scale-[1.05]">
                                <Link href="/#contact">{t("header__link--3")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {locale == "es" ? (
                            <SpainIcon className="w-8 h-8" />
                        ) : (
                            <UsaIcon className="w-8 h-8" />
                        )}
                        <select
                            className="select select-ghost focus:outline-0 w-fit"
                            defaultValue={locale}
                            onChange={(e) => {
                                router.replace(pathname, { locale: e.target.value });
                                router.refresh();
                            }}
                        >
                            <option value="es">ES</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}
