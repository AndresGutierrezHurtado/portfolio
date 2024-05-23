import React from "react";

function Certificados(props) {
    return(
        <>
            <div className="card min-w-[224px] max-w-[225px] h-44 flex flex-col justify-between border rounded-md p-5 bg-white shadow-lg my-5">
                <div className="h-auto d-flex flex-col justify-between">
                    <p className="text-md">{props.nombre}</p>
                    <p className="italic text-gray-800/60">{props.institucion}</p>
                </div>
                <a href={props.url} target="_blank" className="flex justify-center items-center border py-2 px-4 rounded-lg gap-2 hover:bg-gray-100 duration-300"><i className="fa-regular fa-file-pdf"></i> Documento</a>
            </div>
        </>
    );
}


export default Certificados