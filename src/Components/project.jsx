export default function Project({ title, src, lenguages, description, href, github, btn }) {
    const languagesList = (lenguages) => {
        const iconMap = {
            PHP: {
                icon: "fab fa-php",
                color: "bg-violet-100",
                textColor: "text-violet-600",
            },
            JavaScript: {
                icon: "fab fa-js",
                color: "bg-yellow-100",
                textColor: "text-yellow-500",
            },
            Python: {
                icon: "fab fa-python",
                color: "bg-blue-200",
                textColor: "text-blue-500",
            },
            HTML: {
                icon: "fab fa-html5",
                color: "bg-red-100",
                textColor: "text-red-500",
            },
            CSS: {
                icon: "fab fa-css3-alt",
                color: "bg-blue-100",
                textColor: "text-blue-500",
            },
            Java: {
                icon: "fab fa-java",
                color: "bg-indigo-100",
                textColor: "text-indigo-500",
            },
            Bootstrap: {
                icon: "fab fa-bootstrap",
                color: "bg-purple-100",
                textColor: "text-purple-500",
            },
            Node: {
                icon: "fab fa-node-js",
                color: "bg-green-100",
                textColor: "text-green-500",
            },
            Angular: {
                icon: "fab fa-angular",
                color: "bg-red-100",
                textColor: "text-red-500",
            },
            Laravel: {
                icon: "fab fa-laravel",
                color: "bg-red-100",
                textColor: "text-red-500",
            },
            Symfony: {
                icon: "fab fa-symfony",
                color: "bg-black",
                textColor: "text-black",
            },
            Tailwind: {
                icon: "fab fa-css3-alt",
                color: "bg-teal-100",
                textColor: "text-teal-500",
            },
            JQuery: {
                icon: "fab fa-js",
                color: "bg-yellow-100",
                textColor: "text-yellow-500",
            },
            React: {
                icon: "fa-brands fa-react",
                color: "bg-sky-100",
                textColor: "text-sky-500",
            },
            Express: {
                icon: "fab fa-js",
                color: "bg-yellow-100",
                textColor: "text-yellow-500",
            },
        };

        return (
            <>
                {lenguages.map((lenguage, index) => (
                    <span
                        key={index}
                        className={`w-fit px-3 py-1 rounded-full ${iconMap[lenguage].color} text-[15px] flex items-center justify-center gap-2 text-black capitalize font-semibold`}
                    >
                        <i
                            className={`${iconMap[lenguage].icon} ${iconMap[lenguage].textColor}`}
                        ></i>
                        {lenguage}
                    </span>
                ))}
            </>
        );
    };

    return (
        <article className="flex flex-col md:flex-row gap-6 group w-full max-w-[5] md:max-w-none">
            <div className="w-full md:w-1/2">
                <div className="flex items-center transition duration-500 ease-in-out shadow-lg overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1.5 max-w-[450px]">
                    <img
                        src={src}
                        alt="Imagen-proyecto"
                        className="w-full h-auto transition duration-500 sm:max-h-full sm:h-56 md:scale-110 md:group-hover:scale-100"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3">
                <h3 className="font-bold text-2xl capitalize">{title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">{languagesList(lenguages)}</div>
                <p className="text-balance"> {description} </p>
                <div className="flex flex-col md:flex-row gap-2">
                    <a
                        href={href}
                        target="_blank"
                        className="tooltip tooltip-info before:font-semibold"
                        data-tip={href ? "Ver sitio web" : "No se ha publicado"}
                    >
                        <button
                            className="btn btn-sm rounded-full bg-gray-50 hover:bg-gray-200 text-gray-600 btn-sm rounded-full px-4 items-center flex disabled:cursor-not-allowed"
                            disabled={!href}
                        >
                            <i className="fa-solid fa-link"></i>
                            Sitio web
                        </button>
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        className="btn btn-sm rounded-full bg-gray-50 hover:bg-gray-200 text-gray-600 btn-sm rounded-full px-4 items-center flex disabled:cursor-not-allowed tooltip tooltip-info before:font-semibold"
                        data-tip="Ver el código de github"
                    >
                        <i className="fab fa-github"></i>
                        Código
                    </a>
                </div>
            </div>
        </article>
    );
}
