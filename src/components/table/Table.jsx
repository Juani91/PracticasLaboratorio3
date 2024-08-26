import PropTypes from "prop-types";


const Table = ({ netIncomes }) => {

    const totalIncomes = (netIncomes.reduce((acum, net) => {return (acum + net.income)}, 0));
    const average = (totalIncomes/netIncomes.length).toFixed(2);

    return (
        <div>
            <h3>Práctica Obligatoria 2</h3>
            <p>1. Tabla con nombres de compañía e ingreso neto:</p>
            <table border={'1px solid white'} width={'300px'}>
                <thead>
                    <tr>
                        <th>Compañía</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        netIncomes.map((net) => (
                            <tr key={net.id}>
                                <td>{net.brand}</td>
                                <td>$ {net.income}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <p>2. Promedio de ingreso neto entre todas las marcas:</p>

            <p>El promedio de los <strong>Ingresos Netos</strong> de las empresas es de: $ {average}.</p>

        </div>
    )
}

Table.propTypes = {
    incomes: PropTypes.array,
}

export default Table;