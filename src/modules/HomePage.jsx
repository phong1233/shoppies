import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    paddingRight: '20px',
    paddingLeft: '20px',
    textAlign: 'center'
  },
  cardContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px'
  },
  card: {
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px'
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
      <div className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardContent>
            <Typography>
              <Link href="https://github.com/phong1233" color="secondary">
                By: Phong Le
              </Link>
            </Typography>
            <Typography>
              <Link href="https://github.com/phong1233/shoppies" color="secondary">
                Source code
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}