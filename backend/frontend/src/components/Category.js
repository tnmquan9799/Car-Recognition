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
import IconButton from "@material-ui/core/IconButton";
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
    height: 0,
    paddingTop: '56.25%', // 16:9
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
    width: "70%",
  },
  textArea: {
    width: "100%",
  },
  listItemAvatar: {
    width: "20%",
  },
  Button: {
    width: "10%",
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
});

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCar: null,
      searchRq: "",
      cardExpand: -1,
      ToolTip: false
    };
    this.onSearch = this.onSearch.bind(this);
  }
  // Fetching Cars
  componentDidMount() {
    this.onSearch();
  }

  onSearch() {
    this.setState({
      searchRq: document.getElementById("searchInput").value
    });
    console.log(this.state.searchRq);
    fetch("/api/car?search=" + this.state.searchRq)
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

  CardWrapper = () => ({

  })

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

  render() {
    const { classes } = this.props;
    return (
      <Grid
        xs={12}
        style={{
          color: "#fff",
          margin: 0,
          position: "relative",
          marginTop: screen.height - (1 / 2) * screen.height,
        }}>
        <Grid container spacing={3} alignItems="center" justify="center" xs={12} style={{
          zIndex: "5",
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        >
          <div
            id="searchBar" onClick={() => { document.getElementById("searchInput").focus(); }} className={classes.search} style={{ marginBottom: screen.height - (3 / 4) * screen.height }}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase onChange={this.onSearch} id="searchInput" placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} xs={12} inputProps={{ "aria-label": "search" }} />
          </div>
          <Grid container className="search-container" xs={12} spacing={3} alignItems="center" justify="center" style={{ position: "relative" }}>
            {this.state.dataCar &&
              this.state.dataCar.map((dataCar, id) => (
                <Grid item xs={3}>
                  <Card className={classes.root} key={this.state.dataCar.id}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          R
                        </Avatar>
                      }
                      title={dataCar.carName}
                      subheader={dataCar.brand.name}
                    />
                    <CardMedia className={classes.media} title="Paella dish">
                      <image width="100%" src="" />
                    </CardMedia>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {dataCar.hightline == null ? "None highline technologies" : dataCar.hightline}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing onClick={() => this.handleCardExpand(id)} aria-expanded={this.state.cardExpand === id} aria-label="show more" style={{ backgroundColor: "#333", justifyContent: "center" }}>
                      <IconButton >
                        <ExpandMoreIcon className={clsx(classes.expand, { [classes.expandOpen]: this.state.cardExpand, })} style={{ color: "#fff" }} />
                      </IconButton>
                    </CardActions>
                    <Collapse in={this.state.cardExpand === id} timeout="auto" unmountOnExit >
                      <CardContent>
                        <Typography variant="h6">Details:</Typography>
                        <br></br>
                        <List>
                          <ListItem className={classes.ListItem} component={dataCar.brand.detail != null ? "a" : ""} href={dataCar.brand.detail} target="_blank">
                            <ListItemAvatar className={classes.listItemAvatar}>
                              <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Brand</strong></h6>
                            </ListItemAvatar>
                            <ListItemText primary={dataCar.brand.name == null ? "--" : dataCar.brand.name} className={classes.ListItemText} />
                            {dataCar.brand.detail != null ? <ArrowRightIcon /> : ""}
                          </ListItem>
                          <hr style={{ margin: 0 }}></hr>
                          <ListItem className={classes.ListItem} component={dataCar.driveType.detail != null ? "a" : ""} href={dataCar.driveType.detail} target="_blank">
                            <ListItemAvatar className={classes.listItemAvatar}>
                              <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>driveType</strong></h6>
                            </ListItemAvatar>
                            <ListItemText primary={dataCar.driveType.name == null ? "--" : dataCar.driveType.name} className={classes.ListItemText} />
                            {dataCar.driveType.detail != null ? <ArrowRightIcon /> : ""}
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
                            <ListItemText primary={dataCar.segment.name == null ? "--" : dataCar.segment.name} className={classes.ListItemText} />
                            {dataCar.segment.detail != null ?
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
                          <ListItem className={classes.ListItem} component={dataCar.origin.detail != null ? "a" : ""} href={dataCar.origin.detail} target="_blank">
                            <ListItemAvatar className={classes.listItemAvatar}>
                              <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>origin</strong></h6>
                            </ListItemAvatar>
                            <ListItemText primary={dataCar.origin.name == null ? "--" : dataCar.origin.name} className={classes.ListItemText} />
                            {dataCar.origin.detail != null ? <ArrowRightIcon /> : ""}
                          </ListItem>
                          <hr style={{ margin: 0 }}></hr>
                          <ListItem className={classes.ListItem} component={dataCar.fuelType.detail != null ? "a" : ""} href={dataCar.fuelType.detail} target="_blank">
                            <ListItemAvatar className={classes.listItemAvatar}>
                              <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>fuelType</strong></h6>
                            </ListItemAvatar>
                            <ListItemText primary={dataCar.fuelType.name == null ? "--" : dataCar.fuelType.name} className={classes.ListItemText} />
                            {dataCar.fuelType.detail != null ? <ArrowRightIcon /> : ""}
                          </ListItem>
                          <hr style={{ margin: 0 }}></hr>
                          <ListItem>
                            <ListItemAvatar className={classes.listItemAvatar}>
                              <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>High Light Tech</strong></h6>
                            </ListItemAvatar>
                            <ListItemText primary={dataCar.highLight == null ? "None Special or Advanced technology found" : dataCar.highLight} className={classes.ListItemText} />
                          </ListItem>
                          <hr style={{ margin: 0 }}></hr>
                          <ListItem>
                            <ListItemAvatar className={classes.listItemAvatar}>
                              <h6 style={{ margin: 0 }}><strong style={{ margin: 0 }}>Detail Info</strong></h6>
                            </ListItemAvatar>
                          </ListItem>
                          <br></br>
                          <div className={classes.textArea} >{dataCar.detail == null ? "Not updated yet" : dataCar.detail}</div>
                        </List>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Category);
