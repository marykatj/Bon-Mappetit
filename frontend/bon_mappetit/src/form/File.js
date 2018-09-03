import React, { Component, Dropzone } from 'react';

class File extends Component {

  // handleUploadImage(event) {
  //   event.preventDefault();
  //
  //   const data = new FormData();
  //   data.append('file', this.uploadInput.files[0]);
  //   data.append('filename', this.fileName.value);
  //
  //   axios.post('http://localhost:8000/upload', data)
  //     .then(function (response) {
  //   this.setState({ imageURL: `http://localhost:8000/${body.file}`, uploadStatus: true });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

render() {
  return (
    <div>
      <input name="image" type="file" accept="image/*" id="photo" ref={(ref) => { this.uploadInput = ref; }}/>
    </div>
  )
}

// onChange={this.inputChange}
// inputChange = (event) => {
//   console.log("input change")
//   this.props.handleFileUpload(event.target.value)
// }

uploadInput = (event) => {
  console.log("input")
  this.props.handleFileUpload(event.target.value)
}



// inputChange = (event) => {                             //HTML5 File Uploads.  File Reader Interface
//   // let reader =  new FileReader();
//   // let photoFile = document.getElementById('photo')
//   // let formattedPhoto = reader.readAsText(photoFile, 'UTF-8');
//   let photoFile = event.target.value.slice(12)  // C:\fakepath\
//   // let formattedPhoto = reader.readAsDataURL(photoFile)
//   this.props.handleFileUpload(photoFile)
// }


// <Dropzone onDrop={(files) => this.onDrop(files)}>
//   <div>Try dropping some files here, or click to select files to upload.</div>
// </Dropzone>
}

export default File;
