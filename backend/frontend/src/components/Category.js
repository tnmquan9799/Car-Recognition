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
import SearchIcon from '@material-ui/icons/Search';
import '../../static/css/Category.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


const useStyles = (theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
});

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCar: null,
      searchRq: ""
    };
    this.onSearch = this.onSearch.bind(this)
  }
  // Fetching Cars
  async componentDidMount() {
    this.onSearch();
  }

  async componentDidUpdate() {
   
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
        console.log(dataRes);
      });
  }

  render() {
    const { classes } = this.props;
     return (
      <Grid
        xs={12}
        style={{ color: "#fff", margin: 0 }}
      >
        <Grid id="component-container" style={{ position: "relative" }}  >
          <Grid container justify="center" xs={12} style={{ zIndex: "5", position: "absolute", width: "100%", left: "50%", top: "50%", transform: "translate(-50%, -50%)", marginTop: screen.height - (1 / 2 * (screen.height)) }}>
            <Typography style={{ pointerEvents: "none", userSelect: "none" }} id="title-text" xs={12} variant="h3" component="h3" gutterBottom>
              Car Recognition System
            </Typography>
            <Button id="drawerBtn" style={{ color: "#fff", userSelect: "none" }}>
              Press to search
            </Button>
            <Grid id="inputBox" xs={12} >
              <Grid container justify="center" xs={12} style={{ marginBottom: "50px", marginTop: "50px" }}>
                <h5 xs={4} style={{ userSelect: "none" }}>Select File : </h5>
                <input  style={{ width: "185px", userSelect: "none" }} xs={4} id="uploadImage" type="file" id="bannerImg" name="file"/>
                <Button xs={4} type="submit" id="uploadBtn" onClick={() => this.submit()} variant="contained" color="primary" style={{ userSelect: "none" }} >
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
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Category);

// return (
//       <Grid
//         container
//         spacing={3}
//         alignItems="center"
//         justify="center"
//         style={{ minHeight: "100vh" }}
//         xs={12}
//       >
//         <Grid container className="search-container" xs={12} justify="center" >
//           <div id="searchBar" className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase onChange={this.onSearch} id="searchInput"
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               xs={12}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//         </Grid>
//         {this.state.dataCar &&
//           this.state.dataCar.map((dataCar) => (
//             <Grid item xs={3}>
//               <Card>
//                 <CardActionArea>
//                   <CardMedia
//                     // dataCar Image not build data model yet
//                     // className={classes.media}
//                     title="Contemplative Reptile"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {dataCar.carName}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       component="p"
//                     >
//                       {dataCar.brand}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//                 <CardActions>
//                   <Button variant="outlined" color="#333">
//                     Details
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//       </Grid>
//     );