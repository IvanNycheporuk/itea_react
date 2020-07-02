import React from 'react';    

const Row = ({ head, children }) => {
    return (
        head ? 
        <tr>
            <th>{ children }</th>            
        </tr>
        :
        <tr>{ children }</tr>
    )           
}

Row.defaultProps = {
    head: false
}

export default Row;