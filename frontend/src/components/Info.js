import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    maxWidth: screen.width / 2,
  },
});

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid id="component-container" style={{ position: "relative" }}  >
        <Grid xs={12} justify="center" style={{ zIndex: "5", position: "absolute", width: "100%", left: "50%", top: "50%", transform: "translate(-50%, -50%)", marginTop: screen.height - (1 / 2 * (screen.height)) }}>
          <Typography align="center" variant="h5" style={{ margin: 0, display: 'block' }}>Authors: Tuan Nguyen & Quan Tran</Typography>
          <br></br>
          <Typography align="center" variant="h5" style={{ margin: 0 }}>GitHub: <Button variant="outlined" color="secondary" component="a" href="https://github.com/tnmquan9799/Car-Recognition" target="_blank">►</Button></Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Category);
