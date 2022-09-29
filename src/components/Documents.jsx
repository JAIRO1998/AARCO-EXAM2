import React from 'react'
import { Buttons } from './Buttons'

export const Documents = () => {
  return (
    <div className='container container-docs'>
        <h4 className='pt-3'>Documentos</h4>
        <table className="table">
        <tbody>
            <tr>
                <th scope="row">
                    <div className=''>
                        <button type="button" class="btn btn-secondary btn-sm me-1 rounded-circle"><i class="fa-sharp fa-solid fa-file"></i></button>
                    </div>
                </th>
                <td>
                    <h5>Asegurómetro líneas personales <span className='elipse_verde'>Nuevo</span></h5>
                    <h6>Aqui encontraras el rankinf de aseguradoras.consultalo</h6>
                </td>
                <td>
                    <div className='elipse_gris'>
                        <h6>11/01/22</h6>
                    </div>
                </td>
                <Buttons />
            </tr>
            <tr>
                <th scope="row">
                    <div className=''>
                        <button type="button" class="btn btn-secondary btn-sm me-1 rounded-circle"><i class="fa-sharp fa-solid fa-file"></i></button>
                    </div>
                </th>
                <td>
                    <h5>Tiempos de Respuesta</h5>
                    <h6>Tiempos de respiesta (lineas personales)</h6>
                </td>
                <td>
                    <div className='elipse_gris'>
                        <h6>11/01/22</h6>
                    </div>
                </td>
                <Buttons />
            </tr>
            <tr>
                <th scope="row">
                    <div className=''>
                        <button type="button" class="btn btn-secondary btn-sm me-1 rounded-circle"><i class="fa-sharp fa-solid fa-file"></i></button>
                    </div>
                </th>
                <td>
                    <h5>Nuevo sitio personalizado</h5>
                    <h6>Tiempos de respuesta (Lineas personales)</h6>
                </td>
                <td>
                    <div className='elipse_gris'>
                        <h6>11/01/22</h6>
                    </div>
                </td>
                <Buttons />
            </tr>
            <tr>
                <th scope="row">
                    <div className=''>
                        <button type="button" class="btn btn-secondary btn-sm me-1 rounded-circle"><i class="fa-sharp fa-solid fa-file"></i></button>
                    </div>
                </th>
                <td>
                    <h5>Tiempos de Respuesta</h5>
                    <h6>Tiempos de respiesta (lineas personales)</h6>
                </td>
                <td>
                    <div className='elipse_gris'>
                        <h6>11/01/22</h6>
                    </div>
                </td>
                <Buttons />
            </tr>
        </tbody>
        </table>
    </div>
  )
}
