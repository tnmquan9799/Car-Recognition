import React, {
  Component
} from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  withStyles
} from "@material-ui/core/styles";
import clsx from 'clsx';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// import CSRFToken from './csrftoken';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={1000} />;
});

const useStyles = (theme) => ({
  mainRoot: {
    transitionDuration: 2000
    , opacity: 0
    , transition: theme.transitions.create(['opacity']
      , {
        duration: theme.transitions.duration.standard
        ,
      })
    , '&:hover': {
      opacity: 1
    }
    , ':before': {
      content: "Reply!"
    }
  }
  , animatedItem: {
    opacity: 0
    , animationDelay: 3000
    , zIndex: 5
    , animation: `$myEffect 3000ms ${theme.transitions.easing.easeIn}`
  }
  , animatedItemExiting: {
    // animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeOut}`,
    opacity: 1
    ,
  }
  , "@keyframes myEffect": {
    "0%": {
      opacity: 0
      ,
    }
    , "100%": {
      opacity: 1
      ,
    }
  }
  , buttonMore: {
    disabled: true
    , opacity: 0
    , animation: `$btnMore 500ms ${theme.transitions.easing.easeIn}`
  }
  , "@keyframes btnMore": {
    "0%": {
      disabled: true
      , opacity: 1
      , transform: "translateY(0)"
    }
    , "100%": {
      disabled: true
      , opacity: 0
      , transform: "translateY(-50%)"
    }
  }
  , buttonLess: {
    pointeEvents: "context-menu"
    , disabled: true
    , opacity: 1
    , animation: `$btnLess 1500ms ${theme.transitions.easing.easeOut}`
  }
  , "@keyframes btnLess": {
    "0%": {
      disabled: true
      , opacity: 0
      , transform: "translateY(-50%)"
    },

    "100%": {
      disabled: true
      , opacity: 1
      , transform: "translateY(0)"
    }
  }
  , viewBtnOff: {
    pointeEvents: "context-menu"
    , disabled: true
    , display: "none"
    , opacity: 0
    , animation: `$viewbtnOff 1000ms ${theme.transitions.easing.easeOut}`
  }
  , viewBtnOn: {
    pointeEvents: "pointer"
    , disabled: false
    , display: "block"
    , opacity: 1
    , animation: `$viewbtnOn 1000ms ${theme.transitions.easing.easeOut}`
  }
  , "@keyframes viewbtnOn": {
    "0%": {
      pointeEvents: "context-menu"
      , disabled: true
      , display: "none"
      , opacity: 0
      , transform: "translateY(50%)"
    }
    , "100%": {
      pointeEvents: "pointer"
      , disabled: false
      , display: "block"
      , opacity: 1
      , transform: "translateY(0)"
    }
  }
  , "@keyframes viewbtnOff": {
    "0%": {
      pointeEvents: "pointer"
      , disabled: false
      , display: "block"
      , opacity: 1
      , transform: "translateY(0)"
    },

    "100%": {
      pointeEvents: "context-menu"
      , disabled: true
      , display: "none"
      , opacity: 0
      , transform: "translateY(50%)"
    }
  }
  , viewImgOff: {
    display: "none"
    , width: "0%"
    , opacity: 0
    , animation: `$viewImgOff 500ms ${theme.transitions.easing.easeOut}`
  }
  , viewImgOn: {
    display: "block"
    , width: "100%"
    , opacity: 1
    , animation: `$viewImgOn 500ms ${theme.transitions.easing.easeIn}`
  }
  , "@keyframes viewImgOn": {
    "0%": {
      pointeEvents: "context-menu"
      , disabled: true
      , display: "none"
      , opacity: 0
      , // transform: "translateY(200%)"
    }
    , "100%": {
      display: "block"
      , width: "100%"
      , opacity: 1
      , // transform: "translateY(0)"
    }
  }
  , "@keyframes viewImgOff": {
    "0%": {
      display: "block"
      , width: "100%"
      , opacity: 1
      , // transform: "translateY(0)"
    },

    "100%": {
      display: "none"
      , width: "0%"
      , opacity: 0
      , // transform: "translateY(200%)"
    }
  }
  , ListItemText: {
    textAlign: "center"
    , lineHeight: "2"
    , width: "70%"
    ,
  }
  , textArea: {
    width: "100%"
    ,
  }
  , listItemAvatar: {
    width: "20%"
    ,
  }
  , Button: {
    width: "10%"
    ,
  }
  , absolute: {
    position: 'absolute'
    , bottom: theme.spacing(2)
    , right: theme.spacing(3)
    ,
  }
  ,
  appBarDialog: {
    position: 'relative',
    backgroundColor: "#333"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  viewImgGalaryOff: {
    display: "none",
    opacity: "0",
    // animation: `$viewImgOff 500ms ${theme.transitions.easing.easeOut}`
  },
  viewImgGalaryOn: {
    display: "block",
    opacity: "1",
    animation: `$viewImgOn 500ms ${theme.transitions.easing.easeOut}`
  },
  "@keyframes viewImgGalaryOn": {
    "0%": {
      display: "none",
      opacity: "0",
    }, "100%": {
      display: "block",
      opacity: "1",
    }
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
      resultContainer: false,
      ToolTip: false,
      progressBar: "none",
      resultFail: "none",
      dialog: false,
      listImg: null,
      imgClass: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchDrawer = this.searchDrawer.bind(this);
    this.viewImg = this.viewImg.bind(this);
    this.openDetailBoard = this.openDetailBoard.bind(this);
    this.closeDetailBoard = this.closeDetailBoard.bind(this);
    this.viewFullImg = this.viewFullImg.bind(this);
    this.fetchResult = this.fetchResult.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0]
      , tempImg: URL.createObjectURL(event.target.files[0])
      , imgScreenHeight: screen.height
      , viewBtn: true
      ,
    });
    this.clearJson()
    this.resethResult()
    this.setState({
      resultContainer: false
      , recogResult: null,
      progressBar: "none"

    })
  }

  submit() {
    this.setState({
      resultFail: "none"
      , resultContainer: false
      , progressBar: "block"
    })
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)
    let url = "http://127.0.0.1:8000/save_file";
    axios.post(url, data, { // receive two parameter endpoint url ,form data 
    })
      .then(res => { // then print response status
        console.warn(res);
        setTimeout(() => {
          var intervalCheckData = setInterval(() => {
            this.fetchResult()
          }, 1000)
          setTimeout(() => {
            clearInterval(intervalCheckData);
            this.state.recogResult !== null ? this.setState({
              resultContainer: true,
              progressBar: "none",
              resultFail: "none"
            }) : this.setState({
              resultContainer: false,
              progressBar: "none",
              resultFail: "block",
            });
          }, 2000)
        }, 1000)
      });
  }

  clearJson() {
    let url = "http://127.0.0.1:8000/cleanJson";
    axios.post(url, "", { // receive two parameter endpoint url ,form data 
    })
      .then(res => { // then print response status
        console.warn(res);
      });
  }

  async fetchResult() {
    fetch("/api/fetcher")
      .then((response) => {
        return response.json();
      })
      .then((dataRes) => {
        this.setState({
          recogResult: [{
            id: dataRes.id,
            image: dataRes.image,
            carName: dataRes.carName,
            accuracy: dataRes.accuracy,
            brand: dataRes.brand,
            segment: dataRes.segment,
            origin: dataRes.origin,
            yearEdition: dataRes.yearEdition,
            engine: dataRes.engine,
            hoursePower: dataRes.hoursePower,
            torque: dataRes.torque,
            fuelType: dataRes.fuelType,
            driveType: dataRes.driveType,
            highLight: dataRes.highLight,
            detail: dataRes.detail,
          }]
        });
      });
  }

  resethResult() {
    axios.get("/api/result")
      .then((response) => {
        return response.json();
      })
      .then((dataRes) => {
        this.setState({
          recogResult: [{
            id: dataRes.id
            , image: dataRes.image
            , carName: dataRes.carName
            , brand: dataRes.brand
            , segment: dataRes.segment
            , origin: dataRes.origin
            , yearEdition: dataRes.yearEdition
            , engine: dataRes.engine
            , hoursePower: dataRes.hoursePower
            , torque: dataRes.torque
            , fuelType: dataRes.fuelType
            , driveType: dataRes.driveType
            , highLight: dataRes.highLight
            , detail: dataRes.detail
            ,
          }]
        });
      });
  }

  fetchListCard(id) {
    fetch("/api/detail_view?id=" + id)
      .then((response) => {
        return response.json();
      })
      .then((dataRes) => {
        this.setState({
          listImg: dataRes,
        });
        console.log(this.state.listImg);
      });
  }

  viewFullImg(image) {
    this.setState({
      imgClass: image
    })
    console.log(this.state.imgClass)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animationDraw: true
        ,
      })
    }, 6000)
    setTimeout(() => {
      this.setState({
        uploadBtn: !this.state.uploadBtn
        ,
      })
    }, 4000)
  }

  searchDrawer() {
    this.setState({
      searchDraw: !this.state.searchDraw
      , uploadImage: !this.state.uploadImage
      ,
    });
    document.getElementById("bannerImg")
      .value = ""
    if (this.state.viewBtn == true && this.state.searchDraw == false) {
      this.setState({
        viewBtn: false
        , resultContainer: false
      });
    } else {
      this.setState({
        viewBtn: false
        , resultContainer: false
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

  closeToolTip() {
    this.setState({
      ToolTip: false
      ,
    });
  }


  render() {
    const {
      classes
    } = this.props;
    return (
      <Grid
        xs={12}
        style={{ color: "#fff", margin: 0 }}
      >
        <Grid id="component-container" className={clsx(classes.animatedItem, { [classes.animatedItemExiting]: this.state.animationDraw })} style={{ position: "relative" }}  >
          <Grid container justify="center" xs={12} style={{ zIndex: "5", position: "absolute", width: "100%", left: "50%", top: "50%", transform: "translate(-50%, -50%)", marginTop: screen.height - (1 / 2 * (screen.height)) }} >
            <Box disabled={this.state.uploadBtn} border={2} borderRadius={3} onClick={() => this.searchDrawer()} >
              <Typography style={{ pointerEvents: "none", userSelect: "none", margin: "10px" }} id="title-text" xs={12} variant="h3" component="h3" gutterBottom >
                Car Recognition
                <div id="drawerBtn" style={{ zIndex: 10, color: "#fff", userSelect: "none", position: "absolute", left: "50%", top: "30%", transform: "translate(-50%, -50%)" }} >
                  <ExpandMoreIcon />
                </div>
              </Typography>
            </Box>
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
            <CircularProgress id="progressBar" color="secondary" style={{ display: this.state.progressBar, top: "25%", position: "absolute", marginTop: screen.height - (4 / 5 * (screen.height)) }} />
            <Grid id="resultFail" containter justify="center" style={{ display: this.state.resultFail, top: "25%", position: "absolute", marginTop: screen.height - (4 / 5 * (screen.height)) }}>
              <h3>Recognition Failed.</h3>
              <p>this car might not exist in our database or too hard to recognize</p>
            </Grid>
            {this.state.recogResult &&
              this.state.recogResult.map((recogResult) => (
                <Grid id="resultContainer" containter justify="center" className={clsx(classes.viewBtnOff, { [classes.viewBtnOn]: this.state.resultContainer })} style={{ top: "25%", position: "absolute", marginTop: screen.height - (4 / 5 * (screen.height)) }}>
                  <Grid xs={12} style={{ display: "flex" }}>
                    <Grid xs={3} spacing={2}>
                      <h3>Result:</h3>
                    </Grid>
                    <Grid xs={8} spacing={2}>
                      <h3>{recogResult.carName}</h3>
                    </Grid>
                    <Grid xs={1} spacing={2}>
                      <Button variant="outlined" color="primary" onClick={() => this.openDetailBoard()} >
                        Details
                      </Button>
                    </Grid>
                  </Grid>
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
                  <DialogTitle id="simple-dialog-title" >{recogResult.carName}</DialogTitle>
                  <br></br>
                  <DialogContent>
                    <List>
                      <ListItem>
                        {recogResult.image != null ? <img src={'http://127.0.0.1:8000' + recogResult.image} width="100%" /> : <img src={placeImg} width="100%" height={231.09} />}
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Brand</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.brand.name == null ? "--" : recogResult.brand.name} className={classes.ListItemText} />
                        {recogResult.brand.detail != null ?
                          <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content" }} href={recogResult.brand.detail} target="_blank">
                            <ArrowRightIcon />
                          </Button>
                          : <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content", visibility: "hidden" }} href={recogResult.brand.detail} target="_blank">
                            <ArrowRightIcon />
                          </Button>}
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Origin</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.origin.name == null ? "--" : recogResult.origin.name} className={classes.ListItemText} />
                        {recogResult.origin.detail != null ?
                          <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content" }} href={recogResult.origin.detail} target="_blank">
                            <ArrowRightIcon />
                          </Button>
                          : <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content", visibility: "hidden" }} href={recogResult.origin.detail} target="_blank">
                            <ArrowRightIcon />
                          </Button>}
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Segment</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.segment.name == null ? "--" : recogResult.segment.name} className={classes.ListItemText} />
                        {recogResult.segment.detail != null ?
                          <ClickAwayListener onClickAway={() => this.closeToolTip()}>
                            <Tooltip TransitionComponent={Zoom}
                              PopperProps={{
                                disablePortal: true,
                              }}
                              onClose={() => this.closeToolTip()}
                              open={this.state.ToolTip}
                              disableFocusListener
                              disableHoverListener
                              disableTouchListener
                              title={<h6>{recogResult.segment.detail}</h6>}
                            >
                              <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content" }}
                                onClick={() => {
                                  this.setState({
                                    ToolTip: !this.state.ToolTip,
                                  });
                                }}>
                                <ArrowRightIcon />
                              </Button>
                            </Tooltip>
                          </ClickAwayListener>
                          : <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content", visibility: "hidden" }} href={recogResult.origin.detail} target="_blank">
                            <ArrowRightIcon />
                          </Button>}
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Edition</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.yearEdition == null ? "--" : recogResult.yearEdition} className={classes.ListItemText} />
                        <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content", visibility: "hidden" }} href={recogResult.origin.detail} target="_blank">
                          <ArrowRightIcon />
                        </Button>
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Power</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.hoursePower == null ? "--" : recogResult.hoursePower+" HP"} className={classes.ListItemText} />
                        <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content", visibility: "hidden" }} href={recogResult.origin.detail} target="_blank">
                          <ArrowRightIcon />
                        </Button>
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Torque</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.torque == null ? "--" : recogResult.torque+" N/M"} className={classes.ListItemText} />
                        <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content", visibility: "hidden" }} href={recogResult.origin.detail} target="_blank">
                          <ArrowRightIcon />
                        </Button>
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Fuel Type</strong></h6>
                        </ListItemAvatar>
                        <ListItemText id="fuelTypeTitle" primary={recogResult.fuelType.name == null ? "--" : recogResult.fuelType.name} className={classes.ListItemText} />
                        <div id="fuelTypeDetal" style={{ display: "none" }} className={classes.textArea} >{recogResult.fuelType.detail}</div>
                        {recogResult.fuelType.detail != null ?
                          <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content" }} href={recogResult.fuelType.detail} target="_blank">
                            <ArrowRightIcon />
                          </Button>
                          : <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content", visibility: "hidden" }} href={recogResult.fuelType.detail} target="_blank">
                            <ArrowRightIcon />
                          </Button>}
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Drive Type</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.driveType.name == null ? "--" : recogResult.driveType.name} className={classes.ListItemText} />
                        {recogResult.driveType.detail != null ?
                          <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content" }} href={recogResult.driveType.detail} target="_blank">
                            <ArrowRightIcon />
                          </Button>
                          : <Button className={classes.button} variant="outlined" color="secondary" style={{ margin: 0, padding: 0, width: "fit-content", visibility: "hidden" }} href={recogResult.driveType.detail} target="_blank">
                            <ArrowRightIcon />
                          </Button>}
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>High Light Tech</strong></h6>
                        </ListItemAvatar>
                        <ListItemText primary={recogResult.highLight == null ? "None Special or Advanced technology found" : recogResult.highLight} className={classes.ListItemText} />
                      </ListItem>
                      <hr style={{ margin: 0 }}></hr>
                      <ListItem>
                        <ListItemAvatar className={classes.listItemAvatar}>
                          <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Detail Info</strong></h6>
                        </ListItemAvatar>
                      </ListItem>
                      <br></br>
                      <ListItem>
                        <div className={classes.textArea} >{recogResult.detail == null ? "Not updated yet" : recogResult.detail}</div>
                      </ListItem>
                      <br></br>
                      <ListItem>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => {
                          this.setState({
                            dialog: true
                          })
                          this.fetchListCard(recogResult.id)
                        }}>
                          Explore Media
                        </Button>
                      </ListItem>
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
          <Dialog fullScreen open={this.state.dialog} TransitionComponent={Transition}>
            <AppBar className={classes.appBarDialog}>
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Galary
                </Typography>
                <Button autoFocus color="inherit" onClick={() => {
                  this.setState({
                    dialog: false
                  })
                }}>
                  <CloseIcon />
                </Button>
              </Toolbar>
            </AppBar>
            <Grid container className="search-container" xs={12} spacing={3} alignItems="center" justify="center" style={{}}>
              {this.state.listImg &&
                this.state.listImg.map((listImg) => (
                  <Grid item xs={3}>
                    <Paper >
                      <img className="imgClass" onClick={() => this.viewFullImg(listImg.image)} src={listImg.image} alt={listImg.post} width="100%" height={250} style={{ border: '1px solid #555', borderRadius: 5, boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)" }} />
                      <img className={clsx(classes.viewImgGalaryOff, { [classes.viewImgGalaryOn]: this.state.imgClass != null ? true : false })} src={this.state.imgClass} style={{ zIndex: 1, position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", height: this.state.imgClass == null ? "auto" : screen.height }} onClick={() => this.setState({ imgClass: null })} />
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Dialog>
          <Grid className={clsx(classes.viewImgOff, { [classes.viewImgOn]: this.state.viewImg })} id="imageContainer" style={{ zIndex: "5", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -0)", pointeEvents: "pointer", }} onClick={() => {
            this.setState({
              viewImg: false
            });
          }}  >
            <img src={this.state.tempImg} width="100%" height={this.state.imgScreenHeight} id="ImgPreview" />
          </Grid>
        </Grid>
      </Grid >
    );
  }
}

export default withStyles(useStyles)(SearchEngine);