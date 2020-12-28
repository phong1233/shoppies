import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '20px'
  }
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} variant='h3'>
        Shoppies
      </Typography>
      <Typography className={classes.title} variant='body1'>
        Welcome to Shoppies, a web application used to create a list of nominated movies!        
      </Typography>
      <Typography className={classes.title} variant='body1'>
        Search for countless of movies and add them to your list        
      </Typography>
      <Typography className={classes.title} variant='body1'>
        Your nomination list will stay with you even if you close the browser        
      </Typography>
      <Typography className={classes.title} variant='body1'>
        You can also shared this list with anyone      
      </Typography>
    </div>
  );
}