import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import MovieList from './MovieList/MovieList';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '20px'
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    width: '60%'
  }
});

export default function NominationPage() {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const handleSearch = (e) => {
    let value = e.target.value;
    if(value === undefined || value === '') {
      setMovies([]);
      setError(true);
      return;
    }
    fetch(`http://www.omdbapi.com/?s=${value}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.Response === 'False') {
          setError(true)
          setMovies([]);
        }
        else {
          setMovies(result.Search.map((movie) => movie.imdbID));
          setError(false);
        }
      }
    )
  }

  return (
    <div>
      <Typography className={classes.title} variant='h3'>
        Search
      </Typography>
      <div className={classes.title}>
        <TextField
          className={classes.searchBar}
          label='Search'
          variant='outlined'
          color='primary'
          onChange={handleSearch}
          error={error}
        />
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
