import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircle from '@material-ui/icons/AccountCircle';

import DashboardIcon from '@material-ui/icons/Dashboard';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

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
          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className={classes.profile}
              >
                <AccountCircle />
              </IconButton>
          </div>
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
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.navigationList}>

            <ListItem button>
              <ListItemIcon><DashboardIcon style={{color:"#ffa726"}} /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><AccountBoxIcon style={{color:"#43a047"}} /></ListItemIcon>
              <ListItemText primary="Mi Cuenta" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><VideogameAssetIcon style={{color:"#e53935"}} /></ListItemIcon>
              <ListItemText primary="Juegos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ContactSupportIcon style={{color:"#00acc1"}} /></ListItemIcon>
              <ListItemText primary="Contacto" />
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}