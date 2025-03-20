import Image from "next/image";
import data from "@/lib/data";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto">
                    <div className="flex flex-row  h-[80vh] items-center justify-between">
                        <div className="flex flex-col gap-5 w-full max-w-[530px]">
                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold text-primary">
                                    This is <span className="italic">{data.name}</span>
                                </h3>
                                <h1 className="[font-weight:900] text-7xl tracking-tight leading-[0.9]">
                                    Web Developer
                                </h1>
                            </div>
                            <p
                                className="text-pretty text-lg"
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            ></p>
                            <div className="flex gap-5">
                                <Link href={`mailto:${data.email}`} target="_blank">
                                    <button className="btn btn-primary rounded-lg w-fit shadow-none">
                                        <MailIcon size={20} />
                                        Contact me
                                    </button>
                                </Link>
                                <button className="btn btn-secondary btn-outline rounded-lg w-fit shadow-none">
                                    <DownloadIcon size={20} />
                                    CV - ES
                                </button>
                                <button className="btn btn-secondary btn-outline rounded-lg w-fit shadow-none">
                                    <DownloadIcon size={20} />
                                    CV - EN
                                </button>
                            </div>
                        </div>
                        <div className="h-full relative">
                            <div className="w-[400px] aspect-square bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href={data.linkedin} target="_blank">
                                <button className="btn btn-circle btn-outline btn-secondary">
                                    <LinkedinIcon size={20} />
                                </button>
                            </Link>
                            <Link href={data.github} target="_blank">
                                <button className="btn btn-circle btn-outline btn-secondary">
                                    <GithubIcon size={20} />
                                </button>
                            </Link>
                            <Link href={`mailto:${data.email}`} target="_blank">
                                <button className="btn btn-circle btn-outline btn-secondary">
                                    <MailIcon size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
