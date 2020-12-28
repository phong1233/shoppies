import React from 'react';
import Grid from '@material-ui/core/Grid';

import MovieBox from './MovieBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    padding: '40px 40px 80px 40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function MovieList(props) {
  const classes = useStyles();

  return(
    <div className={classes.container}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='flex-start'
        spacing={8}
      >
        {
          props.movies.map((movie) => {
            return(
              <Grid item key={movie}>
                <MovieBox movie={movie}></MovieBox>
              </Grid>
            );
          })
        }
      </Grid>
    </div>
  );
}
