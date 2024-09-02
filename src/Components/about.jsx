export default function About() {
    return (
        <section
            id="section-sobre-mi"
            className="w-full max-w-[900px] mx-auto space-y-10"
        >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
                <i className="fa-solid fa-user-check text-2xl md:text-3xl px-3"></i>
                Sobre mí
            </h2>
            <article className="flex flex-col md:flex-row gap-20 md:gap-10">
                <div className="w-full md:w-2/3 flex flex-col gap-4 text-lg">
                    <p>
                        Mi nombre es Andrés Gutiérrez Hurtado, empecé en programación cuando conocí de este ámbito en el colegio hace 3 años. Actualmente <strong className="text-sky-600">estoy estudiando en el programa ADSO del SENA</strong>.
                    </p>
                    <p>
                        Uno de mis mayores logros en este campo, <strong className="text-sky-600">es haber liderado el mejor proyecto de mi colegio</strong>. Ese proyecto es ahora el sitio web oficial de la empresa, y me ayudó mucho a aprender sobre desarrollo web.
                    </p>
                    <p>
                        Mi objetivo es desarrollar aplicativos web de la <strong className="text-sky-600">mayor calidad</strong>, y <strong className="text-sky-600">mejorar todo lo posible en este campo.</strong>
                    </p>
                </div>
                <div className="w-full md:w-1/3 aspect-square rotate-6 rounded-md shadow-xl overflow-hidden">
                    <img
                        src="/img/Foto-2.jpg"
                        alt="Foto-secundaria"
                        className="object-cover h-full w-full"
                    />
                </div>
            </article>
        </section>
    );
}
