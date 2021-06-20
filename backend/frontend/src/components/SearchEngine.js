import React, { Component, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// import CSRFToken from './csrftoken';
class SearchEngine extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      tempImg:null
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    
    this.setState({
      selectedFile: event.target.files[0],
      tempImg: URL.createObjectURL(event.target.files[0])
    })
  }


  submit() {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)
    console.log(this.state.selectedFile);
    let url = "http://127.0.0.1:8000/save_file";
    axios.post(url, data, { // receive two parameter endpoint url ,form data 
    })
      .then(res => { // then print response status
        console.warn(res);
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


        <div>
          <h3>File Upload</h3>
          <br />
          <div>
            <h5>Select File :</h5>
            <input className="" type="file" id="bannerImg" name="file" onChange={this.handleInputChange} />
          </div>
          <hr />
          <img src={this.state.tempImg} style={{ width: "100%" }} />
          <hr />
          <div className="form-row">
            <div className="col-md-6">
              <button type="submit" className="btn btn-dark" onClick={() => this.submit()}>Upload</button>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}

export default SearchEngine;
