import React, { Component,useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// const download = require('image-downloader')
import FormData from "form-data";

class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    const file = event.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["RecogImage"] = base64;
      console.debug("file stored", base64);
    });
    var dataImage = localStorage.getItem("RecogImage");
    var bannerImg = document.getElementById("tableBanner");
    bannerImg.src = dataImage;
    
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <input type="file" id="image-file" onChange={this.handleChange} />
        <button onClick={this.getImageData}>
        Send
        </button>
        <hr />
        
        <img
          src=""
          id="tableBanner"
          style={{
            width: "100%",
          }}
        />
      </Grid>
    );
  }
}
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export default SearchEngine;
