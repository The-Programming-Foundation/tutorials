import React from 'react';
import IframV86 from './IframeV86';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '15px',
    textAlign: 'left',
    backgroundColor: '#FCF1DD',
    height: 1000,
    overflowY: "scroll"
  },
});

export default ({children, title}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{children}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <IframV86 title={title}></IframV86>
          </Paper>
        </Grid>  
      </Grid>
    </div>
  );
}
