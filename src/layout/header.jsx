"use client";

import { useLocale, useTranslations } from "next-intl";
import { SpainIcon, UsaIcon } from "@/components/icons";
import React, { useEffect, useRef } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Link } from "react-scroll";

export default function Header() {
    const t = useTranslations("Layout");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                navbarRef.current.classList.add("bg-white/40", "shadow-lg", "px-4", "md:px-8");
            } else {
                navbarRef.current.classList.remove("bg-white/40", "shadow-lg", "px-4", "md:px-8");
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
                    className="navbar rounded-full duration-300 backdrop-blur-[2px] py-1"
                    ref={navbarRef}
                >
                    <div className="navbar-start text-xl sm:text-3xl md:text-5xl text-nowrap font-passion-one leading-tight">
                        <Link to="hero" className="cursor-pointer" smooth={true} duration={500}>
                            Andres Dev <span className="text-xl md:text-5xl text-primary">.</span>
                        </Link>
                    </div>
                    <div className="navbar-center">
                        <ul className="flex flex-row gap-7 text-lg font-medium hidden lg:flex">
                            <li className="duration-300 hover:text-primary hover:font-bold hover:scale-[1.05]">
                                <Link
                                    activeClass="text-primary font-bold"
                                    to="projects"
                                    className="cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={50}
                                >
                                    {t("header__link--1")}
                                </Link>
                            </li>
                            <li className="duration-300 hover:text-primary hover:font-bold hover:scale-[1.05]">
                                <Link
                                    activeClass="text-primary font-bold"
                                    to="certificates"
                                    className="cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={50}
                                >
                                    {t("header__link--2")}
                                </Link>
                            </li>
                            <li className="duration-300 hover:text-primary hover:font-bold hover:scale-[1.05]">
                                <Link
                                    activeClass="text-primary font-bold"
                                    to="contact"
                                    className="cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={50}
                                >
                                    {t("header__link--3")}
                                </Link>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-sm btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />{" "}
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <Link href="/#about">{t("header__link--1")}</Link>
                                </li>
                                <li>
                                    <Link href="/#projects">{t("header__link--2")}</Link>
                                </li>
                                <li>
                                    <Link href="/#contact">{t("header__link--3")}</Link>
                                </li>
                            </ul>
                        </div>
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
