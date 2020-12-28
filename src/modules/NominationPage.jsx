import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
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

export default function NominationPage() {
  const classes = useStyles();
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    let nominationList = JSON.parse(localStorage.getItem('nominations'));
    nominationList = nominationList ? nominationList : [];
    setNominatedMovies(nominationList);
  }, []);

  const handleShare = () => {
    let nominationList = JSON.parse(localStorage.getItem('nominations'));
    nominationList = nominationList ? nominationList : [];
    const nominees = nominationList.join();
    const generatedUrl = `${window.location.protocol}//${window.location.host}/shared?nominees=${nominees}`;
    navigator.clipboard.writeText(generatedUrl);
    setNotify(true);
  }

  const handleClose = () => {
    setNotify(false);
  }

  return (
    <div>
      <Typography className={classes.title} variant='h3'>
        Nomination List
      </Typography>
      <div className={classes.title}>
        <Button variant='contained' color='primary' onClick={handleShare}>
          Share
        </Button>
      </div>
      <MovieList movies={nominatedMovies} />
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={notify}
        onClose={handleClose}
        autoHideDuration={3000}
        message='Link saved to clipboard'
      />
    </div>
  );
}
