import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EmergenciaListItem from './components/EmergenciaListItem';
import DescricaoEmergencia from './components/DescricaoEmergencia';
import api from './api';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [emergencia, setEmergencia] = useState(null);

    useEffect(() => {
        api.get('/emergencies').then((response) => setData(response.data.reverse()))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    const getEmergencies = () => {
        var emergencies = [];
        for (var i = 0; i < data.length; i++) {
            emergencies.push(<EmergenciaListItem key={data[i].id} emergencia={data[i]} onClick={(emer) => { setEmergencia(emer) }} />)
        }

        return emergencies;
    }

    return (
        <div className="App">
            <Header />
            <div className='container d-flex justify-content-center my-3'>
                <h2 className='font-weight-bold'>Canal de Emergência - MRS</h2>
            </div>
            <div className='container p-3'>
                <div className='row'>
                    <div className='col-4 border  border-secondary'>
                        {
                            data.length > 0 ?
                                getEmergencies()
                                : (<p>Sem emergências</p>)
                        }
                    </div>
                    <div className='col-8 border  border-secondary'>
                        <DescricaoEmergencia emergencia={emergencia} limpar={() => { setEmergencia(null) }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
