import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  paper: {
    position: 'absolute',
    width: 492,
    height: 434,
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-41%, -57%)',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  login: {
    marginTop: theme.spacing(1),
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>

            <div className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h2 id="simple-modal-title">Iniciar Sesion</h2>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-full-width"
                            label="Usuario"
                            style={{ margin: 8 }}
                            placeholder="Usuario"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-full-width"
                            label="Contraseña"
                            style={{ margin: 8 }}
                            placeholder="Contraseña"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid 
                        item
                        xs={12}
                        container
                        justify="flex-end"
                        alignItems="center"
                    >
                        <Button color="primary" className={classes.login}>Olvidé mi contraseña</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid 
                        item
                        xs={12}
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Button variant="contained" color="primary" className={classes.login}>
                            Iniciar Sesion
                        </Button>
                    </Grid>
                </Grid>
            </div>

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}