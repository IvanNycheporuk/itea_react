import React from 'react';

import Row from './Row';
import Cell from './Cell';

const Table = () => (
    <>
        <h2>Table goes here</h2>
        <table className="table">
            <tbody>
                <Row head="true">The table</Row>
                <Row>
                    <Cell type="date">12.02.2003</Cell>
                    <Cell type="money" currency="$">300</Cell>
                    <Cell type="money">1300</Cell>
                    <Cell type="number" cells="3">3</Cell>
                    <Cell type="" background="red">1</Cell>
                </Row>
                <Row />
            </tbody>    
        </table>  
    </>
)

export default Table;