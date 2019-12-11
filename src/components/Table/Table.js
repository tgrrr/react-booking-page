import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const tableHeadings = [
    'ID',
    'Product Name',
    'Quantity',
    'Rate',
    'Cost',
]

const Table = () => (
    <BootstrapTable striped bordered hover>
        <thead>
            <tr>
            {tableHeadings.map(heading =>
                <th key={heading}> {heading}</th>
            )}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>

        </tbody>
    </BootstrapTable>
)

export default Table

