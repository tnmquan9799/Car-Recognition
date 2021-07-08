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
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    pointeEvents: "context-menu",
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
  viewBtnOff: {
    pointeEvents: "context-menu",
    disabled: true,
    display: "none",
    opacity: 0,
    animation: `$viewbtnOff 1000ms ${theme.transitions.easing.easeOut}`
  },
  viewBtnOn: {
    pointeEvents: "pointer",
    disabled: false,
    display: "block",
    opacity: 1,
    animation: `$viewbtnOn 1000ms ${theme.transitions.easing.easeOut}`
  },
  "@keyframes viewbtnOn": {
    "0%": {
      pointeEvents: "context-menu",
      disabled: true,
      display: "none",
      opacity: 0,
      transform: "translateY(50%)"
    },
    "100%": {
      pointeEvents: "pointer",
      disabled: false,
      display: "block",
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  "@keyframes viewbtnOff": {
    "0%": {
      pointeEvents: "pointer",
      disabled: false,
      display: "block",
      opacity: 1,
      transform: "translateY(0)"
    },

    "100%": {
      pointeEvents: "context-menu",
      disabled: true,
      display: "none",
      opacity: 0,
      transform: "translateY(50%)"
    }
  },
  viewImgOff: {
    display: "none",
    width: "0%",
    opacity: 0,
    animation: `$viewImgOff 1000ms ${theme.transitions.easing.easeOut}`
  },
  viewImgOn: {
    display: "block",
    width: "100%",
    opacity: 1,
    animation: `$viewImgOn 1000ms ${theme.transitions.easing.easeIn}`
  },
  "@keyframes viewImgOn": {
    "0%": {
      pointeEvents: "context-menu",
      disabled: true,
      display: "none",
      opacity: 0,
      // transform: "translateY(200%)"
    },
    "100%": {
      display: "block",
      width: "100%",
      opacity: 1,
      // transform: "translateY(0)"
    }
  },
  "@keyframes viewImgOff": {
    "0%": {
      display: "block",
      width: "100%",
      opacity: 1,
      // transform: "translateY(0)"
    },

    "100%": {
      display: "none",
      width: "0%",
      opacity: 0,
      // transform: "translateY(200%)"
    }
  },
  ListItemText: {
    textAlign: "center",
    lineHeight: "2"
  },
  textArea: {
    width: "100%",
  }
});

