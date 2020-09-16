import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';

const FileUpload = props => {
  const [Images, setImages] = useState([]);

  const onDrop = async files => {
  
    if (response.data.success) {
      setImages([...Images, response.data.image]);
      props.refreshFunction([...Images, response.data.image]);
    } else {
      console.log('Failed to save the image in server');
    }
  }

  return (
    <div>
      <Dropzone
        onDrop={onDrop}
        multiple
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })} >
            <div>Images</div>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>

      <div>
        {Images.map((image, index) => (
          <div>
            {image}
          </div>
        ))}
      </div>

    </div>
  )
}

export default FileUpload