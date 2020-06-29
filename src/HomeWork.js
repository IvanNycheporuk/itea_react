import React, { Component } from 'react';

import FileUploader from './FileUploader/FileUploader';

class HomeWork extends Component {
    state = {
        url: require('./upload.png')
    }

    uploadHandler = (event) => {
        let mainThis = this;
        let reader = new FileReader();
        
        reader.onload = () => {
          var dataURL = reader.result;
          mainThis.setState({
              url: dataURL
          })
        };
        
        reader.readAsDataURL(event.target.files[0]);
    }

    render() {
        let { url } = this.state;
        let { uploadHandler } = this;

        return (
            <>
                <h1>Home Work</h1>
                <FileUploader url={url} upload={uploadHandler}/>
            </>
        )
    }
}

export default HomeWork;