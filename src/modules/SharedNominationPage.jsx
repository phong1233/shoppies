import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import MovieList from './MovieList/MovieList';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '20px'
  }
});

export default function SharedNominationPage() {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nominees = urlParams.get('nominees')
    setMovies(nominees.split(','))

}, []);

  return (
    <div>
      <Typography className={classes.title} variant='h3'>
        Shared Nominations
      </Typography>
      <MovieList movies={movies} />
    </div>
  );
}
