import React, { Component, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Alert from '@material-ui/lab/Alert'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import M8 from '../../assets/video/m8.mp4';
import { withStyles } from "@material-ui/core/styles";
import drawerWidth from './Home'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// import CSRFToken from './csrftoken';
const useStyles = (theme) => ({
  mainRoot: {
    transitionDuration: 2000,
    opacity: 0,
    transition: theme.transitions.create(['opacity'],
      { duration: theme.transitions.duration.standard, }),
    '&:hover': { opacity: 1 }, ':before': { content: "Reply!" }
  },
  animatedItem: {
    opacity: 0,
    animationDelay: 3000,
    zIndex: 5,
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeIn}`
  },
  animatedItemExiting: {
    // animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeOut}`,
    opacity: 1,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    }
  },
  buttonMore: {
    disabled: true,
    opacity: 0,
    animation: `$btnMore 500ms ${theme.transitions.easing.easeIn}`
  },
  "@keyframes btnMore": {
    "0%": {
      disabled: true,
      opacity: 1,
      transform: "translateY(0)"
    },
    "100%": {
      disabled: true,
      opacity: 0,
      transform: "translateY(-50%)"
    }
  },
  buttonLess: {
    disabled: true,
    opacity: 1,
    animation: `$btnLess 1500ms ${theme.transitions.easing.easeOut}`
  },
  "@keyframes btnLess": {
    "0%": {
      disabled: true,
      opacity: 0,
      transform: "translateY(-50%)"
    },

    "100%": {
      disabled: true,
      opacity: 1,
      transform: "translateY(0)"
    }
  },
});

class SearchEngine extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      tempImg: null,
      animationDraw: false,
      searchDraw: false,
      overlay: null,
      preImg: 0,
      uploadImage: true,
      uploadBtn: true,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchDrawer = this.searchDrawer.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
      tempImg: URL.createObjectURL(event.target.files[0]),
      preImg: screen.height,
      alertAnimation: true,
    })
    let alert = document.getElementById("alert")
    alert.style.display = "block";
    alert.disabled = false;
    setTimeout(() => {
      this.setState({
        alertAnimation: false
      })
    }, 3000)
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
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animationDraw: true,
      })
    }, 6000)
    setTimeout(() => {
      this.setState({
        uploadBtn: !this.state.uploadBtn,
      })
    }, 4000)
  }

  searchDrawer() {
    this.setState({
      searchDraw: !this.state.searchDraw,
      uploadImage: !this.state.uploadImage,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        xs={12}
        style={{ color: "#fff", margin: 0 }}
      >
        <Grid id="component-container" className={clsx(classes.animatedItem, { [classes.animatedItemExiting]: this.state.animationDraw })} style={{ position: "relative" }}  >
          <Grid container justify="center" xs={12} style={{ zIndex: "5", position: "absolute", width: "100%", left: "50%", top: "50%", transform: "translate(-50%, -50%)", marginTop: screen.height - (1 / 2 * (screen.height)) }}>
            <Typography style={{ pointerEvents: "none", userSelect: "none" }} id="title-text" xs={12} variant="h3" component="h3" gutterBottom>
              Car Recognition System
            </Typography>
            <Button disabled={this.state.uploadBtn} id="drawerBtn" style={{ color: "#fff", userSelect: "none" }} onClick={this.searchDrawer}>
              Press to search
            </Button>
            <Grid id="inputBox" xs={12} className={clsx(classes.buttonMore, { [classes.buttonLess]: this.state.searchDraw })} >
              <Grid container justify="center" xs={12} style={{ marginBottom: "50px", marginTop: "50px" }}>
                <h5 xs={4} style={{ userSelect: "none" }}>Select File : </h5>
                <input disabled={this.state.uploadImage} style={{ width: "185px", userSelect: "none" }} xs={4} id="uploadImage" type="file" id="bannerImg" name="file" onChange={this.handleInputChange} />
                <Button disabled={this.state.uploadImage} xs={4} type="submit" id="uploadBtn" onClick={() => this.submit()} variant="contained" color="primary" style={{ userSelect: "none" }} >
                  Upload
                </Button>
              </Grid>
            </Grid>
            <br />
          </Grid>
          <Grid container justify="center" xs={12} style={{ position: "relative", }} >
            <Alert variant="filled" id="alert" style={{ userSelect: "none", position: "absolute", zIndex: 999999, left: "50%", transform: "translate(-50%, -50%)", display: "none", marginTop: "200px" }} severity="success">
              Upload success, scroll down to see upload image
            </Alert>
          </Grid>
        </Grid>
        <Grid containter style={{ marginTop: this.state.preImg }} >
          <img src={this.state.tempImg} width="100%" id="ImgPreview" />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(SearchEngine);
