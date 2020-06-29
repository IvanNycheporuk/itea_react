import React from 'react';

const FileUploader = ({ url, upload}) => (
    <label onChange={ upload } className="file-uploader">
        <input type="file"/>
        <img src={ url } id="fileUploader"/>
    </label>
);

export default FileUploader;