import { Icons_cat } from "./Icons_cat"

export const Categorias = () => {
  return (
    <>
     <div className="container-cat mb-3">
         <h4>Categorias</h4>
        <table className="table table_cat">
        <tbody>
            <tr>
                <th scope="row">
                  <h5><Icons_cat /> Vida</h5>
                </th>
                <td>
                    <div className='elipse_gris2'>
                        <h6 className="numeros_azules">11</h6>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <h5><Icons_cat /> Gastos Médicos Mayores</h5>
                </th>
                <td>
                    <div className='elipse_gris2'>
                        <h6 className="numeros_azules">5</h6>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <h5><Icons_cat /> Autos</h5>
                </th>
                <td>
                    <div className='elipse_gris2'>
                        <h6 className="numeros_azules">10</h6>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <h5><Icons_cat /> Hogar</h5>
                </th>
                <td>
                    <div className='elipse_gris2'>
                        <h6 className="numeros_azules">12</h6>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <h5><Icons_cat /> Accidentes paternales</h5>
                </th>
                <td>
                    <div className='elipse_gris2'>
                        <h6 className="numeros_azules">5</h6>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <h5><Icons_cat /> Asistencias AARCO</h5>
                </th>
                <td>
                    <div className='elipse_gris2'>
                        <h6 className="numeros_azules">12</h6>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <h5><Icons_cat /> AARCO GO</h5>
                </th>
                <td>
                    <div className='elipse_gris2'>
                        <h6 className="numeros_azules">5</h6>
                    </div>
                </td>
            </tr>
        </tbody>
        </table>
     </div>
    </>
  )
}
