import React, { Component } from 'react';

import Toggler from './Toggler/Toggler';
import TogglerItem from './Toggler/TogglerItem';
import CustomForm from './Form/CustomForm';
import CustomInput from './Form/CustomInput';

class ClassWork extends Component {
    state = {
        activeGenderTab: 'male',
        activeLayoutTab: 'left',
        nameValue: '',
        passValue: '',
        ageValue: '',
        languageValue: ''
      }
    
    onChangeToggler = (tabName, name) => (e) => {
        e.preventDefault();
        this.setState({
            [tabName]: name
        })
    }

    onChangeInputHandler = (e, inputName) => {
        this.setState({
            [inputName]: e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
    }

    render = () => {

        let { activeGenderTab, activeLayoutTab, nameValue, passValue, ageValue, languageValue } = this.state;
        let { onChangeToggler, onChangeInputHandler, onSubmitHandler } = this;
        return (
            <div className="App">
                <h1>Class Work</h1>
                <CustomForm onSubmit={onSubmitHandler}>
                    <CustomInput 
                        name="Name" 
                        type="text" 
                        placeholder="please enter your name" 
                        value={nameValue} 
                        handler={(e) => onChangeInputHandler(e, 'nameValue')}/>
                    <CustomInput 
                        name="Password" 
                        type="password" 
                        placeholder="please enter your password" 
                        value={passValue} 
                        handler={(e) => onChangeInputHandler(e, 'passValue')}/>
                    <Toggler label="Layout" activeTab={ activeLayoutTab } type="activeLayoutTab" action={ onChangeToggler }>
                        <TogglerItem name="left"/>
                        <TogglerItem name="center"/>
                        <TogglerItem name="right"/>
                        <TogglerItem name="baseline"/>
                    </Toggler>
                    <CustomInput 
                        name="Your age" 
                        type="text" 
                        placeholder="please enter your age" 
                        value={ageValue} 
                        handler={(e) => onChangeInputHandler(e, 'ageValue')}/>
                    <Toggler label="Gender" activeTab={ activeGenderTab } type="activeGenderTab" action={ onChangeToggler }>
                        <TogglerItem name="male"/>
                        <TogglerItem name="female"/>
                    </Toggler>
                    <CustomInput 
                        name="Your favorite language" 
                        type="text" 
                        placeholder="please enter your favorite language" 
                        value={languageValue} 
                        handler={(e) => onChangeInputHandler(e, 'languageValue')}/>
                    <button onClick={onSubmitHandler}>Submit form</button>
                </CustomForm>   
            </div>
        );
    }
}

export default ClassWork;
