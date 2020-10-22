import React from 'react';
import { NavLink } from 'react-router-dom'
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import Modal from '../Modal/Modal';


import useStyles from './styles';

export default function MenuAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            <img
              src={require("../../img/icon.png")}
              className={classes.img}
              alt="logo"
            />
          </Typography>
          <Modal />
        </Toolbar>
      </AppBar>
      <Drawer
         className={classes.drawer}
         variant="persistent"
         anchor="left"
         open={open}
         classes={{
           paper: classes.drawerPaper,
         }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <List className={classes.navigationList}>
            <NavLink to="/" className={classes.nav}>
              <ListItem button>
                <ListItemIcon><DashboardIcon style={{color:"#ffa726"}} /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </NavLink>
            <NavLink to="/profile" className={classes.nav}>
              <ListItem button>
                <ListItemIcon><AccountBoxIcon style={{color:"#43a047"}} /></ListItemIcon>
                <ListItemText primary="Mi Cuenta" />
              </ListItem>
            </NavLink>
            <NavLink to="/" className={classes.nav}>
              <ListItem button>
                <ListItemIcon><VideogameAssetIcon style={{color:"#e53935"}} /></ListItemIcon>
                <ListItemText primary="Juegos" />
              </ListItem>
            </NavLink>
            <NavLink to="/" className={classes.nav}>
              <ListItem button>
                <ListItemIcon><ContactSupportIcon style={{color:"#00acc1"}} /></ListItemIcon>
                <ListItemText primary="Contacto" />
              </ListItem>
            </NavLink>
        </List>
      </Drawer>
    </div>
  );
}