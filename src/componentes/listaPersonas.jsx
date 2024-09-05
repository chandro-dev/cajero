import { useState, useEffect } from 'react';
import data from '../personas.json'; // Ajusta la ruta según la ubicación de tu archivo JSON
import { useNavigate } from "react-router-dom";


const ListaPersonas = () => {
    const navigate = new useNavigate();
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        setPersonas(data.Personas);
    }, []);
    const handleBack = () => {
        navigate("/cajero");
      };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Lista de Personas</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona, index) => (
                <li key={index} className="bg-white shadow-md rounded-lg p-4 border">
                    {persona.tarjeta ? (
                        <div className="text-gray-700">
                            <strong className="text-xl">Tarjeta:</strong> {persona.tarjeta}
                            <br />
                            <strong className="text-lg">Clave:</strong> {persona.clave.clave || 'No disponible'}
                            <br />
                            <strong className="text-lg">Expiración:</strong> {persona.clave.expiracion || 'No disponible'}
                            <br />
                            <strong className="text-lg">Saldo:</strong> {persona.clave.saldo ? `$${persona.clave.saldo}` : 'No disponible'}
                            <br />
                            <strong className="text-lg">Bloqueada:</strong> {persona.clave.bloqueada ? 'Sí' : 'No'}
                        </div>
                    ) : (
                        <div className="text-gray-700">
                            <strong className="text-xl">Celular:</strong> {persona.cedular || 'No disponible'}
                            <br />
                            <strong className="text-lg">Clave:</strong> {persona.clave.clave || 'No disponible'}
                            <br />
                            <strong className="text-lg">Expiración:</strong> {persona.clave.expiracion || 'No disponible'}
                            <br />
                            <strong className="text-lg">Saldo:</strong> {persona.clave.saldo ? `$${persona.clave.saldo}` : 'No disponible'}
                            <br />
                            <strong className="text-lg">Bloqueada:</strong> {persona.clave.bloqueada ? 'Sí' : 'No'}
                        </div>
                    )}
                </li>
            ))}
        </ul>
        <div className="mt-6 text-center">
            <button
                onClick={handleBack}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
                Volver
            </button>
        </div>
    </div>
    );
};

export default ListaPersonas;