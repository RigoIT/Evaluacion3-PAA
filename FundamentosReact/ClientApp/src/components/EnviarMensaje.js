// Importaciones base
import React, { useState, useEffect } from 'react'

const usuariosPorDefecto = [
    { nombres: "Rigo_IT", mensaje: "Wenas", like: false, saludo: true },
    { nombres: "Carlos Amaya", mensaje: "Ciao", like: true, saludo: false }
]

// Componente vista
const EnviarMensaje = () => {
    // Estados
    const [usuarios, setUsuarios] = useState(usuariosPorDefecto)
    const [nombres, setNombres] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [like, setLike] = useState(false)
    const [saludo, setSaludo] = useState(false)

    useEffect(() => {
        let copiaUsuarios = [...usuarios]
        const nuevoUsuario = {
            nombres: "Sebastian Lara",
            mensaje: "Saludos Cordiales",
            like: true,
            saludo: true
        }
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }, [])

    // Funciones de eventos
    const handleNombres = (evento) => {
        setNombres(evento.target.value)
    }

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleLike = (evento) => {
        setLike(!like)
    }
    const handleSaludo = (evento) => {
        setSaludo(!saludo)
    }

    const handleIngresoUsuario = (evento) => {
        console.log("Botón presionado") // testing
        const nuevoUsuario = {
            nombres: nombres,
            mensaje: mensaje,
            like: like,
            saludo: saludo
        }

        let copiaUsuarios = [...usuarios]
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }

    // Retorno GUI
    return (
        <>
            <div className="card col-12 mt-3 mb-3">
                <div className="container-fluid">
                    <div className="col-5">
                        <div className="row">
                            <div className="text-center">
                                <h1>Enviar Mensaje</h1>
                            </div>

                        </div>

                        <div className="row">
                            <div>
                                <label htmlFor="nombres">Nombre(s)</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={handleNombres}
                                    value={nombres}
                                    name="nombres"
                                    id="nombres"
                                />
                                <br />
                            </div>

                            <div>
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    onChange={handleMensaje}
                                    value={mensaje}
                                    name="mensaje"
                                    id="mensaje"
                                />
                            </div>
                            <div>
                                <br />
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={like}
                                        onChange={handleLike}
                                        name="like"
                                        id="like" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="like">
                                        Me Gusta 👍
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={saludo}
                                        onChange={handleSaludo}
                                        name="saludo"
                                        id="saludo" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="saludo">
                                        Saludos 👋
                                    </label>
                                </div>
                            </div>
                            
                            <div className="col-12 justify-content-start mt-3">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleIngresoUsuario}
                                >
                                    ¡Enviar mi Mensaje!
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 text-center mt-3">
                            <h1>Mensajes Recibidos en Plataforma</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre(s)</th>
                                        <th>Mensaje</th>
                                        <th>Reacciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((usuario) => {
                                        return (
                                            <tr>
                                                <td>{usuario.nombres}</td>
                                                <td>{usuario.mensaje}</td>
                                                <td colspan='2'>
                                                    {usuario.like ?
                                                        "👍" :
                                                        ""
                                                    }

                                                    {usuario.saludo ?
                                                        "👋​" :
                                                        ""
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <hr />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnviarMensaje