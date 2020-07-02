import React, { useState } from 'react';

import Toggler from './Toggler/Toggler';
import TogglerItem from './Toggler/TogglerItem';

import { themes, ThemeContext } from './theme-context';

const ContextComponent = () => {
    let [ activeTab, setActiveTab ] = useState( 'male' );

    const onChangeToggler = ( name ) => (e) => {
        e.preventDefault();
        setActiveTab( name )
    }


    return (
        <>
            <ThemeContext.Provider value={'asdasdasdasd'}>
                <Toggler label="Gender" activeTab={ activeTab } action={ onChangeToggler }>
                    <TogglerItem name="male"/>
                    <TogglerItem name="female"/>
                </Toggler>
            </ThemeContext.Provider>
        </>
    )
}

export default ContextComponent;