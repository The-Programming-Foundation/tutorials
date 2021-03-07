import React from 'react';
import IframV86 from './IframeV86';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  grid: {
    overflowY: "auto",
    height: 1000
  }
});

export default ({children, title}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className={classes.grid}>
          {children}
        </Grid>
        <Grid item xs={12} sm={6}>
          <IframV86 title={title}></IframV86>
        </Grid>  
      </Grid>
    </div>
  );
}
