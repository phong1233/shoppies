import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';

import NominationPage from './NominationPage';
import SearchPage from './SearchPage';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 999
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = React.useState(undefined);

  const handleChange = (event, newValue) => {
    setCurrentPage(newValue);
  };

  useEffect(() => {
    let url =  require('url');
    let website = url.parse(window.location.href);
    let page = website.path.substr(1) ? website.path.substr(1) : 'about';
    setCurrentPage(page);
  }, []);

  return (
    <Router>
      <BottomNavigation value={currentPage} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction component={Link} to='/' label='About' value='about' icon={<InfoIcon />} />
        <BottomNavigationAction component={Link} to='/search' label='Search' value='search' icon={<SearchIcon />} />
        <BottomNavigationAction component={Link} to='/nomination' label='Nomination' value='nomination' icon={<FavoriteIcon />} />
      </BottomNavigation>
      <main>
        <Switch>
          <Route path='/' exact component={AboutPage}/>
          <Route path='/search' exact component={SearchPage}/>
          <Route path='/nomination' exact component={NominationPage}/>
          <Route path='/shared' component={SharedNominationPage}/>
          <Route path='/' component={NotFound}/>
        </Switch>
      </main>
    </Router>
  );
}

function AboutPage() {
  return (
    <div>
      About
    </div>
    );
}

function SharedNominationPage() {
  return (
    <div>
      Shared
    </div>
    );
}

function NotFound() {
  return (
    <div>
      Error 404 page not found
    </div>
    );
}