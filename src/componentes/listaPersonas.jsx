import  { useState, useEffect } from 'react';
import data from '../personas.json'; // Ajusta la ruta según la ubicación de tu archivo JSON


const ListaPersonas = () => {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        // Simula la carga de datos del JSON
        setPersonas(data.Personas);
    }, []);

    return (
        <div>
            <h1>Lista de Personas</h1>
            <ul>
                {personas.map((persona, index) => (
                    <li key={index}>
                        {persona.tarjeta ? (
                            <div>
                                <strong>Tarjeta:</strong> {persona.tarjeta}
                                <br />
                                <strong>Clave:</strong> {persona.clave || 'No disponible'}
                            </div>
                        ) : (
                            <div>
                                <strong>Cedular:</strong> {persona.cedular || 'No disponible'}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaPersonas;