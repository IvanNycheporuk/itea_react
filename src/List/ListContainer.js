import React, { Component } from 'react';

import ListItem from './ListItem';
import SearchItem from './SearchItem';

import data from '../guests.json';

class ListContainer extends Component {
    state = {
        users: data.map( x => ({
            ...x,
            checked: false
        })),
        itemsToShow: 5
    }

    onMarkHander = ( event ) => {
        let itemId = Number(event.target.closest('li').dataset.id);
        let changedArr = this.state.users.map( user => {
            if ( user.index === itemId ) {
                user.checked = !user.checked;
            }

            return user;
        });

        this.setState({
            users: changedArr
        })
    }

    onFilterHandler = ( event ) => {
        let filteredList = data.filter(item => {
            let str = '';
            for (var key in item) {
                if (key === '_id' || key === 'index') {
                    continue;
                }
                str += item[key];
            }
            return str.includes(event.target.value)
        });

        this.setState({
            users: filteredList
        })
    }

    onShowMore = () => {
        this.setState({
            itemsToShow: this.state.itemsToShow + 5
        })
    }

    onShowAll = () => {
        this.setState({
            itemsToShow: this.state.users.length
        })
    }

    render() {
        let { users, itemsToShow } = this.state;
        const { onMarkHander, onFilterHandler, onShowMore, onShowAll } = this;

        return (
            <div className="container">
                <h1>Guest list</h1>
                <SearchItem filter={ onFilterHandler }/>
                <div className="card mb-4">
                    <ul className="list-group list-group-flush">
                        {
                            users.length > 0 ?
                                users.slice(0, itemsToShow).map( (user, index) => (
                                    <ListItem 
                                        key={ index } 
                                        marked={ user.checked } 
                                        id={ user.index } 
                                        name={ user.name } 
                                        email={ user.email }
                                        address={ user.address }
                                        compay={ user.company }
                                        mark={ onMarkHander } 
                                    />))
                                :
                                <li className="list-group-item">no such guest</li>
                        }
                    </ul>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-primary" onClick={ onShowMore }>Show 5 more</button>
                    <button type="button" className="btn btn-secondary" onClick={ onShowAll }>Show all</button>
                </div>
            </div>
        )
    }
}

export default ListContainer;