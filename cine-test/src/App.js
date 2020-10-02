import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import ProTip from './components/ProTip';
import Dashboard from './components/Dashboard';
import MiniDrawer from './components/Drawer';


export default function App() {
  return (
    <Container maxWidth="xl">
      <MiniDrawer />
      <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/proTip" component={ProTip} />
          </Switch>
        </Router>
    </Container>
  );
};