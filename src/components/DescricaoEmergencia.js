import React, { useState } from "react";
import './DescricaoEmergencia.css'

const DescricaoEmergencia = (props) => {
    var emergencia = props.emergencia;


    return (
        <div className="container w-100">
            {emergencia != null ?
                <div className="d-flex flex-column align-items-start">
                    <div className="d-flex flex-row justify-content-start">
                        <label className="descricao-title m-1">Tipo: </label>
                        <p className="m-1">{emergencia.tipo}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-start">
                        <label className="descricao-title m-1">ID Usuário: </label>
                        <p className="m-1">{emergencia.id_usuario}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-start">
                        <label className="descricao-title m-1">Nome do usuário: </label>
                        <p className="m-1">{emergencia.nome_usuario}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-start">
                        <label className="descricao-title m-1">Horário: </label>
                        <p className="m-1">{emergencia.horario}</p>
                    </div>
                    {emergencia.descricao == '' ?
                        <></>
                        : (<div className="d-flex flex-row justify-content-start">
                            <label className="descricao-title m-1">Descrição: </label>
                            <p className="m-1">{emergencia.descricao}</p>
                        </div>)
                    }
                    <div className="d-flex flex-column align-items-start">
                        <label className="descricao-title m-1">Foto da emergência: </label>
                        <img src={emergencia.foto_emergencia} alt="Foto da emergência" width={400} />
                    </div>

                    <div className="d-flex flex-column align-items-start">
                        <label className="descricao-title m-1">Foto do local: </label>
                        <img src={emergencia.foto_local} alt="Foto da emergência" width={400} />
                    </div>

                    {/* <div className="d-flex flex-row justify-content-around w-100 p-4">
                        <div className="descricao-contato">
                            <p className="m-2">Entrar em contato</p>
                        </div>
                        <div className="descricao-concluir">
                            <p className="m-2">Concluir</p>
                        </div>
                    </div> */}
                </div>
                : <></>}
        </div>
    );
}

export default DescricaoEmergencia;