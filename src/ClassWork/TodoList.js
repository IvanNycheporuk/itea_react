import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../reducer/actions';

const TodoList = ({
    items,
    addTodo, removeTodo, markCompleted
    }) => {
    const [inputText, setInputText] = useState('');

    const changeInputHandler = (e) => {
        setInputText(e.target.value)
    }

    const addItemHandler = (text) => {
        // setInputText('') - didnt work for me
        return addTodo(text);
    }

    return (
        <>  
            <div className="controller">
                <input 
                    placeholder="start typing todo name"
                    value={inputText}
                    onChange={ changeInputHandler }
                />
                <button onClick={addItemHandler(inputText)}>add item</button>
            </div>
            <ul className="todolist">
                {
                    items.length > 0 ?                 
                        items.map(item => (
                            <li key={item.id} className={item.marked ? 'active' : ''}>
                                {item.name}
                                <button onClick={markCompleted(item.id)}>mark completed</button>
                                <button onClick={removeTodo(item.id)}>remove item</button>
                            </li>
                        ))   
                    :
                    <p>nothing todo</p>
                }
            </ul>
        </>
    )
}

const mapStateToProps = (state) => ({
    items: state.items
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todoItem) => (e) => { dispatch({type: actionTypes.ADD_ITEM, payload: {name: todoItem, id: new Date().getTime(), marked: false}})},
    removeTodo: (todoId) => () => { dispatch({type: actionTypes.REMOVE_ITEM, payload: {id: todoId}})},
    markCompleted: (todoId) => () => { dispatch({type: actionTypes.MARK_ITEM, payload: {id: todoId}})}
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);