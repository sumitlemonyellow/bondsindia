import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>
                    A1
                </th>
                <th>
                    A2
                </th>
            </tr>
        </thead>
    )
}


const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>
                    A1
                </td>
                <td>
                    A2
                </td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody  />
            </table>
        )
    }
}

export default Table;