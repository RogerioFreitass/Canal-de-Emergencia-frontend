import React from "react";
import { FiChevronRight } from "react-icons/fi";
import './EmergenciaListItem.css'


const EmergenciaListItem = (props) => {

    var emergencia = props.emergencia;

    return (
        <div className="emer-item container p-2 d-flex flex-row justify-content-between rounded" onClick={() => { props.onClick(emergencia) }}>
            <div className="d-flex flex-column align-items-start">
                <h4 className="emer-item-title">{emergencia.tipo}</h4>
                <h4>{emergencia.horario}</h4>
            </div>
            <div className="d-flex align-items-center">
                <FiChevronRight size={30} />
            </div>
        </div>
    )
}

export default EmergenciaListItem;