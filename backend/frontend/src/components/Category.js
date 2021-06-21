import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 

const useStyles = theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCar: null
    };
  }
  // Fetching Cars
  async componentDidMount() {
    fetch("/api/car")
      .then((response) => {
        return response.json();
      })
      .then((dataRes) => {
        this.setState({
          dataCar: dataRes
        });
      });
  }

  render() {
    return (
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
        xs={12}
      >
        {this.state.dataCar && this.state.dataCar.map(dataCar => (
          <Grid item xs={3}>
            <Card >
              <CardActionArea>
                <CardMedia
                  // dataCar Image not build data model yet
                  // className={classes.media}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {dataCar.carName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {dataCar.detail}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              <Button variant="outlined" color="dark">Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Category);