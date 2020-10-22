import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';


import Account from './Views/Account/Account';
import Drawer from './Components/Drawer/Drawer';
import Footer from './Components/Footer/Footer';

import theme from './theme';

const drawerWidth = 0;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('xl')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(15, 4),
    background: '#ffffff',
  },
};

function App(props) {
  const { classes } = props;

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Drawer />
      </nav>
      <div className={classes.app}>
        <main className={classes.main}>
        <Router>
          <Switch>
            <Route exact path="/" component={Account} />
            <Route exact path="/profile" component={Account} />
          </Switch>
        </Router>
        </main>
        <Divider />
        {/* <Footer /> */}
      </div>
    </div>
  </ThemeProvider>
  );
};



App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);