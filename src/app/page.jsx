import Image from "next/image";
import data from "@/lib/data";
import Link from "next/link";
import { CaretsDown, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import * as Icons from "@/components/icons";

export default function Home() {
    return (
        <>
            <section className="w-full px-3 mb-[170px]">
                <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center pb-10">
                    <div className="flex flex-row items-center justify-between">
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
                        <div className="h-full relative items-end hidden lg:flex">
                            <Image
                                src={process.env.NEXT_PUBLIC_APP_DOMAIN + "/hero-image.png"}
                                width={400}
                                height={400}
                                alt="Andres Gutierrez"
                            />
                            <div className="w-[400px] aspect-square bg-primary rounded-full absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
                        </div>
                        <div className="flex flex-col gap-3 hidd">
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
                    <div className="w-full border-[1.5px] border-secondary p-5 rounded-lg grid-cols-4 text-center bg-white/30 backdrop-blur-[5px] hidden lg:grid">
                        <div className="">
                            <h1 className="text-5xl font-extrabold tracking-tight">
                                {data.stats.yearsOfExperience}
                            </h1>
                            <p>Years of experience</p>
                        </div>
                        <div className="">
                            <h1 className="text-5xl font-extrabold tracking-tight">
                                +{data.stats.certificationsCount}
                            </h1>
                            <p>Certifications</p>
                        </div>
                        <div className="">
                            <h1 className="text-5xl font-extrabold tracking-tight">
                                +{data.stats.websitesBuilt}
                            </h1>
                            <p>Websites built</p>
                        </div>
                        <div className="">
                            <h1 className="text-5xl font-extrabold tracking-tight">
                                +{data.stats.commitsCount.toLocaleString()}
                            </h1>
                            <p>Commits on GitHub</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="animate-bounce text-center flex flex-col items-center gap-1 absolute top-[90vh] left-1/2 -translate-x-1/2">
                <h3 className="font-bold tracking-tight text-xl">SCROLL DOWN</h3>
                <CaretsDown size={25} />
            </div>

            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto py-10">
                    <h1 className="text-5xl font-extrabold tracking-tight text-center mb-12">
                        Sobre mi 👋
                    </h1>
                    <div className="flex [&>*]:flex-1 gap-10 items-center">
                        <div className="flex flex-col gap-10">
                            <figure className="flex flex-col gap-7 items-center">
                                <Image
                                    src={process.env.NEXT_PUBLIC_APP_DOMAIN + "/about-image.jpg"}
                                    width={200}
                                    height={200}
                                    alt="Andres Gutierrez"
                                    className="rounded-lg aspect-square object-cover bg-black rotate-[-5deg] shadow-lg shadow-black/50"
                                />
                                <div className="w-full max-w-[150px] h-1.5 bg-primary rounded-full"></div>
                            </figure>
                            <div
                                className="flex flex-col gap-4 leading-tight"
                                dangerouslySetInnerHTML={{ __html: data.about }}
                            ></div>
                        </div>
                        <div>
                            <ol className="relative border-s-2 border-secondary">
                                {data.experiences.map((ex, index) => (
                                    <li className="mb-10 ms-4" key={index}>
                                        <div className="absolute w-3 h-3 bg-secondary rounded-full mt-[8px] -start-[6.5px] border border-white"></div>
                                        <time className="mb-1 text-sm font-normal leading-none text-secondary/80 font-medium">
                                            {ex.dateStart.toLocaleString("en-US", {
                                                month: "long",
                                                year: "numeric",
                                            })}{" "}
                                            -{" "}
                                            {ex.dateEnd.toLocaleString("en-US", {
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </time>
                                        <div className="flex flex-col gap-2 pt-1">
                                            <div>
                                                <h3 className="text-lg font-bold text-secondary leading-[0.9]">
                                                    {ex.company}
                                                </h3>
                                                <p className="text-sm font-medium italic">
                                                    {ex.title}
                                                </p>
                                            </div>
                                            <p className="mb-4 text-base font-normal text-secondary/80">
                                                {ex.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto py-10">
                    <h1 className="text-5xl font-extrabold tracking-tight py-10">Tech Stack</h1>
                    <div className="flex flex-wrap items-center gap-[50px] justify-center">
                        {data.techStack.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <Icons.LanguageIcon size={50} />
                                <p className="text-center text-sm font-bold">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto py-10">
                    <h1 className="text-5xl font-extrabold tracking-tight py-10">Projects</h1>
                    <div>
                        {data.projects.map((project, index) => (
                            <div
                                key={index}
                                className="flex gap-5 border border-black/10 p-8 rounded-xl "
                            >
                                <figure className="border aspect-video border w-1/2 rounded-lg">
                                    {/* <Image
                                        src={process.env.NEXT_PUBLIC_APP_DOMAIN + project.image}
                                        width={500}
                                        height={500}
                                        alt={project.name}
                                        className="object-cover rounded-lg aspect-square shadow-lg shadow-black/50"
                                    /> */}
                                </figure>
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-bold">{project.name}</h2>
                                    <div className="flex flex-wrap gap-5">
                                        {project.tags.map((tag, index) => (
                                            <p
                                                key={index}
                                                className="badge badge-secondary badge-soft"
                                            >
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                    <p className="mt-5 grow">{project.description}</p>
                                    <div className="flex gap-5">
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="btn btn-primary rounded-lg px-5 shadow-none"
                                            >
                                                <Icons.ExportIcon />
                                                <span>Link</span>
                                            </Link>
                                        )}
                                        {project.github && (
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="btn btn-primary rounded-lg px-5 shadow-none"
                                            >
                                                <Icons.GithubIcon />
                                                <span>GitHub</span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto py-10">
                    <div className="flex flex-col gap-10">
                        <h1 className="text-5xl font-extrabold tracking-tight">Certificates</h1>

                        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                            {data.certificates.map((certificate, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col rounded-xl overflow-hidden border border-black/10"
                                >
                                    <div className="w-full bg-sky-500 h-1"></div>
                                    <div className="w-full bg-white p-2 border-b border-black/10 tracking-tight font-medium">
                                        {certificate.title}
                                    </div>
                                    <figure className="w-full bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)40%,_rgba(0,0,0,0.65)100%)] relative">
                                        <Image
                                            src={certificate.image}
                                            width={500}
                                            height={200}
                                            alt={"imagen de " + certificate.title}
                                            className="object-cover aspect-3/2 shadow-lg shadow-black/50"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between">
                                            <Link href="" target="_blank">
                                                <p className="text-white tracking-loose text-sm font-medium">
                                                    View Certificate
                                                </p>
                                            </Link>
                                            <Link href="" target="_blank">
                                                <Icons.ArrowRight
                                                    size={20}
                                                    className="text-white"
                                                />
                                            </Link>
                                        </div>
                                    </figure>
                                </div>
                            ))}
                        </div>

                        <div className="w-full flex justify-center">
                            <Link href={data.linkedin + "/details/certifications/"} target="_blank">
                                <button className="btn btn-primary">View all certificates</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-3 mb-[100px]">
                <div className="w-full max-w-[1200px] mx-auto py-10">
                    <h1 className="text-5xl font-extrabold tracking-tight py-10">Contact</h1>
                </div>
            </section>
        </>
    );
}
