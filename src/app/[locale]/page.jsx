import Image from "next/image";
import data from "@/lib/data";
import Link from "next/link";
import { useTranslations } from "next-intl";

// Components
import {
    ArrowRight,
    CaretsDown,
    DownloadIcon,
    ExportIcon,
    GithubIcon,
    LanguageIcon,
    LinkedinIcon,
    MailIcon,
    PaperPlaneIcon,
    CodeIcon,
    TechIcon,
    ContactIcon,
    CertificateIcon,
} from "@/components/icons";
import * as Icons from "@/components/icons";

export default function Home() {
    const t = useTranslations("Index");

    return (
        <>
            <section className="w-full px-3 mb-[170px]">
                <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center pb-10">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col gap-5 w-full max-w-[530px]">
                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold text-primary">
                                    {t("hero__subtitle")}
                                </h3>
                                <h1 className="[font-weight:900] text-7xl tracking-tight leading-[0.9]">
                                    {t("hero__title")}
                                </h1>
                            </div>
                            <p className="text-pretty text-lg">
                                {t.rich("hero__description", {
                                    important: (chunks) => (
                                        <span className="text-primary font-semibold">{chunks}</span>
                                    ),
                                })}
                            </p>
                            <div className="flex gap-5">
                                <Link href={`mailto:${data.email}`} target="_blank">
                                    <button className="btn btn-primary rounded-lg w-fit shadow-none">
                                        <MailIcon size={20} />
                                        {t("hero__email")}
                                    </button>
                                </Link>
                                <Link href="/documents/CV-ES.pdf" target="_blank">
                                    <button className="btn btn-secondary btn-outline rounded-lg w-fit shadow-none">
                                        <DownloadIcon size={20} />
                                        CV - ES
                                    </button>
                                </Link>
                                <Link href="/documents/CV-EN.pdf" target="_blank">
                                    <button className="btn btn-secondary btn-outline rounded-lg w-fit shadow-none">
                                        <DownloadIcon size={20} />
                                        CV - EN
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="h-full relative items-end hidden lg:flex">
                            <Image
                                src={process.env.NEXT_PUBLIC_APP_DOMAIN + "/hero-image.png"}
                                width={400}
                                height={400}
                                style={{ objectFit: "contain", width: 400, height: "auto" }}
                                alt="Imagen de Andres Gutierrez"
                                priority
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
                            <p>{t("hero__stat--years")}</p>
                        </div>
                        <div className="">
                            <h1 className="text-5xl font-extrabold tracking-tight">
                                +{data.stats.certificationsCount}
                            </h1>
                            <p>{t("hero__stat--certifications")}</p>
                        </div>
                        <div className="">
                            <h1 className="text-5xl font-extrabold tracking-tight">
                                +{data.stats.websitesBuilt}
                            </h1>
                            <p>{t("hero__stat--projects")}</p>
                        </div>
                        <div className="">
                            <h1 className="text-5xl font-extrabold tracking-tight">
                                +{data.stats.commitsCount.toLocaleString()}
                            </h1>
                            <p>{t("hero__stat--commits")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="animate-bounce text-center flex flex-col items-center gap-1 absolute top-[90vh] left-1/2 -translate-x-1/2">
                <h3 className="font-bold tracking-tight text-xl Capitalize">{t("hero__scroll")}</h3>
                <CaretsDown size={25} />
            </div>

            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto py-10">
                    <h1 className="text-5xl font-extrabold tracking-tight text-center mb-12">
                        {t("about__title")}
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
                            <div className="flex flex-col gap-4 leading-tight text-lg text-pretty">
                                {t.rich("about__description", {
                                    important: (chunks) => (
                                        <span className="text-primary font-semibold">{chunks}</span>
                                    ),
                                    p: (chunks) => <p className="text-pretty">{chunks}</p>,
                                })}
                            </div>
                        </div>
                        <div>
                            <ol className="relative border-s-2 border-secondary">
                                {data.experiences.map((ex, index) => (
                                    <li className="mb-7 ms-4" key={index}>
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
                                                    {t(ex.title)}
                                                </p>
                                            </div>
                                            <p className="leadint-tight text-base font-normal text-secondary/80">
                                                {t(ex.description)}
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
                    <h1 className="text-5xl font-extrabold tracking-tight py-10 flex items-center justify-center gap-2">
                        <TechIcon />
                        {t("skills__title")}
                    </h1>
                    <div className="flex flex-wrap items-center gap-[50px] justify-center">
                        {data.techStack.map((skill, index) => {
                            const Icon =
                                Icons[skill.replace(".js", "").replace(".io", "").concat("Icon")] ||
                                Icons.LanguageIcon;

                            return (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <Icon size={50} />
                                    <p className="text-center text-sm font-bold">{skill}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="w-full px-3">
                <div className="w-full max-w-[1200px] mx-auto py-10">
                    <h1 className="text-5xl font-extrabold tracking-tight py-10 flex items-center gap-4">
                        <CodeIcon size={45} />
                        {t("projects__title")}
                    </h1>
                    <div>
                        {data.projects.map((project, index) => (
                            <div key={index} className="flex gap-10 py-8">
                                <figure className="h-fit duration-300 bg-secondary flex-1 rounded-lg group overflow-hidden hover:-translate-y-1">
                                    <Image
                                        src={process.env.NEXT_PUBLIC_APP_DOMAIN + project.image}
                                        width={500}
                                        height={500}
                                        alt={project.name}
                                        className="w-full h-[285px] object-contain rounded-lg aspect-square shadow-lg shadow-black/50 scale-[1.15] group-hover:scale-[1] duration-300"
                                    />
                                </figure>
                                <div className="flex-1 flex flex-col">
                                    <h2 className="text-3xl font-extrabold tracking-tight mb-1.5">
                                        {t(project.name)}
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map((tag, index) => (
                                            <p
                                                key={index}
                                                className="badge badge-secondary badge-soft"
                                            >
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                    <p className="mt-5 grow text-pretty">
                                        {t(project.description)}
                                    </p>
                                    <div className="flex gap-5">
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="btn btn-primary rounded-lg px-5 shadow-none"
                                            >
                                                <ExportIcon />
                                                <span>Link</span>
                                            </Link>
                                        )}
                                        {project.github && (
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="btn btn-primary rounded-lg px-5 shadow-none"
                                            >
                                                <GithubIcon />
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
                        <h1 className="text-5xl font-extrabold tracking-tight flex items-center gap-4">
                            <CertificateIcon size={45} />
                            {t("certificates__title")}
                        </h1>

                        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10">
                            {data.certificates.map((certificate, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col rounded-xl overflow-hidden border border-black/10 group"
                                >
                                    <div className="w-full bg-sky-500 h-1"></div>
                                    <div className="w-full bg-white p-2 border-b border-black/10 tracking-tight font-medium z-[1]">
                                        {certificate.title}
                                    </div>
                                    <figure className="w-full relative max-h-[200px]">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/75 z-[1]"></div>
                                        <Image
                                            src={certificate.image}
                                            width={600}
                                            height={300}
                                            alt={"imagen de " + certificate.title}
                                            className="h-full w-full object-contain scale-[1.2] group-hover:scale-[.9] duration-300 z-[-1]"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between z-[1]">
                                            <Link href={certificate.link} target="_blank">
                                                <p className="text-white tracking-loose text-sm font-medium">
                                                    {t("certificates__view")}
                                                </p>
                                            </Link>
                                            <Link href={certificate.link} target="_blank">
                                                <ArrowRight size={20} className="text-white" />
                                            </Link>
                                        </div>
                                    </figure>
                                </div>
                            ))}
                        </div>

                        <div className="w-full flex justify-center">
                            <Link href={data.linkedin + "/details/certifications/"} target="_blank">
                                <button className="btn btn-primary flex gap-4 items-center">
                                    {t("certificates__all")}
                                    <ArrowRight size={18} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-3 mb-[100px]">
                <div className="w-full max-w-[1200px] mx-auto py-10">
                    <div className="flex flex-col gap-2 py-10">
                        <h1 className="text-5xl font-extrabold tracking-tight flex items-center gap-2">
                            <ContactIcon size={50} />
                            {t("contact__title")}
                        </h1>
                        <p className="text-xl text-pretty">{t("contact__description")}</p>
                    </div>

                    <div className="card bg-white/80 backdrop-blur-[2px] shadow-xl h-fit w-full">
                        <div className="card-body [&_p]:grow-0 px-8 py-10">
                            <form className="space-y-2">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label font-medium text-base">
                                        {t("contact__label--email")}:
                                    </label>
                                    <input
                                        className="input w-full focus:outline-0 focus:border-primary bg-transparent"
                                        placeholder={t("contact__placeholder--email")}
                                        name="user_email"
                                    />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="fieldset-label font-medium text-base">
                                        {t("contact__label--subject")}:
                                    </label>
                                    <input
                                        className="input w-full focus:outline-0 focus:border-primary bg-transparent"
                                        placeholder={t("contact__placeholder--subject")}
                                        name="email_subject"
                                    />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="fieldset-label font-medium text-base">
                                        {t("contact__label--message")}:
                                    </label>
                                    <textarea
                                        className="textarea w-full focus:outline-0 focus:border-primary bg-transparent resize-none h-32"
                                        placeholder={t("contact__placeholder--message")}
                                        name="email_message"
                                    ></textarea>
                                </fieldset>

                                <div className="form-control flex flex-col gap-1 w-full pt-5">
                                    <button className="btn w-full btn-primary">
                                        <PaperPlaneIcon size={20} />
                                        <span>{t("contact__submit")}</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
