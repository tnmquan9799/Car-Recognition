import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "../../static/css/Category.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import Zoom from '@material-ui/core/Zoom';
import placeImg from '../../assets/placeImg.png';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={1000} />;
});

const useStyles = (theme) => ({
  root: {
    maxWidth: screen.width / 2,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.longest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "70%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "70%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  media: {
    width: "100%",
  },
  expand: {
    transform: 'rotateX(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.longest,
    }),
  },
  expandOpen: {
    transform: 'rotateX(0deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  ListItem: {
    textDecoration: "none",
    color: "#000"
  },
  ListItemText: {
    textAlign: "center",
    lineHeight: "2",
    width: "100%",
  },
  textArea: {
    width: "100%",
  },
  listItemAvatar: {
    width: "30%",
  },
  Button: {
    width: "5%",
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  appBarDialog: {
    position: 'relative',
    backgroundColor: "#333"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  viewImgOff: {
    display: "none",
    opacity: "0",
    // animation: `$viewImgOff 500ms ${theme.transitions.easing.easeOut}`
  },
  viewImgOn: {
    display: "block",
    opacity: "1",
    animation: `$viewImgOn 500ms ${theme.transitions.easing.easeOut}`
  },
  "@keyframes viewImgOn": {
    "0%": {
      display: "none",
      opacity: "0",
    }, "100%": {
      display: "block",
      opacity: "1",
    }
  }

});

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCar: null,
      searchRq: "",
      cardExpand: -1,
      ToolTip: false,
      dialog: false,
      listImg: null,
      imgClass: null
    };
    this.onSearch = this.onSearch.bind(this);
    this.viewFullImg = this.viewFullImg.bind(this);
  }
  // Fetching Cars
  componentDidMount() {
    this.fetcher()
  }

  componentWillUpdate() {
    this.onSearch
  }



  onSearch(event) {
    this.setState({ searchRq: event.target.value });
    this.fetcher()
    setTimeout(() => {
      this.fetcher()
    }, 100)
  }

  fetcher() {
    fetch("/api/carsearch?search=" + this.state.searchRq)
      .then((response) => {
        return response.json();
      })
      .then((dataRes) => {
        this.setState({
          dataCar: dataRes,
        });
        console.log(this.state.dataCar);
      });
  }


  handleCardExpand(id) {
    this.setState({
      cardExpand: this.state.cardExpand === id ? -1 : id,

    });
  }

  closeToolTip() {
    this.setState({
      ToolTip: false,
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


  render() {
    const { classes } = this.props;
    return (
      <Grid xs={12} style={{ color: "#fff", margin: 50, position: "relative", marginTop: screen.height - (4 / 5) * screen.height, }}>
        <Grid container className="search-container" xs={12} spacing={3} alignItems="center" justify="center" style={{ position: "relative" }}>
          <div
            id="searchBar" onClick={() => { document.getElementById("searchInput").focus(); }} className={classes.search} style={{ marginBottom: screen.height - (3 / 4) * screen.height }}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase onChange={this.onSearch} id="searchInput" value={this.state.onSearch} placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} xs={12} inputProps={{ "aria-label": "search" }} />
          </div>
        </Grid>
        <Grid container className="search-container" xs={12} spacing={3} alignItems="center" justify="center" style={{}}>
          {this.state.dataCar &&
            this.state.dataCar.map((dataCar, id) => (
              <Grid item xs={3}>
                <Card className={classes.root} key={this.state.dataCar.id} style={{}} raised={true}>
                  <CardHeader
                    title={dataCar.carName}
                    subheader={dataCar.brand != null ? dataCar.brand.name : "Brand not found"}
                  />
                  <CardMedia className={classes.media}>
                    {dataCar.image != null ? <img src={dataCar.image} width="100%" height={250} /> : <img src={placeImg} width="100%" height={250} />}
                  </CardMedia>
                  <CardContent>
                    <Typography color="textSecondary" component="div">
                      {dataCar.hightline == null ? "None highline technologies" : dataCar.hightline}
                    </Typography>
                  </CardContent>
                  <Collapse in={this.state.cardExpand === id} timeout={1500} unmountOnExit style={{}}>
                    <CardContent>
                      <Typography variant="h6">Details:</Typography>
                      <br></br>
                      <List>
                        <ListItem className={classes.ListItem} href={dataCar.brand != null ? dataCar.brand.detail : ""} target="_blank">
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Brand</strong></h6>
                          </ListItemAvatar>
                          <ListItemText primary={dataCar.brand == null ? "--" : dataCar.brand.name} className={classes.ListItemText} />
                          {dataCar.brand != null ? <ArrowRightIcon /> : ""}
                        </ListItem>
                        <hr style={{ margin: 0 }}></hr>
                        <ListItem className={classes.ListItem} component={dataCar.origin !== null ? "a" : ""} href={dataCar.origin != null ? dataCar.origin.detail : ""} target="_blank">
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>origin</strong></h6>
                          </ListItemAvatar>
                          <ListItemText primary={dataCar.origin == null ? "--" : dataCar.origin.name} className={classes.ListItemText} />
                          {dataCar.origin != null ? <ArrowRightIcon /> : ""}
                        </ListItem>
                        <hr style={{ margin: 0 }}></hr>
                        <ListItem className={classes.ListItem} onClick={() => {
                          this.setState({
                            ToolTip: !this.state.ToolTip,
                          });
                        }}>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Segment</strong></h6>
                          </ListItemAvatar>
                          <ListItemText primary={dataCar.segment == null ? "--" : dataCar.segment.name} className={classes.ListItemText} />
                          {dataCar.segment != null ?
                            <ClickAwayListener onClickAway={() => this.closeToolTip()}>
                              <Tooltip placement="left" TransitionComponent={Zoom}
                                PopperProps={{
                                  disablePortal: true,
                                }}
                                onClose={() => this.closeToolTip()}
                                open={this.state.ToolTip}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title={<h6>{dataCar.segment.detail}</h6>}
                              >
                                <ArrowRightIcon />
                              </Tooltip>
                            </ClickAwayListener>
                            : ""}
                        </ListItem>
                        <hr style={{ margin: 0 }}></hr>
                        <ListItem>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Edition</strong></h6>
                          </ListItemAvatar>
                          <ListItemText primary={dataCar.yearEdition == null ? "--" : dataCar.yearEdition} className={classes.ListItemText} />
                          <ArrowRightIcon style={{ visibility: "hidden" }} />
                        </ListItem>
                        <hr style={{ margin: 0 }}></hr>
                        <ListItem>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Power</strong></h6>
                          </ListItemAvatar>
                          <ListItemText primary={dataCar.hoursePower == null ? "--" : dataCar.hoursePower} className={classes.ListItemText} />
                          <ArrowRightIcon style={{ visibility: "hidden" }} />
                        </ListItem>
                        <hr style={{ margin: 0 }}></hr>
                        <ListItem>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Torque</strong></h6>
                          </ListItemAvatar>
                          <ListItemText primary={dataCar.torque == null ? "--" : dataCar.torque} className={classes.ListItemText} />
                          <ArrowRightIcon style={{ visibility: "hidden" }} />
                        </ListItem>
                        <hr style={{ margin: 0 }}></hr>
                        <ListItem className={classes.ListItem} component={dataCar.driveType != null ? "a" : ""} href={dataCar.driveType != null ? dataCar.driveType.detail : ""} target="_blank">
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Drive Type</strong></h6>
                          </ListItemAvatar>
                          <ListItemText primary={dataCar.driveType == null ? "--" : dataCar.driveType.name} className={classes.ListItemText} />
                          {dataCar.driveType != null ? <ArrowRightIcon /> : ""}
                        </ListItem>
                        <hr style={{ margin: 0 }}></hr>
                        <ListItem className={classes.ListItem} component={dataCar.fuelType != null ? "a" : ""} href={dataCar.fuelType != null ? dataCar.fuelType.detail : ""} target="_blank">
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>fuelType</strong></h6>
                          </ListItemAvatar>
                          <ListItemText primary={dataCar.fuelType == null ? "--" : dataCar.fuelType.name} className={classes.ListItemText} />
                          {dataCar.fuelType != null ? <ArrowRightIcon /> : ""}
                        </ListItem>
                        <hr style={{ margin: 0 }}></hr>
                        <ListItem>
                          <ListItemAvatar className={classes.listItemAvatar}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>High Tech</strong></h6>
                          </ListItemAvatar>
                          <ListItemText primary={dataCar.highLight == null ? "None Special or Advanced technology found" : dataCar.highLight} className={classes.ListItemText} />
                        </ListItem>
                        <hr style={{ margin: 0 }}></hr>
                        <ListItem>
                          <ListItemAvatar xs={12}>
                            <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Detail Info</strong></h6>
                          </ListItemAvatar>
                        </ListItem>
                        <br></br>
                        <ListItem>
                          <div className={classes.textArea} >{dataCar.detail == null ? "Not updated yet" : dataCar.detail}</div>
                        </ListItem>
                        <br></br>
                        <ListItem>
                          <Button fullWidth variant="outlined" color="secondary" onClick={() => {
                            this.setState({
                              dialog: true
                            })
                            this.fetchListCard(dataCar.id)
                          }}>
                            Explore Media
                          </Button>
                        </ListItem>
                      </List>
                    </CardContent>
                  </Collapse>
                  <CardActions disableSpacing onClick={() => this.handleCardExpand(id)} aria-expanded={this.state.cardExpand === id} aria-label="show more" style={{ backgroundColor: "#333", justifyContent: "center" }}>
                    <IconButton >
                      <ExpandMoreIcon className={clsx(classes.expand, { [classes.expandOpen]: this.state.cardExpand !== id, })} style={{ color: "#fff" }} />
                    </IconButton>
                  </CardActions>
                </Card>
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
                          <Card raised={true} >
                            <CardMedia>
                              <img className="imgClass" onClick={() => this.viewFullImg(listImg.image)} src={listImg.image} alt={listImg.post} width="100%" height={250} />
                              <img className={clsx(classes.viewImgOff, { [classes.viewImgOn]: this.state.imgClass != null ? true : false })} src={this.state.imgClass} style={{ zIndex: 1, position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", height: this.state.imgClass == null ? "auto" : screen.height }} onClick={() => this.setState({ imgClass: null })} />
                            </CardMedia>
                          </Card>
                        </Grid>
                      ))}
                  </Grid>
                </Dialog>
              </Grid>
            ))}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Category);
