import React from 'react';
import PropTypes from 'prop-types';

const Toggler = ({ children, activeTab, action, label, type}) => {
    return (
        <>
            <h2>{ label }</h2>
            <div className="togglerContainer">
                {
                    React.Children.map(children, (ChildItem) => {
                        if (React.isValidElement(ChildItem)) {
                            return React.cloneElement(ChildItem, {
                                active: activeTab === ChildItem.props.name,
                                action: action,
                                type: type
                            })
                        } else {
                            console.error('Element not valid', ChildItem );
                            return null;
                        }
                    })
                }
            </div>
        </>
    )
}

Toggler.propTypes = {
    children: PropTypes.any.isRequired,
    activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    action: PropTypes.func.isRequired,
    label: PropTypes.string
}

export default Toggler;
