export default function Certificate(props) {
    return (
        <div className="card snap-start snap-always min-w-[224px] max-w-[225px] h-44 flex flex-col justify-between border rounded-md p-5 bg-white shadow-lg my-5">
            <div className="h-auto d-flex flex-col justify-between">
                <p className="text-md">{props.nombre}</p>
                <p className="italic text-gray-800/60">{props.institucion}</p>
            </div>
            <a
                href={props.url}
                target="_blank"
                    className="btn border border-gray-300 bg-gray-50 hover:bg-gray-200 text-gray-600 btn-sm py-3 h-auto px-5"
            >
                <i className="fa-regular fa-file-pdf"></i> Documento
            </a>
        </div>
    );
}
