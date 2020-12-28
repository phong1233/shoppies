import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import MovieList from './MovieList/MovieList';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
});

export default function NominationPage() {
  const classes = useStyles();
  const [nominatedMovies, setNominatedMovies] = useState([]);

  useEffect(() => {
    let nominationList = JSON.parse(localStorage.getItem('nominations'));
    nominationList = nominationList ? nominationList : [];
    setNominatedMovies(nominationList);
  }, []);

  return (
    <div>
      <Typography className={classes.title} variant='h3'>
        Nominations
      </Typography>
      <MovieList movies={nominatedMovies} />
    </div>
  );
}
