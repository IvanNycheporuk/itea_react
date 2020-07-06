import React, { useState } from 'react';

import Toggler from './Toggler/Toggler';
import TogglerItem from './Toggler/TogglerItem';
import Table from './Table/Table';
import CustomForm from './Form/CustomForm';
import CustomInput from './Form/CustomInput';

import { themes, ThemeContext } from './theme-context';

const ContextComponent = () => {
    let [ activeTab, setActiveTab ] = useState( 'male' );

    const onChangeToggler = ( name ) => (e) => {
        e.preventDefault();
        setActiveTab( name )
    }

    const onInputHandler = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <ThemeContext.Provider value={themes.light}>
                <Toggler label="Gender" activeTab={ activeTab } action={ onChangeToggler }>
                    <TogglerItem name="male"/>
                    <TogglerItem name="female"/>
                </Toggler>

                <Table />

                <CustomForm>
                    <CustomInput 
                        type="text" 
                        name="name" 
                        placeholder="please enter your name" 
                        handler={onInputHandler}
                    />
                </CustomForm>                
            </ThemeContext.Provider>
        </>
    )
}

export default ContextComponent;