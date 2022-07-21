import React, { Component } from 'react';
import IntegranteFragment from './Fragments/IntegranteFragment'
import ImagenPerfil from '../assets/images/Perfil.gif'
export class Home extends Component {
    static displayName = Home.name;



    render() {
        return (

            <div className="card col-12 mt-3 mb-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-5 mt-3 flex-shrink-0">
                            <IntegranteFragment
                                imagen={ImagenPerfil}
                                titulo="Imagen de Perfil"
                            />

                        </div>
                        <div className="container mt-3 col-5">
                            <h1>
                                Rodrigo Andres Gutierrez Garcia
                            </h1>
                            <p className="lead">
                                Fecha de nacimiento: 15 de noviembre del 2000
                                <br />
                                Carrera: Analista programador
                                <br />
                                Estudiante del Instituto Inacap Calama

                            </p>
                        </div>

                        <div className="container mt-4">
                            <hr />
                            <h1>
                                Habilidades Presentes
                            </h1>
                            <p className="lead">
                                Listado de habilidades de Rodrigo Gutierrez
                            </p>
                            <ul class="list-group">
                                <li class="list-group-item">Manejo en Ofimatica Office</li>
                                <li class="list-group-item">Mantencion e implementacion de aplicaciones web</li>
                                <li class="list-group-item">Mantenimiento de ordenadores</li>
                                <li class="list-group-item">Formateo e insercion de Sistema Operativo en ordenadores</li>
                                <li class="list-group-item">Musico Frustrado</li>
                                <li class="list-group-item">Desarrollador de videojuegos Frustrado</li>
                                <li class="list-group-item">Modelador 3d Frustrado</li>
                                <li class="list-group-item">Main Raiden MK11</li>
                            </ul>
                            <hr />
                            <br />
                            <br />
                            <br />

                        </div>




                    </div>
                </div>
            </div>


        );
    }
}
