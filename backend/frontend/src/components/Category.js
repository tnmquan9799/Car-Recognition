import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

export default class Category extends React.Component {

  render() {
    return (
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>
        Tuan Nguyen
      </Grid>
    )
  }
}
