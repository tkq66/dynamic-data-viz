import React, { Component } from 'react'
import axios from 'axios'
import FormData from 'form-data'


export default class EmotionDetector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      constraints: { audio: false, video: { width: 400, height: 300 } }
    };

    this.takePicture = this.takePicture.bind(this);
    this.clearPhoto = this.clearPhoto.bind(this);
  }

  componentDidMount() {
    const constraints = this.state.constraints;
    const getUserMedia = (params) => (
      new Promise((successCallback, errorCallback) => {
        navigator.webkitGetUserMedia.call(navigator, params, successCallback, errorCallback);
      })
    );

    getUserMedia(constraints)
    .then((stream) => {
      const video = document.querySelector('video');
      const vendorURL = window.URL || window.webkitURL;

      video.src = vendorURL.createObjectURL(stream);
      video.play();
    })
    .catch((err) => {
      console.log(err);
    });

    this.clearPhoto();
  }

  clearPhoto() {
    const canvas = document.querySelector('canvas');
    const photo = document.getElementById('photo');
    const context = canvas.getContext('2d');
    const { width, height } = this.state.constraints.video;
    context.fillStyle = '#FFF';
    context.fillRect(0, 0, width, height);

    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
    setInterval(this.takePicture, 3000);
  }

  takePicture() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    const video = document.querySelector('video');
    const photo = document.getElementById('photo');
    const { width, height } = this.state.constraints.video;

    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
    console.log(this.getEmotionLabel(canvas));
  }

  getEmotionLabel(currentImageFile) {
    let formData = new FormData();
    formData.append('image', currentImageFile);
    axios('http://localhost:8084/classifyImage', {
      method: 'POST',
      data : formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Methods': 'POST',
          }
        }).then(function(response) {
          console.log(response);
        })
  }

  render() {
    return (
      <div className="capture"
        // style={ styles.capture }
      >
        <Camera
          handleStartClick={ this.handleStartClick }
        />
        <canvas id="canvas" hidden></canvas>
        <Photo />
      </div>
    );
  }
}



const Camera = (props) => (
  <div className="camera">
    <video id="video" muted="muted"></video>
    <a id="startButton" onClick={ props.handleStartClick }>Take photo</a>
  </div>
);

const Photo = (props) => (
  <div className="output"
  >
    <img id="photo" alt=""
    />
    <a id="saveButton"
      onClick={ props.handleSaveClick }
    >Save Photo</a>
  </div>
);
