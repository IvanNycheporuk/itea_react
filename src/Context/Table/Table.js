import React, { useContext } from 'react';

import Row from './Row';
import Cell from './Cell';
import { ThemeContext } from '../theme-context';

const Table = () => {
    const theme = useContext( ThemeContext );

    return (
        <>
            <h2>Table goes here</h2>
            <table className="table">
                <tbody 
                    style={{
                            color: theme.color,
                            background: theme.background
                        }}>
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
}

export default Table;