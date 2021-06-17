import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// const download = require('image-downloader')

class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
    console.log(event.target.files[0]);
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios.post("http://localhost:8000/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
  };

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
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <button type="button" onClick={this.onClickHandler}>
          Upload
        </button>
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
