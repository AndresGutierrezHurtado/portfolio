import Project from "./project.jsx";

export default function Projects() {
    const projects = [
        {
            title: "Express Sale",
            src: "/img/express-sale.jpg",
            lenguages: ["PHP", "Tailwind", "JavaScript"],
            description:
                "Express Sale es un sistema de información para la venta y distribución de productos de primera necesidad.",
            href: "/",
            github: "",
            btn: "Sitio Web",
        },
        {
            title: "Uniformes la abejita 22",
            src: "/img/Abejita22.jpg",
            lenguages: ["Laravel", "Tailwind", "JavaScript"],
            description:
                "La abejita 22 es un sistema de información para la venta de uniformes escolares.",
            href: "/",
            github: "",
            btn: "Sitio Web",
        },
        {
            title: "AC Computers",
            src: "/img/ac-computers.png",
            lenguages: ["Node", "Tailwind", "Express"],
            description:
                "AC Computers es un catálogo de componentes para computadores.",
            href: "https://ac-computers.onrender.com/",
            github: "",
            btn: "Sitio Web",
        },
        {
            title: "Pet's Hoddies",
            src: "/img/pets-hoddies.jpg",
            lenguages: ["React", "Tailwind", "Express", "Node"],
            description:
                "Pet's hoddies es un sistema de información para la venta de ropa y accesorios para mascotas.",
            href: "/",
            github: "",
            btn: "Sitio Web",
        },
    ];

    return (
        <section
            id="section-Project"
            className="w-full max-w-[900px] mx-auto space-y-10"
        >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
                <i className="fa-solid fa-code text-2xl md:text-3xl px-3"></i>
                Project
            </h1>

            <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        src={project.src}
                        lenguages={project.lenguages}
                        description={project.description}
                        href={project.href}
                        btn={project.btn}
                    />
                ))}
            </div>
        </section>
    );
}