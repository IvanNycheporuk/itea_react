import React from 'react';

const Cell = ({ type, ...rest }) => {
    switch ( type ){
        case 'date':
            return <CellDate {...rest} />
        case 'number':
            return <CellNumber {...rest} />
        case 'money':
            return <CellMoney {...rest} />
        case 'text':
            return <CellText {...rest} />
        default:
            return <td>Default</td>
    }   
}

const CellDate = ({ cells, background, color, children }) => {
    return (
        <td 
            style={{
                color: color,
                background: background
            }}
            colSpan={cells}
        >
            <i>{children}</i>
        </td>
    )
}

const CellNumber = ({ cells, background, color, children }) => {
    return (
        <td 
            style={{
                color: color,
                background: background,
                textAlign:'right'
            }}
            colSpan={cells}
        >
            {children}
        </td>
    )
}

const CellMoney = ({ cells, background, color, children, currency }) => {

    if(!currency) {
        console.warn('add currency');
    }

    return (
        <td 
            style={{
                color: color,
                background: background,
                textAlign:'right'
            }}
            colSpan={cells}
        >
            <i>{children} {currency}</i>
        </td>
    )
}

const CellText = ({ cells, background, color, children }) => {
    return (
        <td 
            style={{
                color: color,
                background: background,
                textAlign: 'left'
            }}
            colSpan={cells}
        >
            {children}
        </td>
    )
}

Cell.defaultProps = {
    type: 'text',
    cells: 1,
    background: 'red',
    color: 'black'
}

export default Cell;