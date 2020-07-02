import React from 'react';

const Form = ({ submit, children }) => (
    <form onSubmit={ submit }>
        { children }
    </form>
)

export default Form;