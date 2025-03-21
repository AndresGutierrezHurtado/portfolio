import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

import data from "@/lib/data";

export default function Footer() {
    const t = useTranslations("Layout");

    return (
        <footer className="w-full px-3">
            <div className="w-full max-w-[1200px] mx-auto pb-5">
                <div className="w-full bg-white border border-black/10 rounded-full px-5 py-1 flex flex-col md:flex-row justify-between font-medium">
                    <p>&copy; Andres Dev {new Date().getFullYear()}</p>
                    <nav>
                        <ul className="flex flex-row gap-3">
                            <li>
                                <Link href={data.github} target="_blank" rel="noreferrer">
                                    <span className=" hover:underline">GitHub</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={data.linkedin} target="_blank" rel="noreferrer">
                                    <span className=" hover:underline">Linkedin</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`mailto:${data.email}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className=" hover:underline">{t("footer__link--contact")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about">
                                    <span className=" hover:underline">{t("footer__link--about")}</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
