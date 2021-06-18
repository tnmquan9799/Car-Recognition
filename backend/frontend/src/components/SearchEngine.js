import React, { Component, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// const download = require('image-downloader')
import FormData from "form-data";
// import imageE from "../../images/gemera.jpg";

class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  }

  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios.post("http://127.0.0.1:8000/upload", data, { // receive two parameter endpoint url ,form data 
    })
      .then(response => { // then print response status
        console.log(response)
      })
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
        <input type="file" name="file" onChange={this.handleChange} />
        <button type="button" onClick={this.onClickHandler}>Upload</button>
        <hr />
        <img
          src={this.state.file}
          style={{
            width: "100%",
          }}
        />
      </Grid>
    );
  }
}

export default SearchEngine;
