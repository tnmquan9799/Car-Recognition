import React, { Component } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
const download = require('image-downloader')

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
    options = {
      url: file,
      dest: '../../../save-image'
    }
    download.image(options).then(function () {
      console.log('SUCCESS!!');
    })
      .catch(function () {
        console.log('FAILURE!!');
      });
    }
    //   options = {
    //     url: file,
    //     dest: '../../../save-image'
    //   }
    //   download.image(options)
    //       .then(({dest})) => {
    //         console.log('Saved to', dest)
    //   })
    //       .catch((err) => console.log(err))
    // }
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
