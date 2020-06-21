import React, { Component } from 'react';

import './ImageLoader.css';

class ImageLoader extends Component {
    state = {
        loaded: false
    }

    static defaultProps = {
        url: ''
    }

    componentDidMount() {
        this.setState({
            loaded: true
        })
    }

    // onImageLoadHandler = () => { 
    //    this.setState({
    //      loaded: true
    //    })  
    // }
    
    onErrorHandler = () => {
        alert('something went wrong');
    }

    render() {
        let { loaded } = this.state;
        let { src } = this.props;
        const { onImageLoadHandler, onErrorLoadHandler } = this;

        let loader = <div className="lds-ripple"><div></div><div></div></div>;
        let image = <img src={ src } onLoad={ onImageLoadHandler } onError={ onErrorLoadHandler}/>;
        
        return(
            <>
                { loaded ? image : loader }
            </>
        )
    }
}

export default ImageLoader;