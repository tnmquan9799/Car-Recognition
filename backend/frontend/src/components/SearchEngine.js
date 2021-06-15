import React, { Component } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
class SearchEngine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    const fileURL = URL.createObjectURL(event.target.files[0])
    let formData = new FormData();
    formData.append('file', this.fileURL);
    axios.post('http://localhost:8000',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(function () {
      console.log('SUCCESS!!');
    })
      .catch(function () {
        console.log('FAILURE!!');
      });
  }
  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <input type="file" onChange={this.handleChange} />
        <hr />
        <img src={this.state.file}
          style={{
            width: "100%",
          }} />

      </Grid >
    );
  }
}

export default SearchEngine;
