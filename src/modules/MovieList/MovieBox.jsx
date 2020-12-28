import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { makeStyles } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';
import styles from './Movie.module.css';

const useStyles = makeStyles({
  box: {
    width: 300,
    height: 444,
    position: 'relative'
  },
  cover: {
    width: 300,
    height: 444
  },
  button: {
    position: 'absolute',
    zIndex: 10,
    right: 0,
    top: 0
  }
});

export default function MovieBox(props) {
  const classes = useStyles();
  const [nominated, setNominated] = useState(false);
  const [movie, setMovie] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?i=${props.movie}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
    .then(res => res.json())
    .then(
      (result) => {
        setMovie(result);
        setLoading(false);
      }
    )
    let nominationList = JSON.parse(localStorage.getItem('nominations'));
    let found = nominationList ? nominationList.indexOf(props.movie) > -1 : false;
    setNominated(found ? true : false);
  }, [props]);

  const isNominated = () => {
    let nominationList = localStorage.getItem('nominations');
    let found = nominationList ? nominationList.indexOf(props.movie) > -1 : false;
    return found ? true : false;
  }

  const handleNominateMovie = () => {
    let nominationList = JSON.parse(localStorage.getItem('nominations'));
    nominationList = nominationList ? nominationList : [];

    if( nominated ) {
      let index = nominationList.indexOf(props.movie);
      if (index > -1) {
        nominationList.splice(index, 1);
      }
    }
    else {
      nominationList.push(props.movie);
    }
    localStorage.setItem('nominations', JSON.stringify(nominationList));
    setNominated(isNominated());
  }

  return (
    <Card className={classes.box}>
      {!loading &&
        <div>
          <div
            className={movie.Poster === 'N/A' ? styles.showTitle : styles.title}
            onClick={ () => {console.log('clicked')}}
          >
            <div>
              <Typography variant='h3'>
                {movie.Title}
              </Typography>
              <Typography variant='h3'>
                {`(${movie.Year})`}
              </Typography>
            </div>
          </div>
          <div className={classes.button}>
            <IconButton aria-label='nominate' onClick={handleNominateMovie}>
              <FavoriteIcon style={{ fontSize: 40, color: nominated ? red[500] : grey[500] }} />
            </IconButton>
          </div>
          <CardMedia
            className={classes.cover}
            image={movie.Poster}
            title={movie.Title}
          />
        </div>
      }
    </Card>
  );
}