class SearchEngine extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      tempImg: null,
      animationDraw: false,
      searchDraw: false,
      uploadImage: true,
      uploadBtn: true,
      recogResult: null,
      imgScreenHeight: null,
      detailBoard: false,
      viewBtn: false,
      viewImg: false,
      resultContainer: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchDrawer = this.searchDrawer.bind(this);
    this.viewImg = this.viewImg.bind(this);
    this.openDetailBoard = this.openDetailBoard.bind(this)
    this.closeDetailBoard = this.closeDetailBoard.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
      tempImg: URL.createObjectURL(event.target.files[0]),
      imgScreenHeight: screen.height,
      viewBtn: true,
    });
  }

  submit() {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)
    // let url = "http://127.0.0.1:8000/save_file";
    // axios.post(url, data, { // receive two parameter endpoint url ,form data 
    // })
    //   .then(res => { // then print response status
    //     console.warn(res);
    //   });
    this.fetchResult();
    this.setState({
      resultContainer: true
    })
  }

  fetchResult() {
    fetch("/api/result")
      .then((response) => {
        return response.json();
      })
      .then((dataRes) => {
        this.setState({
          recogResult: dataRes,
        });
      });
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
  componentWillUnmount() {
    this.setState({
      animationDraw: false,
      uploadBtn: !this.state.uploadBtn,
    })
  }

  searchDrawer() {
    this.setState({
      searchDraw: !this.state.searchDraw,
      uploadImage: !this.state.uploadImage,
    });
    document.getElementById("bannerImg").value = ""
    if (this.state.viewBtn == true && this.state.searchDraw == false) {
      this.setState({
        viewBtn: false,
        resultContainer: false
      });
    } else {
      this.setState({
        viewBtn: false,
        resultContainer: false
      });
    }
  }

  viewImg() {
    this.setState({
      viewImg: true
    });
  }

  openDetailBoard() {
    this.setState({
      detailBoard: true
    });
  }

  closeDetailBoard() {
    this.setState({
      detailBoard: false
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
                <Button disabled={this.state.uploadImage} xs={4} type="submit" id="uploadBtn" onClick={() => this.submit()} variant="outlined" color="primary" style={{ userSelect: "none" }} >
                  Process Recognition
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="center" style={{ zIndex: "5", position: "absolute", width: "100%", left: "50%", top: "50%", transform: "translate(-50%, -50%)", marginTop: screen.height - (2 / 3 * (screen.height)) }}>
              <Button className={clsx(classes.viewBtnOff, { [classes.viewBtnOn]: this.state.viewBtn })} variant="outlined" color="secondary" onClick={() => this.viewImg()}>
                View uploaded image
              </Button>
            </Grid>
            <br />
            {this.state.recogResult &&
              this.state.recogResult.map((recogResult) => (
                <Grid id="resultContainer" containter className={clsx(classes.viewBtnOff, { [classes.viewBtnOn]: this.state.resultContainer })}>
                  <h3><strong>Car name:</strong> {recogResult.carName}</h3>
                  <Button xs={4} variant="outlined" color="primary" onClick={() => this.openDetailBoard()} >
                    Details of {recogResult.carName}
                  </Button>
                </Grid>
              ))}
            {this.state.recogResult &&
              this.state.recogResult.map((recogResult) => (
                <Dialog
                  variant="outline"
                  fullWidth={true}
                  onClose={() => this.closeDetailBoard()}
                  aria-labelledby="simple-dialog-title"
                  open={this.state.detailBoard}>
                  <DialogTitle id="simple-dialog-title">{recogResult.carName}</DialogTitle>
                  <br></br>
                  <DialogContent>
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Brand</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.brand == null ? "--" : recogResult.brand} className={classes.ListItemText} />
                        <Button variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content" }}>
                          <ExpandMore />
                        </Button>
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Origin</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.origin == null ? "--" : recogResult.origin} className={classes.ListItemText} />
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Segment</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.segment == null ? "--" : recogResult.segment} className={classes.ListItemText} />
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Edition</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.yearEdition == null ? "--" : recogResult.yearEdition} className={classes.ListItemText} />
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Power</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.hoursePower == null ? "--" : recogResult.hoursePower} className={classes.ListItemText} />
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Torque</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.torque == null ? "--" : recogResult.torque} className={classes.ListItemText} />
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Fuel Type</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.fuelType == null ? "--" : recogResult.fuelType} className={classes.ListItemText} />
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Drive Type</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.driveType == null ? "--" : recogResult.driveType} className={classes.ListItemText} />
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>High Light Tech</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.highLight == null ? "None Special or Advanced technology found" : recogResult.brand} className={classes.ListItemText} />
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Detail Info</strong></h6>
                        </ListItemAvatar>
                      </ListItem>
                      <br></br>
                      <div className={classes.textArea} >{recogResult.detail == null ? "Not found or Not updated yet" : recogResult.detail}</div>
                    </List>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={() => this.closeDetailBoard()} color="primary">
                      Exit
                    </Button>
                  </DialogActions>
                </Dialog>
              ))}
          </Grid>
          <Grid className={clsx(classes.viewImgOff, { [classes.viewImgOn]: this.state.viewImg })} id="imageContainer" style={{ zIndex: "5", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -0)", pointeEvents: "pointer", }} onClick={() => {
            this.setState({
              viewImg: false
            });
          }}  >
            <img src={this.state.tempImg} width="100%" height={this.state.imgScreenHeight} id="ImgPreview" />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(SearchEngine);
