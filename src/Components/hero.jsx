export default function Hero() {
    return (
        <section
            id="section-inicio"
            className="w-full max-w-[900px] mx-auto space-y-6"
        >

            {/*  Photo and Badge container */}
            <div className="flex gap-6 items-center">
                <div className="size-[65px] rounded-full shadow-lg overflow-hidden">
                    <img
                        src="/img/Foto-perfil.jpg"
                        alt="Foto-principal"
                        className="object-cover w-full h-full"
                    />
                </div>

                <a
                    href="https://www.linkedin.com/in/andres-gutiérrez-hurtado-25946728b/"
                    target="_blank"
                >
                    <div className="flex items-center">
                        <span className="relative inline-flex overflow-hidden rounded-full p-[1px] hover:scale-105 duration-300	">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                            <div className="inline-flex items-center justify-center w-full px-5 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap">
                                Disponible
                            </div>
                        </span>
                    </div>
                </a>
            </div>

            {/* Hero text */}
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl	font-bold tracking-tight text-gray-800">
                    Hey, Soy Andrés Gutiérrez
                </h1>
                <p className="mt-6 text-xl text-gray-800 text-balance">
                    <span className="text-sky-600 font-bold">Técnico en Programación de Software</span> con formación académica certificada en diversas tecnologías,
                    con <span className="text-sky-600 font-bold">dominio del idioma inglés nivel B1</span> y en formación como Tecnólogo en Análisis y Desarrollo de
                    Software.
                </p>
            </div>

            {/* Links buttons */}
            <div className="flex gap-6 flex-col sm:flex-row text-center sm:text-start">
                <a
                    href="mailto:andres52885241@gmail.com"
                    target="_blank"
                    className="bg-gray-50 hover:bg-gray-100 duration-300 py-1 px-4 rounded-full border border-gray-300	text-gray-800"
                >
                    <i className="fa-regular fa-envelope pr-1"></i> Contáctame
                </a>
                <a
                    href="https://www.linkedin.com/in/andres-gutiérrez-hurtado-25946728b/"
                    target="_blank"
                    className="bg-gray-50 hover:bg-gray-100 duration-300 py-1 px-4 rounded-full border border-gray-300	text-gray-800"
                >
                    <i className="fa-brands fa-linkedin pr-1"></i> Linkedin
                </a>
                <a
                    href="https://github.com/AndresGutierrezHurtado"
                    target="_blank"
                    className="bg-gray-50 hover:bg-gray-100 duration-300 py-1 px-4 rounded-full border border-gray-300	text-gray-800"
                >
                    <i className="fa-brands fa-github pr-1"></i> GitHub
                </a>
                <a
                    href="/documentos/CV-Andres-Gutierrez.pdf"
                    target="_blank"
                    className="bg-gray-50 hover:bg-gray-100 duration-300 py-1 px-4 rounded-full border border-gray-300	text-gray-800"
                >
                    <i className="fa-regular fa-circle-down pr-1"></i> Descarga
                    mi CV
                </a>
            </div>
        </section>
    );
}
