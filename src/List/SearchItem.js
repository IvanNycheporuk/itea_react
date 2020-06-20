import React from 'react';

const SearchItem = ({ filter }) => (
    <div className="input-group input-group-lg mb-4">
        <div className="input-group-prepend">
            <span className="input-group-text">Guest</span>
        </div>
        <input type="text" className="form-control" onInput={ filter } />
    </div>
);

SearchItem.defaultProps = {
    filter: () => alert('not implemented yet')
}

export default SearchItem;