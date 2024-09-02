import Certificate from "./certificate";

export default function Certificates() {
    const certificates = [
        {
            nombre: "Lenguaje de programación Python",
            institucion: "Universidad Distrital",
            url: "/certificados/python-u.pdf",
        },
        {
            nombre: "Programación con JavaScript",
            institucion: "Movistar",
            url: "/certificados/Programacion-JS.pdf",
        },
        {
            nombre: "Fundamentos de programación",
            institucion: "Movistar",
            url: "/certificados/Fundamentos-programación.pdf",
        },
        {
            nombre: "Construcción de Bases de datos con MYSQL",
            institucion: "SENA",
            url: "/certificados/CBDMYSQL.pdf",
        },
        {
            nombre: "Desarrollo Web con PHP",
            institucion: "SENA",
            url: "/certificados/Desarrollo-php.pdf",
        },
        {
            nombre: "Variables y estructuras de control en Python",
            institucion: "SENA",
            url: "/certificados/VyE-PYTHON.pdf",
        },
        {
            nombre: "Variables y estructuras de control en Java",
            institucion: "SENA",
            url: "/certificados/VyE-Java.pdf",
        },
    ];

    return (
        <section
            id="section-certificados"
            className="w-full max-w-[900px] mx-auto"
        >
            <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 mb-6">
                    <i className="fa-solid fa-certificate text-2xl md:text-3xl px-3"></i>
                    Certificados
                </h2>
                <p className="text-lg text-gray-800">
                    A lo largo de mi aprendizaje autodidacta, he dedicado tiempo
                    y esfuerzo para adquirir habilidades valiosas. Estos
                    certificados son testimonio de mi compromiso con el
                    crecimiento personal y la mejora continua:
                </p>
            </div>
            <div className="relative my-5 flex justify-center items-center">
                {/* Scroll Buttons */}
                <button
                    id="scrollRight"
                    className="absolute top-1/2 -translate-y-1/2 right-[10px] bg-gray-200 bg-opacity-70 backdrop-blur rounded-full aspect-square w-[50px] border flex justify-center items-center"
                >
                    <i
                        className="fa-solid fa-arrow-right"
                        aria-hidden="true"
                    ></i>
                </button>
                <button
                    id="scrollLeft"
                    className="absolute top-1/2 -translate-y-1/2 left-[10px] bg-gray-200 bg-opacity-70 backdrop-blur rounded-full aspect-square w-[50px] border flex justify-center items-center"
                >
                    <i
                        className="fa-solid fa-arrow-left"
                        aria-hidden="true"
                    ></i>
                </button>

                {/* Container */}
                <div
                    id="scrollContainer"
                    className="w-full cartas-scroll flex gap-5 overflow-x-scroll touch-auto snap-x snap-mandatory scroll-smooth scroll-pl-[5px] md:scroll-pl-[15px]"
                >
                    {certificates.map((certificate, index) => (
                        <Certificate
                            key={index}
                            nombre={certificate.nombre}
                            institucion={certificate.institucion}
                            url={certificate.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
