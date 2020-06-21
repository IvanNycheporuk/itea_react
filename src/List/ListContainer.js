import React, { Component } from 'react';

import ListItem from './ListItem';

class ListContainer extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('https://next.json-generator.com/api/json/get/NJxzqZd6u')
            .then(res => res.json())
            .then(res => {
                let users = res.map(item => ({
                    interviewed: false,
                    user: item      
                }))

                this.setState({
                    data: users
                })
            })        
    }

    onMarkHandler = (event) => {
        let itemId = event.target.closest('li').dataset.id;
        console.log(itemId);
        let updatedUsers = this.state.data.map( item => {
            if ( item.user._id === itemId ) {
                item.interviewed = !item.interviewed
            }

            return item;
        })

        this.setState({
            data: updatedUsers
        })
    }

    render() {
        let { data } = this.state;
        let { onMarkHandler } = this;

        let users = '<p>not loaded yet...';

        if ( data.length > 0) {            
            users = data.map(item => {
                return <ListItem 
                            action={ onMarkHandler }
                            key={ item.user._id } 
                            id={ item.user._id } 
                            name={ item.user.name.first }
                            marked={ item.interviewed } 
                        />
            })
        }
        return (
            <div className="card">
                <ul className="list-group list-group-flush">
                    { users }
                </ul>
            </div>
        )
    }
}

export default ListContainer;
