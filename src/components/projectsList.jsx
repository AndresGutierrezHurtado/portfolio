"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExportIcon, GithubIcon } from "@/components/icons";
import * as Icons from "@/components/icons";
import { useTranslations } from "next-intl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function ProjectsList({ projects }) {
    const t = useTranslations("Index");

    const [isExpanded, setIsExpanded] = React.useState(false);
    const projectsList = isExpanded ? projects : projects.slice(0, 4);

    return (
        <div>
            {projectsList.map((project, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-10 py-8">
                    <figure className="w-full md:w-3/7 aspect-[16/10] rounded-lg overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-xl duration-300">
                        <Image
                            src={process.env.NEXT_PUBLIC_APP_DOMAIN + project.image}
                            width={500}
                            height={500}
                            alt={project.name}
                            className="w-full h-full object-cover hover:scale-110 duration-300"
                        />
                    </figure>
                    <div className="w-full md:w-4/7 flex flex-col">
                        <h2 className="text-3xl font-extrabold tracking-tight mb-1.5">
                            {t(project.name)}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag, index) => {
                                const Icon = Icons[tag.icon] || Icons.LanguageIcon;
                                return (
                                    <p
                                        key={index}
                                        className={`badge font-medium ${tag.color}  ${tag.background} ${tag.border}`}
                                    >
                                        <Icon size={15} />
                                        {tag.name}
                                    </p>
                                );
                            })}
                        </div>
                        <p className="my-5 grow text-pretty">{t(project.description)}</p>
                        <div className="flex gap-5">
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="btn btn-outline btn-primary rounded-lg px-5 shadow-none tooltip tooltip-bottom"
                                    data-tip={t("projects__button--website")}
                                >
                                    <ExportIcon size={20} />
                                    <span>Link</span>
                                </Link>
                            )}
                            {project.github && (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="btn btn-secondary rounded-lg px-5 shadow-none tooltip tooltip-bottom"
                                    data-tip={t("projects__button--github")}
                                >
                                    <GithubIcon size={20} />
                                    <span>GitHub</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-full flex justify-center items-center mt-5">
                {isExpanded ? (
                    <button
                        className="btn btn-outline btn-primary rounded-lg px-5 shadow-none"
                        onClick={() => setIsExpanded(false)}
                    >
                        <FaChevronUp />
                        {t("projects__button--less")}
                    </button>
                ) : (
                    <button
                        className="btn btn-outline btn-primary rounded-lg px-5 shadow-none"
                        onClick={() => setIsExpanded(true)}
                    >
                        <FaChevronDown />
                        {t("projects__button--more")}
                    </button>
                )}
            </div>
        </div>
    );
}
